import express from 'express'
import cors from 'cors'
import user from './routers/user.router'

const app = express()

app.use(cors())

app.use('/user', user)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
