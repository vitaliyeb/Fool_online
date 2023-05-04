import express from 'express';

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('hello world 1101222')
})

app.listen(port, () => {
    console.log(`Server listener on port: ${port}`)
})