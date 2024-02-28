//importando o prisma client
import prisma from '../database/client.js'
const controller ={} //Objeto vazio

//criando o novo carro
controller.create = async function(req, res){
    try{
       await prisma.car.create({data: req.body})

        //HTTP 201: CREATED
        res.status(201).end()
    }
    catch(error){
        console.log(error)

        //HTTP 500:INTERNET SERVER ERROR
        res.status(500).end()
    }
}

controller.retrieveALL = async function (req, res){
    try{
        const result = await prisma.car.findMany()
        //HTTP 200: OK (IMPLICITO)
        res.send(result)
    }
    catch(error){
        console.log(error)

        //HTTP 500:INTERNET SERVER ERROR
        res.status(500).end()
    }
}
controller.retrieveOne = async function(req, res){
    try{
        const result =  await prisma.car.findUnique({
            where: {id: Number(req.params.id)}
        })
        //Encontrou: Retorna OK HTTP 200: )OK
        if(result)res.send(result)
        //Não Encontrou :Retorna HTTP 404: not found
            else res.status(404).end()
    }
    catch(error){
        console.log(error)
       
        //HTTP 500:INTERNET SERVER ERROR
        res.status(500).end()
    }
}

controller.update = async function(req, res){
    try{
        const result = await prisma.car.update({
            where: {id: Number(req.params.id)},
            data: req.body
        })
        //Encontrou e atualizou retorna HTTP 204: Not Content
        if(result) res.status(204).end()
        else res.status(404).end()
    }
    catch(error){
        console.log(error)
       
        //HTTP 500:INTERNET SERVER ERROR
        res.status(500).end()
    }
}

export default controller