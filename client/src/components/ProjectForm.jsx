import { useState } from "react";
import { useFormStore } from "../store/useFormStore";
import toast from "react-hot-toast";

const ProjectForm = () => {
  const { submitForm } = useFormStore();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    technologies: "",
    liveUrl: "",
    githubUrl: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        image: reader.result, 
      }));
      setImagePreview(reader.result); 
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      technologies: formData.technologies.split(",").map((tech) => tech.trim()), 
    };

    try {
      await submitForm("/project",dataToSend); 
      setFormData({
        title: "",
        description: "",
        image: null,
        technologies: "",
        liveUrl: "",
        githubUrl: "",
      });
      setImagePreview(null);
      toast.success("Project submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit the project");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 shadow-2xl rounded-3xl p-8 w-full max-w-2xl space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        Submit Your Project
      </h2>
  
      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Project Title
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-xl border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
  
      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Description
        </label>
        <textarea
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-xl border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
        ></textarea>
      </div>
  
      {/* Image File Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Project Image
        </label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="w-full px-4 py-2 rounded-xl border border-gray-600 bg-gray-800 text-white file:mr-4 file:py-2 file:px-4 file:border file:border-gray-600 file:rounded-md file:bg-gray-700 file:text-sm file:font-medium file:text-white"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mt-3 w-full max-h-64 object-cover rounded-xl shadow-md border border-gray-700"
          />
        )}
      </div>
  
      {/* Technologies */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Technologies (comma-separated)
        </label>
        <input
          type="text"
          name="technologies"
          value={formData.technologies}
          onChange={handleChange}
          required
          placeholder="e.g. React, Tailwind, MongoDB"
          className="w-full px-4 py-2 rounded-xl border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
  
      {/* Live URL */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Live URL
        </label>
        <input
          type="text"
          name="liveUrl"
          value={formData.liveUrl}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-xl border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
  
      {/* GitHub URL */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          GitHub URL
        </label>
        <input
          type="text"
          name="githubUrl"
          value={formData.githubUrl}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-xl border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
  
      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition duration-300"
      >
        Submit Project
      </button>
    </form>
  </div>
  
  );
};

export default ProjectForm;