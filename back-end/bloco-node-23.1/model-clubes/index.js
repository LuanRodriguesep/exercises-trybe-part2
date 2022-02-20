const express = require("express");
const bodyParser = require("body-parser");

const timesModels = require("./models/timesModels");
const rescue = require("express-rescue");

const app = express();

app.use(bodyParser.json());

// Requisição para a tabela clubes
app.get("/times", async (req, res) => {
  try {
    const times = await timesModels.getAll();
    res.status(200).json(times);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Criando um novo clube

app.post("/times", async (req, res) => {
  try {
    const { _name, estadio } = req.body;

    if (!_name || !estadio) {
      return res
        .status(422)
        .json({ message: "Campo `_name` ou `estadio`, não informados" });
    }

    const NovoTime = await timesModels.create(_name, estadio);
    res.status(201).json(NovoTime);
  } catch (err) {
    res.status(500).json({ message: "Erro ao criar clube" });
  }
});

app.get("/times/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const time = await timesModels.timesId(id);

    if (!time) {
      return res
        .status(404)
        .json({ message: `Times com o id "${id}" não encontrado.` });
    }

    res.status(200).json(time);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro ao buscar time" });
  }
});

app.put(
  "/times/:id",
  rescue(async (req, res) => {
    const { id } = req.params;
    const { _name, estadio } = req.body;

    const time = await timesModels.timesId(id);

    if (!time) {
      return res
        .status(404)
        .json({ message: `Personagem com id "${id}" não encontrado.` });
    }
    const result = await timesModels.editaTime(id, _name, estadio);

    return res.status(200).json(result);
  })
);

app.delete(
  "/times/:id",
  rescue(async (req, res) => {
    const { id } = req.params;

    await timesModels.removeTime(id);

    res.status(204).end();
  })
);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Erro ao processar requisição" });
});

app.listen(3001, () => {
  console.log("Escutando na porta 3001");
});
