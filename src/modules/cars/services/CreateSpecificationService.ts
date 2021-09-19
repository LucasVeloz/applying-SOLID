import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

export class CreateSpecificationService {
  constructor (private specifications:  ISpecificationsRepository) {}

  execute(name: string) {
    if (this.specifications.findByName(name)) {
      throw new Error('Specification already exist!')
    }
    return this.specifications.create({ name })
  }
}