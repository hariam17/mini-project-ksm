const PublishersModel = require('../models/publishers')

// MENGAMBIL SEMUA DATA PUBLISHER
const getAllPublishers = async (req, res) => {
    try {
        const [data] = await PublishersModel.getAllPublishers();

        res.json({
            message: 'GET all publishers success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

// MENAMBAHKAN DATA PUBLISHER
const createNewPublisher = async (req, res) => {
    const { body } = req;

    try {
        await PublishersModel.createNewPublisher(body);
        res.json({
            message: 'POST new publisher success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

// UPDATE DATA PUBLISHER
const updatePublisher = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        await PublishersModel.updatePublisher(body, id);
        res.json({
            message: 'UPDATE publisher success',
            data: {
                id: id,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }

}

// HAPUS DATA PUBLISHER
const deletePublisher = async (req, res) => {
    const { id } = req.params;

    try {
        await PublishersModel.deletePublisher(id);
        res.json({
            message: `DELETE publisher with ID ${id}`,
            data: null
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

// AMBIL SATU DATA PUBLISHER
const getOnePublisher = async (req, res) => {
    const { id } = req.params;
    try {
        const [data] = await PublishersModel.getOnePublisher(id);
        res.json({
            message: `GET publisher with ID ${id}`,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllPublishers,
    createNewPublisher,
    updatePublisher,
    deletePublisher,
    getOnePublisher
}

//Untuk menghandle error menggunakan async await