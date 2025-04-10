import { useState } from "react";
import toast from "react-hot-toast";
import { useFormStore } from "../store/useFormStore";
export default function SkillForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [useCustom, setUseCustom] = useState(false);
const {submitForm} =useFormStore()
  const handleSubmit =async (e) => {
    e.preventDefault();
    const finalCategory = useCustom ? customCategory : category;
    try {
       await submitForm("/skill",{ name, category: finalCategory })
       setName("")
       setCategory("")
       setCustomCategory("")
    } catch (err) {
      toast.error(response.data.message)
    }
  
  };

  const categories = [
    "Frontend",
    "Backend",
    "Database",
    "Styling",
    "Framework",
    "Language",
    "Cloud",
    "DevOps",
    "API",
    "State Management",
    "Testing",
    "Other",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-[1.01]">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">🚀 Add New Skill</h2>
  
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Skill Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Skill Name</label>
            <input
              type="text"
              placeholder="e.g. React"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
  
          {/* Category Section */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
  
            {!useCustom ? (
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              >
                <option value="">- Select Category -</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                placeholder="Enter custom category"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            )}
  
            <div className="mt-2 text-sm text-gray-400 flex items-center gap-2">
              <input
                type="checkbox"
                id="customCat"
                checked={useCustom}
                onChange={() => setUseCustom(!useCustom)}
              />
              <label htmlFor="customCat" className="text-gray-300">Use custom category</label>
            </div>
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-xl text-lg font-semibold hover:opacity-90 transition duration-200"
          >
            Post Skill 💾
          </button>
        </form>
      </div>
    </div>
  );
  
}
