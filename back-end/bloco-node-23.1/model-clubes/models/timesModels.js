const connection = require('./connection');

const getAll  = async() => {
  const [rows] = await connection.execute('SELECT * FROM clubes');

  return rows;
}

const create = async (_name, estadio) => {
  const [rows] = await connection.execute(
    'INSERT INTO clubes (_name, estadio) VALUES (?, ?)',
    [_name, estadio]
  );

  const result = {
    id: rows.insertId,
    _name,
    estadio,
  };
};

const timesId = async (id) => {
  const [row] = await connection.execute(
    'SELECT * FROM clubes WHERE id = ?',
    [id]
  );
  const time = row[0];
  return time;
}

const editaTime = async (id, _name, estadio) => {
  await connection.execute(`
    UPDATE clubes
      SET _name = ?, estadio = ?
    WHERE id = ?
  `, [_name, estadio, id]
  );

  return { id, _name, estadio };
}

const removeTime = async (id) => {
  await connection.execute(`
    DELETE FROM clubes WHERE id = ?
  `, [id]
  );
}

module.exports = {
  getAll,
  create,
  timesId,
  editaTime,
  removeTime
};