/**
 * @type {import('mongoose').Model} Task
 */
const { createCustomError } = require("../errors/custom-error");
const Task = require("../models/Task");
const asyncWrapper = require("../utils/async");
class TaskController {
  /**
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
  static getAll = asyncWrapper(async (request, response) => {
    const tasks = await Task.find();
    return response.status(200).json({
      status: "success",
      data: { tasks, nbHits: tasks.length },
    });
  });
  /**
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
  static create = asyncWrapper(async (request, response) => {
    const task = await Task.create(request.body);
    return response.status(201).json({ task });
  });
  /**
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   * @param {import('express').NextFunction} next
   */
  static getSingle = asyncWrapper(async (request, response, next) => {
    const { id } = request.params,
      task = await Task.findById(id);
    if (!task) {
      next(createCustomError("Task not found", 404));
    }
    return response.status(200).json({ task });
  });
  /**
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
  static update = asyncWrapper(async (request, response, next) => {
    const { id } = request.params;

    const task = await Task.findByIdAndUpdate(id, request.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      next(createCustomError("Task not found", 404));
    }
    return response.status(200).json({
      message: `Updated Task '#${id}' Sccessfully...`,
    });
  });
  /**
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
  static edit = asyncWrapper(async (request, response, next) => {
    const { id } = request.params;
    const task = await Task.replaceOne({ _id: id }, request.body);

    if (!task) {
      next(createCustomError("Task not found", 404));
    }
    return response.status(200).json({
      message: "EDITED...",
      code: 200,
    });
  });
  /**
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
  static delete = asyncWrapper(async (request, response, next) => {
    const { id } = request.params;
    const task = await Task.findOneAndDelete({ _id: id });
    if (!task) {
      next(createCustomError("Task not found", 404));
    }
    return response.status(200).json({ task });
  });
}

module.exports = TaskController;
