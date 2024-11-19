import express from "express";

const post = [
  {
    id: 1,
    descricao: "Uma foto teste 1",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Um gato fofo dormindo",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    descricao: "Paisagem com um gato",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 4,
    descricao: "Gato brincando com um novelo de lã",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 5,
    descricao: "Gato olhando para a câmera",
    imagem: "https://placecats.com/millie/300/150",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor rodando");
});

app.get("/post", (req, res) => {
  res.status(200); // Status ok passado automaticamente, não é necessário escrever.
  res.json(post);
});

function getPostById(id) {
  return post.findIndex((post) => post.id === Number(id));
}

app.get("/post/:id", (req, res) => {
  const id = getPostById(req.params.id);
  res.json(post[id]);
});
