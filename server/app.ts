import express from 'express';
import {connectMongo} from "./utils/connectMongo";


connectMongo()
    .then(() => {
        const app = express();
        const port = process.env.PORT || 8000;

        app.get('/', (req, res) => {
            res.send('hello world 1')
        })

        app.listen(port, () => {
            console.log(`Server listener on port: ${port}`)
        })
    })

