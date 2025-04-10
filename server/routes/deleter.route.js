import express from 'express'
import {deleteItem} from '../controller/delete.controller.js';
const router = express.Router();

router.delete("/delete/:type/:id", deleteItem);

export default router