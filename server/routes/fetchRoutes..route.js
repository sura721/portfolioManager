import express from 'express';
import {
  fetchExperiance,
  fetchProjects,
  fetchSkills,
  fetchSocialLinks,
} from '../controller/fetch.controller.js';

const router = express.Router();

router.get("/skills", fetchSkills);
router.get("/projects", fetchProjects);
router.get("/socialLinks", fetchSocialLinks);
router.get("/experiences", fetchExperiance);

export default router;
