const { assert, expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs/promises');

const readFile = require('../readFile');

describe('le um arquivo', () => {
  
  // comportamento 01
  describe('arquivo é lido com sucesso', () => {
    // sera executado antesdos meus testes

    before(() => {
      sinon.stub(fs, 'readFile').resolves('xablau');
    });

    after(() => {
      fs.readFile.restore();
    })
    
    describe('o output', () => {
      it('é uma string', async () => {
        const result = await readFile('teste.txt');
        expect(result).to.be.a('string')
      })
      it('é igual ao conteudo do arquivo', async () => {
        const output = await readFile('teste.txt');
        expect(output).to.be.equal('xablau');
      });
    });
  });

  // comportamento 2
  describe('erro na leitura do arquivo', () => {
    
    before(() => {
      sinon.stub(fs, 'readFile').rejects('erro na leitura do arquivo');
    });

    after(() => {
      fs.readFile.restore();
    })


    describe('o output', () => {
      it('é null' , async () => {
        const output = await readFile('test.txt');
        expect(output).to.be.null;
      });
    });
  });

});