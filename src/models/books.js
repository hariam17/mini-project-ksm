const dbPool = require('../config/database')

const getAllBooks = () => {
    const SQLQuery = `SELECT books.id, books.judul, books.genre, books.jml_halaman, 
                      writers.nama AS nama_penulis, 
                      publishers.nama AS nama_penerbit
                      FROM books INNER JOIN writers ON books.id_writers = writers.id 
                      INNER JOIN publishers ON books.id_publishers = publishers.id`;
    return dbPool.execute(SQLQuery);
}

const createNewBook = (body) => {
    const SQLQuery = `INSERT INTO books (id_writers, id_publishers, judul, genre, jml_halaman) 
                      VALUES ('${body.id_writers}','${body.id_publishers}', '${body.judul}', '${body.genre}', '${body.jml_halaman}' )`;
    return dbPool.execute(SQLQuery);
}

const updateBook = (body, id) => {
    const SQLQuery = `UPDATE books 
                      SET id_writers='${body.id_writers}',id_publishers='${body.id_publishers}', 
                      judul='${body.judul}', genre='${body.genre}', jml_halaman='${body.jml_halaman}'
                      WHERE id=${id}`;
    return dbPool.execute(SQLQuery);

}

const deleteBook = (id) => {
    const SQLQuery = `DELETE FROM books WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

const getOneBook = (id) => {
    const SQLQuery = `SELECT books.id, books.judul, books.genre, books.jml_halaman, 
                      writers.nama AS nama_penulis, 
                      publishers.nama AS nama_penerbit
                      FROM books INNER JOIN writers ON books.id_writers = writers.id 
                      INNER JOIN publishers ON books.id_publishers = publishers.id
                      WHERE books.id=${id}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllBooks,
    createNewBook,
    updateBook,
    deleteBook,
    getOneBook
}