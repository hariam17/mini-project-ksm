const dbPool = require('../config/database')

const getAllWriters = () => {
    const SQLQuery = `SELECT * FROM writers`;
    return dbPool.execute(SQLQuery);
}

const createNewWriter = (body) => {
    const SQLQuery = `INSERT INTO writers (nama, domisili, email, hobi) 
                      VALUES ('${body.nama}', '${body.domisili}', '${body.email}', '${body.hobi}')`;
    return dbPool.execute(SQLQuery);
}

const updateWriter = (body, id) => {
    const SQLQuery = `UPDATE writers 
                      SET nama='${body.nama}', domisili='${body.domisili}', email='${body.email}', hobi='${body.hobi}'
                      WHERE id=${id}`;
    return dbPool.execute(SQLQuery);

}

const deleteWriter = (id) => {
    const SQLQuery = `DELETE FROM writers WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

const getOneWriter = (id) => {
    const SQLQuery = `SELECT * FROM writers WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllWriters,
    createNewWriter,
    updateWriter,
    deleteWriter,
    getOneWriter
}

