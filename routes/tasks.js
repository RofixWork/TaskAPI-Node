const express = require("express");
const TaskController = require("../controllers/tasks.controller");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: API for managing tasks
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated Task ID
 *         name:
 *           type: string
 *           description: Task name (3 to 20 characters)
 *           minLength: 3
 *           maxLength: 20
 *         completed:
 *           type: boolean
 *           description: Task completion status
 *           default: false
 *       example:
 *         id: "65a1b2c3d4e5f6g7h8i9j0"
 *         name: "Learn Swagger"
 *         completed: false
 */

/**
 * @swagger
 * /api/v1/tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 *     description: Retrieve a list of all tasks
 *     responses:
 *       200:
 *         description: Returns a list of tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.get("/", TaskController.getAll);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     tags: [Tasks]
 *     description: Retrieve a task using its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Task ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the task object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Task not found
 */
router.get("/:id", TaskController.getSingle);

/**
 * @swagger
 * /api/v1/tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     description: Add a new task to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: Task created successfully
 *       400:
 *         description: Invalid input data
 */
router.post("/", TaskController.create);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   patch:
 *     summary: Update a task
 *     tags: [Tasks]
 *     description: Update specific fields of a task using its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Task ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Updated task name (3 to 20 characters)
 *               completed:
 *                 type: boolean
 *                 description: Updated completion status
 *     responses:
 *       200:
 *         description: Task updated successfully
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Task not found
 */
router.patch("/:id", TaskController.update);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   put:
 *     summary: Replace a task
 *     tags: [Tasks]
 *     description: Replace an existing task with a new one
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Task ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: Task replaced successfully
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Task not found
 */
router.put("/:id", TaskController.edit);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     tags: [Tasks]
 *     description: Delete a task using its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Task ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 */
router.delete("/:id", TaskController.delete);

module.exports = router;
