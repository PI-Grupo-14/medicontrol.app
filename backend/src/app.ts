import express, {Request, Response} from 'express';

function createApp() {
    const app = express();

    app.use(express.json());

    app.get('/', (req: Request, res: Response) => {
        res.status(200).json({nome: 'Fabio Silva'});
    });

    return app;
}

export default createApp;
