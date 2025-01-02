import express from 'express'

const user = express.Router()

user.get('/', (req, res) => {
    res.send('Hello User!')
})

export default user
