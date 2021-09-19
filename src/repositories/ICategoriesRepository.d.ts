import { Category } from '../model/Category'

export interface ICreateCategoryDTO {
  name: string;
}

export interface ICategoriesRepository {
  findByName: (name: string) => Category;
  addCategory: (value: ICreateCategoryDTO) => Category;
  getList: () => Category[];
}