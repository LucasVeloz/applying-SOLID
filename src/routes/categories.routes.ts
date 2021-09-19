import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();

const list = new CategoriesRepository();


categoriesRoutes.get('/', (_, response) => {

  return response.status(200).send(list.getList())
})

categoriesRoutes.post('/', (request, response) => {
  const { name } = request.body;

  const createCategory = new CreateCategoryService(list);
  const result = createCategory.execute(name)

  return response.status(201).send(result)
})


export { categoriesRoutes }