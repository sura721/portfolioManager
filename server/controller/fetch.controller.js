
import Project from "../model/project.js";
import Skill from "../model/skills.js";
import SocialLink from "../model/socialLInks.model.js";
import Experience from "../model/experiance.model.js";


const fetchAll = (Model) => async (req, res) => {
  try {
    const data = await Model.find();
    res.status(200).json(data);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Internal server error" });
  }
};

export const fetchProjects = fetchAll(Project);
export const fetchSkills = fetchAll(Skill);
export const fetchSocialLinks = fetchAll(SocialLink);
export const fetchExperiance = fetchAll(Experience);
