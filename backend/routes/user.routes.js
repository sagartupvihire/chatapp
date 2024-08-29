import express from 'express';
import protectRoutes from '../middleware/protectRoutes.js';
import { getUserForsidebar } from '../controller/user.controller.js';

const router = express.Router();

router.get('/', protectRoutes,getUserForsidebar);

export default router;