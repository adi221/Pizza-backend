import express from 'express';
import cors from 'cors';
import { serverConfig, generalConfig } from './config/index.js'
import apiRouter, { indexRoute } from './routes/index.js';
import logger from './utils/logger.js';
import { checkPgConnection } from './db/db.js';
import { errorHandler, notFoundMiddleware } from './middlewares/errorHandler.js';

const { servicePort } = serverConfig
const { nodeEnv } = generalConfig

const app = express()

checkPgConnection()

if (nodeEnv === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json({ limit: '200mb' }));
app.use(cors({
  origin: '*'
}));

app.get('/', indexRoute);
app.use('/api', apiRouter);
app.use(notFoundMiddleware)
app.use(errorHandler)

app.listen(servicePort, () => logger.info(`Server is connected on ${servicePort}`))