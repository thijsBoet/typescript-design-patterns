// Interfaces imported from express library
import express, { Request, Response, NextFunction } from 'express';

const app = express();

// POLYMORPHISM - different types of objects can be used interchangeably if they share a common interface. This promotes flexibility and code reuse.
// Many forms from the same interface
const middleware1 = (req: Request, res: Response, next: NextFunction) => {
  console.log('middleware1');
  next();
};

const middleware2 = (req: Request, res: Response, next: NextFunction) => {
  console.log('middleware2');
  next();
};

app.use(middleware1);
app.use(middleware2);