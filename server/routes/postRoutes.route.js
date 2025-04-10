
import express from "express";
import {
  projectSubmit,
  submitExperience,
  SubmitSkills,
  submitSocialLinks,
} from "../controller/submit.controller.js";

const router = express.Router();

router.post("/project", projectSubmit);
router.post("/skill", SubmitSkills);
router.post("/socialLinks", submitSocialLinks);
router.post("/experiences", submitExperience);

export default router;
