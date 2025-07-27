import express from 'express';
import {addCourse, updateCourse} from '../controllers/course.controller.js'

const router = express.Router();

router.post('/addCourse', addCourse);
router.put('updateCourse:/courseId', updateCourse);

export default router