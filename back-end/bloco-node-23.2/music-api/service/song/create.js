const Song = require('../../models/song');
const artist = require('../../models/artist');

module.exports = async (song) => {
  const foundArtist = artist.findById(song.artist_id);
  if (!foundArtist) return null;

  return await Song.create(song);
};