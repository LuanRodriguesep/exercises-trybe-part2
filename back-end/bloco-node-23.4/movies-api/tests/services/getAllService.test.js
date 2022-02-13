const sinon = require('sinon');
const {expect} = require('chai');

const movieService = require('../../services/movieService');
const movieModel = require('../../models/movieModel');

describe('Busca todos os filmes do banco (services/movies/getAll)', () => {
  describe('Quando não existir nenhum filme cadastrado', () => {
    before(() => {
      sinon.stub(movieModel, 'getAll').resolves([])
    });
    
    after(() => {
      movieModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const result = await movieService.getAll();
      
      expect(result).to.be.an('array');
    });
    it('o arrya está vazio', async () => {
      const result = await movieService.getAll()
      
      expect(result).to.be.empty;
    })
  });

  // segundo caso

  describe('Quando existe algum filme cadastrado', () => {
    before(() => {
      sinon.stub(movieModel, 'getAll').resolves([
        {
          id: 1,
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        },
      ]);
    });

    after(() => {
      movieModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const result = await movieService.getAll();
      
      expect(result).to.be.an('array');
    });
    it('o array não esta vazio', async() => {
      const response = await movieService.getAll();

      expect(response).to.be.not.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [item] = await movieService.getAll();

      expect(item).to.be.an('object');
    });

    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [item] = await movieService.getAll();

      expect(item).to.include.all.keys(
        'id',
        'title',
        'releaseYear',
        'directedBy'
      );
    });
  });
});