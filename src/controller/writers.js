const WritersModel = require('../models/writers')

// MENGAMBIL SEMUA DATA WRITER
const getAllWriters = async (req, res) => {
    try {
        const [data] = await WritersModel.getAllWriters();

        res.json({
            message: 'GET all writers success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

// MENAMBAHKAN DATA WRITER
const createNewWriter = async (req, res) => {
    const { body } = req;

    try {
        await WritersModel.createNewWriter(body);
        res.json({
            message: 'POST new writer success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

// UPDATE DATA WRITER
const updateWriter = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        await WritersModel.updateWriter(body, id);
        res.json({
            message: 'UPDATE writer success',
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

// HAPUS DATA WRITER
const deleteWriter = async (req, res) => {
    const { id } = req.params;

    try {
        await WritersModel.deleteWriter(id);
        res.json({
            message: `DELETE writer with ID ${id}`,
            data: null
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

// AMBIL SATU DATA WRITER
const getOneWriter = async (req, res) => {
    const { id } = req.params;
    try {
        const [data] = await WritersModel.getOneWriter(id);
        res.json({
            message: `GET writer with ID ${id}`,
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
    getAllWriters,
    createNewWriter,
    updateWriter,
    deleteWriter,
    getOneWriter
}

//Untuk menghandle error menggunakan async await