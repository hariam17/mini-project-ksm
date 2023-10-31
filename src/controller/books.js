const BooksModel = require('../models/books')

// MENGAMBIL SEMUA DATA PUBLISHER
const getAllBooks = async (req, res) => {
    try {
        const [data] = await BooksModel.getAllBooks();

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

// MENAMBAHKAN DATA WRITER
const createNewBook = async (req, res) => {
    const { body } = req;

    try {
        await BooksModel.createNewBook(body);
        res.json({
            message: 'POST new book success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateBook = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        await BooksModel.updateBook(body, id);
        res.json({
            message: 'UPDATE book success',
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

// HAPUS DATA BUKU
const deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        await BooksModel.deleteBook(id);
        res.json({
            message: `DELETE book with ID ${id}`,
            data: null
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const getOneBook = async (req, res) => {
    const { id } = req.params;
    try {
        const [data] = await BooksModel.getOneBook(id);
        res.json({
            message: `GET book with ID ${id}`,
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
    getAllBooks,
    createNewBook,
    updateBook,
    deleteBook,
    getOneBook
}