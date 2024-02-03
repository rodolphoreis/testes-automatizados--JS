const { deepEqual, ok } = require("assert");

const database = require("./database");

const DEFAULD_ITEM_CADASTRAR = {
  nome: "Flash",
  poder: "Speed",
  id: 1,
};

describe("Suite de manipulação de Herois", () => {
  it("Deve pesquisar um heroi usando aquivos", async () => {
    const expected = DEFAULD_ITEM_CADASTRAR;
    const [resultado] = await database.listar(expected.id);

    deepEqual(resultado, expected);
  });

  it("Deve cadastrar um heroi, usando arquivos", async () => {
    const expected = DEFAULD_ITEM_CADASTRAR;
    const resultado = await database.cadastrar(DEFAULD_ITEM_CADASTRAR);
    const [actual] = await database.listar(DEFAULD_ITEM_CADASTRAR.id);

    deepEqual(actual, expected);
  });
});
