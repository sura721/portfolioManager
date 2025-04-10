import { create } from "zustand";
import { axiosInstance } from "../lib/axios.lib";
import toast from "react-hot-toast";

export const useFormStore = create((set) => {
  const fetchData = async (endpoint, key) => {
    try {
      const res = await axiosInstance.get(endpoint);
      set({ [key]: res.data });
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return {
    skills: [],
    projects: [],
    expriances: [],

    submitForm: async (postRoute, formData) => {
      try {
        const res = await axiosInstance.post(postRoute, formData);
        toast.success(res.data.message);
      } catch (err) {
        toast.error(err.response?.data?.message || "Submit failed");
      }
    },

    fetchSkills: () => fetchData("/skills", "skills"),
    fetchProjects: () => fetchData("/projects", "projects"),
    fetchExperiance: () => fetchData("/experiences", "expriances"),

    deleter: async (deleterRoute) => {
      try {
        const res = await axiosInstance.delete(deleterRoute);
        toast.success("Deleted Successfully!");
        return res.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Delete failed");
      }
    },
  };
});
