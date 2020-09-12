import { Router, request } from 'express';
import { createCategoryController } from '../useCase/Category';
import { createProductController } from '../useCase/Product';
import { createProfileController } from '../useCase/Profile';
import { mailController } from '../useCase/Email';

const route = Router();

// Categorias
route.post('/categories', (request, response) => createCategoryController.create(request, response));
route.get('/categories', (request, response) => createCategoryController.index(request, response));
// Produtos
route.post('/products', (request, response) => createProductController.create(request, response));
route.get('/products', (request, response) => createProductController.index(request, response));
route.get('/products/:id', (request, response) => createProductController.show(request, response));
route.put('/products/:id', (request, response) => createProductController.update(request, response));
route.delete('/products/:id', (request, response) => createProductController.delete(request, response));
// Listar por categoria
route.get('/profile/:id', (request, response) => createProfileController.handler(request, response));
// Procurar por nome
route.get('/search', (request, response) => createProductController.find(request, response));
// Send Email
route.post('/email', (request, response) => mailController.handle(request, response));

export { route };