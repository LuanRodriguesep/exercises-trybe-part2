const sinon = require('sinon');
const { expect } = require('chai')

const movieController = require('../../controllers/movieController');
const movieService = require('../../services/movieService');

describe('Busca todos os filmes através da API (controllers/movies/getAll)', () => {
  describe('Quando não existe nenhum filme cadastrado', () => {
    const fakeReq = {};
    const fakeRes = {};

    before(() => {
      sinon.stub(movieService, 'getAll').resolves([]);

      fakeReq.body = {};
      fakeRes.status = sinon.stub().returns(fakeRes);
      fakeRes.json = sinon.stub().returns();
    });

    after(() => {
      movieService.getAll.restore();
    });

    it('retorna o status 200', async () => {
      await movieController.getAll(fakeReq, fakeRes);

      expect(fakeRes.status.calledWith(200)).to.be.true;
    });

    it('retorna um JSON com um array', async () => {
      await movieController.getAll(fakeReq, fakeRes);

      expect(fakeRes.json.calledWith(sinon.match.array)).to.be.true;
    });
  });

  describe('Quando existe algum filme cadastrado', () => {
    const fakeReq = {};
    const fakeRes = {};

    before(() => {
      sinon.stub(movieService, 'getAll').resolves([
        {
          id: 1,
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        },
      ]);

      fakeReq.body = {};
      fakeRes.status = sinon.stub().returns(fakeRes);
      fakeRes.json = sinon.stub().returns();
    });

    after(() => {
      movieService.getAll.restore();
    });

    it('retorna o status 200', async () => {
      await movieController.getAll(fakeReq, fakeRes);

      expect(fakeRes.status.calledWith(200)).to.be.true;
    });

    it('retorna um array em formato JSON', async () => {
      await movieController.getAll(fakeReq, fakeRes);

      expect(fakeRes.json.calledWith(sinon.match.array)).to.be.true;
    });

    it('o array contém um filme', async () => {
      await movieController.getAll(fakeReq, fakeRes);

      const thirdCallArguments = fakeRes.json.args[2];
      const firstArgument = thirdCallArguments[0]; // firstArgument é o array que foi passado para res.json
      const movie = firstArgument[0];

      expect(movie).to.be.an('object');
    });
  });
});