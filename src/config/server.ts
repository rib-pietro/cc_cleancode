import bodyParser from 'body-parser';
import { RouterController } from './router';
import dotenv from 'dotenv';

dotenv.config();

const express = require('express');

export default class WebServer {
    public static async initialize(): Promise<void> {

        const app = express();
        const port = process.env.PORT || 3000;

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use('/', RouterController);

        app.listen(port, () => {
            console.log(`API running on port ${port}`);
        });
    }
}