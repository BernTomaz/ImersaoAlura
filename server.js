import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Servidor rodando");
});

app.get("/", (req, res) => {
  res.status(200); //Por padrão, o Express usa o status 200 para respostas bem-sucedidas quando você chama res.send(). Portanto, nesse caso, adicionar res.status(200) é redundante.
  res.send("Funcionou!");
});
