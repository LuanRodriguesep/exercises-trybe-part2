const { assert, expect } = require('chai');
const sinon = require('sinon');
const readLine = require('readline-sync');

const area = require('../area');

describe('Calcula a area de um quadrado',() => {
  describe('lado do quadrado é uma valor (>= zero)',() => {

    before(() => {
      sinon.stub(readLine, 'questionInt').returns(10);
    });

    after(() => {
      readLine.questionInt.restore();
    })

    describe('O output',() => {
      it('é um numero', () => {
        const output = area();
        expect(output).to.be.a('number');
      });
      it('é o quadrado do input', () => {
        const output = area();
        expect(output).to.be.equal(100);
      });
    });
  });

  describe('o lado do quadrado é uma numero invalido (< 0)',() => {

    before(() => {
      sinon.stub(readLine, 'questionInt').returns(-4);
    });

    after(() => {
      readLine.questionInt.restore();
    })

    it('uma exceção deve ser levantada', () => {
      expect(() => area()).to.throw('Valor invalido');
    });
  });
});