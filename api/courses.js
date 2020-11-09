const express = require('express')
const router = express.Router()

//middleware
router.use(express.json()) //to handle our post data

const courses = [
  { id: 1, name: 'Computer Security and Forensics' },
  { id: 2, name: 'Acturial Science' },
  { id: 3, name: 'Architecture' },
]
//get a list of all courses

router.get('/api/courses', (req, res) => {
  res.send(courses)
})

//get a single course by id
router.get('/api/courses/:id', (req, res) => {
  let course = courses.find(course => course.id === parseInt(req.params.id))
  if (!course) res.sendStatus(404).send('Not found')
  res.send(course)
})

//create a new course
router.post('/api/courses', (req, res) => {
  let course = { id: courses.length + 1, name: req.body.name }
  courses.push(course)
  res.send(course)
})

//update a course
router.put('/api/courses/:id', (req, res) => {
  let course = courses.find(course => course.id === parseInt(req.params.id))
  if (!course) return res.sendStatus(404).send('Not found')
  course.name = req.body.name
  res.send(course)
})

//delete a course
router.delete('/api/courses/:id', (req, res) => {
  let course = courses.find(course => course.id === parseInt(req.params.id))
  if (!course) return res.sendStatus(404).send('Not found')
  const index = courses.indexOf(course)
  courses.splice(index, 1)
  res.send(course)
})

module.exports = router
