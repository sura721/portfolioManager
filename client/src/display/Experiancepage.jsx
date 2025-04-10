import { useEffect } from "react";
import { useFormStore } from "../store/useFormStore";
import toast from "react-hot-toast";
import {
  Code, Globe, Server, Database, GitBranch,
  Package, Laptop, Briefcase, User, Folder,
  Twitter, Github, Linkedin, Trash2
} from "lucide-react";

const iconMap = {
  "Code": <Code className="w-7 h-7" />,
  "Globe": <Globe className="w-7 h-7" />,
  "GitBranch": <GitBranch className="w-7 h-7" />,
  "Server": <Server className="w-7 h-7" />,
  "Database": <Database className="w-7 h-7" />,
  "Laptop": <Laptop className="w-7 h-7" />,
  "Briefcase": <Briefcase className="w-7 h-7" />,
  "Folder": <Folder className="w-7 h-7" />,
  "Twitter": <Twitter className="w-7 h-7" />,
  "Github": <Github className="w-7 h-7" />,
  "Linkedin": <Linkedin className="w-7 h-7" />,
};

const ExperienceList = () => {
  const { expriances, fetchExperiance, deleter } = useFormStore();

  useEffect(() => {
    fetchExperiance(); 
  }, [fetchExperiance]);

  const handleDelete = async (id) => {
    try {
      await deleter(`/delete/experience/${id}`);
  
      fetchExperiance(); 
    } catch (err) {
      toast.error("Failed to delete");
 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {expriances?.map((exp) => (
          <div
            key={exp._id}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition duration-300 text-white"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                {iconMap[exp.icon] || <User className="w-7 h-7" />}
                <h3 className="text-lg font-semibold">{exp.title}</h3>
              </div>
              <button
                onClick={() => handleDelete(exp._id)}
                className="text-red-400 hover:text-red-600"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-300 mb-2">{exp.description}</p>
            <p className="text-xs text-indigo-400">{exp.dateRange}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
