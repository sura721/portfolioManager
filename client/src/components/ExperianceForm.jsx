import { useState } from "react";
import { useFormStore } from "../store/useFormStore";
import { Code, Globe, Server, Database, GitBranch, Package, Laptop, Briefcase, User, Folder, Twitter, Github, Linkedin } from "lucide-react";

const iconOptions = {
  "Personal Projects": "Code",
  "Freelance Projects": "Globe",
  "Open Source Contributions": "GitBranch",
  "Backend Development": "Server",
  "Database Management": "Database",
  "Web Development": "Laptop",
  "Project Management": "Briefcase",
  "UI/UX Design": "Folder",
  "Social Media": "Twitter",
  "GitHub Profile": "Github",
  "LinkedIn Profile": "Linkedin"
};

const iconComponents = {
  "Code": <Code className="h-8 w-8" />,
  "Globe": <Globe className="h-8 w-8" />,
  "GitBranch": <GitBranch className="h-8 w-8" />,
  "Server": <Server className="h-8 w-8" />,
  "Database": <Database className="h-8 w-8" />,
  "Laptop": <Laptop className="h-8 w-8" />,
  "Briefcase": <Briefcase className="h-8 w-8" />,
  "Folder": <Folder className="h-8 w-8" />,
  "Twitter": <Twitter className="h-8 w-8" />,
  "Github": <Github className="h-8 w-8" />,
  "Linkedin": <Linkedin className="h-8 w-8" />
};

export default function ExperienceForm() {
  const { submitForm } = useFormStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [iconName, setIconName] = useState("Personal Projects");
  const [dateRange, setDateRange] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExperience = {
      title,
      icon: iconOptions[iconName],
      description,
      dateRange,
    };
    try {
      await submitForm("/experiences", newExperience);
      setTitle("")
      setDescription("")
      setIconName("")
      setDateRange("")
    } catch (err) {
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-4">
      <div className="w-full max-w-lg bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl text-white">
        <h2 className="text-3xl font-bold text-center text-indigo-300 mb-6">
          🌱 Add Your Experience
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Experience Title</label>
            <input
              type="text"
              placeholder="e.g. MERN Stack Developer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              placeholder="Describe your experience or skills here."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows="4"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Date Range (Optional)</label>
            <input
              type="text"
              placeholder="e.g. 2021 - Present"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Choose Experience Type</label>
            <select
              value={iconName}
              onChange={(e) => setIconName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {Object.keys(iconOptions).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>

            <div className="mt-3 text-sm flex items-center gap-2 text-indigo-300">
              
            </div>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-sm">Icon Preview:</span>
            <div>{iconComponents[iconOptions[iconName]]}</div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-2 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Add Experience 🌱
          </button>
        </form>
      </div>
    </div>
  );
}