const express = require('express');
const app = express();
const PORT = 3000; // Defina a porta do servidor


app.use(express.json()); // Responsável por fazer o parse do corpo das requisições HTTP com formato JSON

let tarefas = [];


// Rota para adicionar uma nova tarefa
app.post('/tarefas', (req, res) => {
   // Lógica para adicionar uma nova tarefa ao banco de dados
   const tarefa = req.body;
   tarefas.push(tarefa);
   res.json(tarefa);
});



app.listen(PORT, () => {
   console.log(`Servidor rodando na porta em http://localhost:${PORT}`);
});
