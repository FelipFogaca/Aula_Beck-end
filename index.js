const express = require('express');
const User = require('./user');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Olá Mundo!");
})

app.get('/user', (req, res) => {
    const users = User.getAll();

    res.status(200).json(users);
})

app.post('/user', (req, res) => {
    const { email, passowrd, name } = req.body

    const user = User.create(email, passowrd, name);

    res.status(201).json(user);
})


app.put('/user/:id', (req, res) => {
    const { email, passowrd, name } = req.body

    const user = User.update(Number(req.params.id), email, passowrd, name);

    res.status(200).json(user);

})

app.delete('/user/:id', (req, res) => {
    User.delete(Number(req.params.id));

    res.status(204).json();
})

app.listen(8080, () => {
    console.info(`Servidor rodando na porta ${8080}`)
});