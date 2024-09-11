import express from 'express'
import { DatabaseMemory } from './database-memory.js'

const app = express()
app.use(express.json())

const PORT = 3000
const database =  new DatabaseMemory() 



app.post('/videos',(req, res)=>{
    const {title, description, duration} = req.body
    database.create({
        //quando o nome da chave é igual ao nome do valor passado
        //ShortSintax
        title:title,
        description:description,
        duration:duration,
    })

    return res.status(201).send()
})

app.get('/videos',(req, res)=>{
    const videos = database.list()

    return res.send(videos)
})

app.put('/videos/:id',(req,res)=>{
    const videoId = req.params.id
    const {title, description, duration} = req.body
    database.update(videoId,{
        title:title,
        description:description,
        duration:duration,
    })
    return res.status(204).send()
}) 
app.put('/videos/:id',(req, res)=>{

}) 
app.delete('/videos/:id',(req, res)=>{
    const videoId = req.params.id
    database.delete(videoId)

    return res.status(204).send()
})


app.listen(PORT)

