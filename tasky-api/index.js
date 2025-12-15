import dotenv from 'dotenv';
import express from 'express';
import tasksRouter from './api/tasks';
import './db';
import cors from 'cors';
import usersRouter from './api/users';

dotenv.config();

const errHandler = (err, req, res,) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(
    `Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `
  );
};

const app = express();

const port = process.env.PORT;

// Global middleware 
app.use(cors());
app.use(express.json());

// Routers 
app.use('/api/users', usersRouter);
app.use('/api/tasks', tasksRouter);

// Error handler 
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
