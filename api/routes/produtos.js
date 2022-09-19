const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Retorna todos os produtos"
    })
})

router.post('/', (req, res, next) => {

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }

    res.status(201).send({
        mensagem: "Produto adicionado",
        produtoCriado: produto
    })
})

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    res.status(200).send({
        mensagem: 'Usando GET de um produto exclusivo',
        id: id
    })
})

router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Produto alterado"
    })
})

router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Produto excluido"
    })
})

module.exports = router