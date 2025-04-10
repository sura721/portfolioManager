import Project from "../model/project.js";
import Skill from "../model/skills.js";
import Experience from "../model/experiance.model.js";
const models = {
  project: Project,
  skill: Skill,
  experience: Experience,
};

export const deleteItem = async (req, res) => {
  const { type, id } = req.params;

  const Model = models[type.toLowerCase()];
  if (!Model) {
    return res.status(400).json({ message: "Invalid type provided" });
  }

  try {
    const deleted = await Model.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: `${type} not found` });
    }
    res.status(200).json({ message: `${type} deleted successfully` });
  } catch (err) {

    res.status(500).json({ message: "Server error" });
  }
};
