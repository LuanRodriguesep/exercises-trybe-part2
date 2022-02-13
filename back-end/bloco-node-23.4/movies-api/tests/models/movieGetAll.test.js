const sinon = require('sinon');
const { expect } = require('chai');
const movieModel = require('../../models/movieModel');
const connection = require('../../models/connection');

describe('Busca todos os filmes no banco de dados',() => {
  describe('Quando não tem nenhum filme cadastrado',() => {
    
    before(async () => {
      sinon.stub(connection, 'execute').resolves([[]]);
    });
  
    after(() => {
      connection.execute.restore();
    })

    it('retorna um array', async () => {
      const movies = await movieModel.getAll();

      expect(movies).to.be.an('array');
    });

    it('o array retornado é vazio', async () => {
      const movies = await movieModel.getAll();

      expect(movies).to.be.empty
    });
  });

  describe('Quando existir pelo menos um filme cadastrado', () => {

    before(async () => {
      const movieItem = {
      id: 1,
      title: 'Titanic',
      directed_by: 'James Cameron',
      release_year : 1997,
    };
    sinon.stub(connection, 'execute').resolves([[movieItem]]);
  });

  after(() => {
    connection.execute.restore();
  });

    it('retorna um array', async () => {
      const result = await movieModel.getAll();

      expect(result).to.be.an('array')
    });
    it('O array não esta vazio', async () => {
      const result = await movieModel.getAll();

      expect(result).to.not.be.empty;
    });
    it('O array possui itens do tipo obejeto', async () => {
      const result = await movieModel.getAll();
      result.map((item) => {
        expect(item).to.be.an('object');
      });
    });
    it('Os itens possuem as propriedades "id", "title", "releaseYear" e "directedBy"', async () => {
      const result = await movieModel.getAll();
      result.map((item) => {
      expect(item).to.include.all.keys(
        'id',
        'title',
        'releaseYear',
        'directedBy'
        );
      });
    });
  })
});