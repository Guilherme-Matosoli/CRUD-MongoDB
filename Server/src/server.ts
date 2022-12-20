import express from 'express';
import 'dotenv/config';
import { routes } from './routes';
import { ConnectionDB } from './database/connectDatabase';
const PORT = process.env.SERVER_PORT as Number | undefined;


ConnectionDB.then(() => {
    const app = express();
    app.use(express.json());
    app.use(routes);



    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    });
})


