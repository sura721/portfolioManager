import { useEffect } from "react";
import { useFormStore } from "../store/useFormStore";
import toast from "react-hot-toast";

const ProjectsList = () => {
  const { projects, fetchProjects, deleter } = useFormStore();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleDelete = async (id) => {
    try {
      await deleter(`/delete/project/${id}`);
    
     
      fetchProjects();
    } catch (error) {
  
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <h1 className="text-4xl font-bold text-center text-gray-100 mb-10 drop-shadow-md">
        🕶️ All Projects
      </h1>

      {projects.length === 0 ? (
        <p className="text-center text-gray-400">No projects to display</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white/5 backdrop-blur-md shadow-lg rounded-2xl p-5 flex flex-col space-y-3 border border-white/10 hover:border-white/20 transition"
            >
              {project.image && (
                <div className="bg-black rounded-xl overflow-hidden h-64 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              )}

              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              <p className="text-sm text-gray-300">{project.description}</p>

              <div className="text-sm text-gray-400">
                <span className="font-medium text-gray-200">Tech Stack:</span>{" "}
                {project.technologies.join(", ")}
              </div>

              <div className="flex gap-3 text-sm mt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Live
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:underline"
                >
                  GitHub
                </a>
              </div>

              <button
                onClick={() => handleDelete(project._id)}
                className="mt-auto bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
