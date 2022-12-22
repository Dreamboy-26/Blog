import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Router from './routes/route.js'

const app = express()

mongoose.connect('mongodb+srv://PankajKumar:PankajKumar@myblog.2dxtlat.mongodb.net/?retryWrites=true&w=majority')

app.use(cors())
app.use(express.json())
app.use('/', Router)

app.listen(8080, () => {
  console.log('server started')
})
