import express from 'express';

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        {
            id: 1,
            name: 'Primeiro anúncio'
        },
        {
            id: 2,
            name: 'Segundo anúncio'
        },
        {
            id: 3,
            name: 'Terceiro anúncio'
        },
        {
            id: 4,
            name: 'Quarto anúncio'
        }
    ])
})

app.listen(3333)