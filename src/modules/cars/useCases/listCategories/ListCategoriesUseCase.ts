import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

export class ListCategoriesUseCase {
  constructor (private categoryRepository: ICategoriesRepository) {}

  execute() {
    return this.categoryRepository.getList()
  }
}