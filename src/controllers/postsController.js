import fs from "fs";
import { getTodosPosts } from "../models/postsModels.js";
import { criarNovoPost } from "../models/postsModels.js";

export async function listarPosts(req, res) {
  const posts = await getTodosPosts();
  res.status(200).json(posts);
}

export async function criarPost(req, res) {
  const novoPost = req.body;
  try {
    const postCriado = await criarNovoPost(novoPost);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.error("ops, ocorreu um erro!", erro.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}

export async function uploadImagem(req, res) {
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: "",
  };

  try {
    const postCriado = await criarNovoPost(novoPost);
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    fs.renameSync(req.file.path, imagemAtualizada);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.error("ops, ocorreu um erro!", erro.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}
