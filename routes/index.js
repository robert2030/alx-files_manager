import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

const router = Router();

// Status and stats routes
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

// User routes
router.post('/users', UsersController.postNew);
router.get('/users/me', UsersController.getMe);

// Auth routes
router.get('/connect', AuthController.getConnect);
router.get('/disconnect', AuthController.getDisconnect);

// File routes
router.post('/files', FilesController.postUpload);

export default router;
