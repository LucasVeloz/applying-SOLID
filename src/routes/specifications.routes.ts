import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

export const specificationsRoutes = Router();

const specifications = new SpecificationsRepository()


specificationsRoutes.post('/', (request, response) => {
  const createSpecificationService = new CreateSpecificationService(specifications)
  const { name } = request.body;

  const result = createSpecificationService.execute(name);

  return response.status(201).send(result);
})