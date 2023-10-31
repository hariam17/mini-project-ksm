const dbPool = require('../config/database')

const getAllPublishers = () => {
    const SQLQuery = `SELECT * FROM publishers`;
    return dbPool.execute(SQLQuery);
}

const createNewPublisher = (body) => {
    const SQLQuery = `INSERT INTO publishers (nama) 
                      VALUES ('${body.nama}')`;
    return dbPool.execute(SQLQuery);
}

const updatePublisher = (body, id) => {
    const SQLQuery = `UPDATE publishers 
                      SET nama='${body.nama}'
                      WHERE id=${id}`;
    return dbPool.execute(SQLQuery);

}

const deletePublisher = (id) => {
    const SQLQuery = `DELETE FROM publishers WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

const getOnePublisher = (id) => {
    const SQLQuery = `SELECT * FROM publishers WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllPublishers,
    createNewPublisher,
    updatePublisher,
    deletePublisher,
    getOnePublisher
}

