import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import middlewares from './src/middlewares/Middlewares.js';
import configuration from './configuration/Configuration.js';
import UserRoutes from './src/routes/User.routes.js';

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('common'));
// eslint-disable-next-line no-undef

app.get('/moose', (req, res) => {
  res.send('Man skall inte välta den älg som sover!');
});

UserRoutes.routes(app);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

configuration.connectToDatabase();
configuration.connectToPort(app);

export default app;
