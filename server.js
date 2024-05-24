import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './app/models/index.js'
import routes from './app/routes/tutorial.routes.js'

const app = express();
const corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

db.sequalize.sync({ force: true }).then(() => {
    console.log('Drop and re-sync db.');
});


app.get('/', (req, res) => {
    res.json({message: 'Welcome'})
})

routes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));