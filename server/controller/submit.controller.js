import Project from "../model/project.js";
import Skill from "../model/skills.js";
import SocialLink from "../model/socialLInks.model.js";
import Experience from "../model/experiance.model.js";
import cloudinary from "../lib/cloudinary.js";

const createDocument = (Model, successMessage) => async (req, res) => {
  try {
    await Model.create(req.body);
    res.status(201).json({ message: successMessage });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const projectSubmit = async (req, res) => {
  const { title, description, image, technologies, liveUrl, githubUrl } = req.body;

  try {
    let uploadedImage = null;
    if (image) {
      const uploadResult = await cloudinary.uploader.upload(image, {
        folder: "projects",
      });
      uploadedImage = uploadResult.secure_url;
    }

    const newProject = await Project.create({
      title,
      description,
      image: uploadedImage,
      technologies,
      liveUrl,
      githubUrl,
    });

    res.status(201).json({ message: "Project posted successfully", data: newProject });
  } catch (err) {
    res.status(500).json({ message: "Error on posting data" });
  }
};

export const SubmitSkills = createDocument(Skill, "Skill posted successfully");
export const submitSocialLinks = createDocument(SocialLink, "Social link posted successfully");
export const submitExperience = createDocument(Experience, "Experience posted successfully");
