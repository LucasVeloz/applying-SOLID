import { Category } from "../model/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository"



export class CategoriesRepository implements ICategoriesRepository {
  private list: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.list = [];
  }

  public static getInstance() {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  getList() {
    return this.list;
  }

  addCategory({ name }: ICreateCategoryDTO) {
    const data = new Category(name);
    this.list.push(data)
    return data;
  }

  findByName(name: string) {
    return this.list.find(element => element.name === name)
  }
}