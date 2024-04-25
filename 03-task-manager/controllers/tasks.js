const Task = require('../models/Tasks.js')
const asyncWrapper = require('../middleware/asyncWrapper.js')
const { createCustomError } = require('../errors/customError.js')

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
})

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findById(taskID)
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404))
    // return res.status(404).json({ msg: `No task with id: ${taskID}` })
  }

  res.status(200).json({ task })
})

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findByIdAndDelete(taskID)
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404))
    // return res.status(404).json({ msg: `No task with id: ${taskID}` })
  }
  res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findByIdAndUpdate(taskID, req.body, {
    new: true,
    runValidators: true,
  })
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404))
    // return res.status(404).json({ msg: `No task with id: ${taskID}` })
  }
  res.status(200).json({ task })
})

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
}
