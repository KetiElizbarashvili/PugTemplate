import express from 'express'

import posts from './data/posts.json'

const app = express()
const port = 3000

app.set('views', './src/templates')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {
        message: 'Bem vindo ao site que usa o Pug com Express!'
    })
})

app.get('/email', (req, res) => res.render('email'))
app.get('/contato', (req, res) => res.render('contato'))

app.get('/posts', (req, res) => res.render('posts', {
    posts
}))

app.listen(port, () => console.log(`App rodando na porta ${port}...`))
