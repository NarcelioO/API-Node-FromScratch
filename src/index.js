import express from 'express'
//import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'

const app = express()
app.use(express.json())

const PORT = 3000
const database =  new DatabasePostgres() 



app.post('/videos',async (req, res)=>{
    const {title, description, duration} = req.body
    await database.create({
        //quando o nome da chave é igual ao nome do valor passado
        //ShortSintax
        title:title,
        description:description,
        duration:duration,
    })

    return res.status(201).send()
})

app.get('/videos',async (req, res)=>{
    const search = req.params.search


    const videos = await database.list(search)

    return res.send(videos)
})

app.put('/videos/:id', async (req,res)=>{
    const videoId = req.params.id
    const {title, description, duration} = req.body
    await database.update(videoId,{
        title:title,
        description:description,
        duration:duration,
    })
    return res.status(204).send()
}) 
app.put('/videos/:id',(req, res)=>{

}) 
app.delete('/videos/:id', async (req, res)=>{
    const videoId = req.params.id

    await database.delete(videoId)

    return res.status(204).send()
})


app.listen(PORT)

