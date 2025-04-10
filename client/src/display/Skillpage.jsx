import { useEffect } from "react";
import { useFormStore } from "../store/useFormStore";
import toast from "react-hot-toast";
import { Trash } from "lucide-react";

const SkillList = () => {
  const { fetchSkills, skills, deleter } = useFormStore();

  useEffect(() => {
    fetchSkills('/skills', 'skills'); 
  }, [fetchSkills]);

  const handleDelete = async (id) => {
    try {
      await deleter(`/delete/skill/${id}`);

      
      fetchSkills();
    } catch (err) {
      toast.error(err);
      
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills?.map((skill) => (
          <div
            key={skill._id}
            className="bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-700 text-white hover:shadow-2xl transition duration-300"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-bold">{skill.name}</h3>
              <button
                onClick={() => handleDelete(skill._id)}
                className="text-red-400 hover:text-red-600"
              >
                <Trash />
              </button>
            </div>
            <p className="text-sm text-gray-400">Category: {skill.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
