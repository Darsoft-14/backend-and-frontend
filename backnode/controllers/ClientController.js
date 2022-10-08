//importar el modelo
import ClientModel from "../models/ClientModel.js";

//** metodos para el crud **/

//Mostrar todos los registros
export const getAllClients = async (req, res) => {
    try {
        const clients = await ClientModel.findAll()
        res.json(clients)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Mostrar un registro
export const getClient = async (req, res) => {
    try {
        const client = await ClientModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(client[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Crear un registro
export const createClient = async (req, res) =>{
    try {
        await ClientModel.create(req.body)
        res.json({
            'message' : 'El registro fue creado correctamente'
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Actualizar un registro 
export const updateClient = async (req, res) => {
    try {
        await ClientModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            'message' : 'El registro fue actualizado correctamente'
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Eliminar un registro
export const deleteClient = async (req, res) => {
    try {
       await ClientModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            'message' : 'El registro fue eliminado correctamente'
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}