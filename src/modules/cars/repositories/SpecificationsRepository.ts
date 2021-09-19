import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "./ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name }: ICreateSpecificationDTO) {
    const specification = new Specification(name); 
    this.specifications.push(specification)

    return specification;
  }

  findByName(name: string) {
    return this.specifications.find(element => element.name === name);
  }

}