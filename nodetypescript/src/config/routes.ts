import express from 'express';
import todoRouter from '../todo/todo.routes';

const router = express.Router();

router.use('/todos', todoRouter)

export default router;