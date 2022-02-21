//const model = require('../../models/song');
const service = require('../../service/song')

module.exports = async (req, res) => {
  try {
    const { artist_id, name, album } = req.body;

    if (!name || !album) {
      return res
        .status(422)
        .json({ message: "Campo `name`, `genre` ou artist_id, não informados" });
    }

    let newSong = await service.create( artist_id, name, album);
    if (!newSong) {
     return res.status(400).send({ message: 'artist id invalido' })
    }

    return res.status(201).json(newSong);
  } catch (err) {
    res.status(500).json({ message: "Erro ao criar song" });
  }
};