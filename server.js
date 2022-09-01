const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let port = 3001;

app.listen(port, () => {
	console.log("http://localhost:" + port)
})

const Create = require('./CRUD/Create')
const Read = require('./CRUD/Read')
const Update = require('./CRUD/Update')
const Delete = require('./CRUD/Delete')

const { getUsers } = Read;

app.get('/users', (req, res) => {
	const { uid } = req.body;
	getUsers().then(value => res.send(value))
})
app.post('/signup', (req, res) => {
	const { username, password } = req.body;
	Create(username, password).then(value => res.send(value))
})
app.put('/change', (req, res) => {
	const { username, password, uid } = req.query;
	Update(username, password, uid).then(value => res.send(value))
})
app.delete('/delete/:uid', (req, res) => {
	const { uid } = req.params;
	Delete(uid).then(value => res.send(value))
})





