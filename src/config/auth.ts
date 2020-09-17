import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

export default async (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization;

  if(!authHeader)
    return response.status(401).send({ error: 'No token provided'});
  
  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, '5d0132b07a3986953ef94d9afd8d970b');
    return next();

  } catch (error) {
    return response.status(401).json({ error: 'Token invalid' });
  }
}