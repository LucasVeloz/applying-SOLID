import { Specification } from "../model/Specification";

export interface ICreateSpecificationDTO {
  name: string;
}

export interface ISpecificationsRepository {
  create(value: ICreateSpecificationDTO): Specification;
  findByName(name: string): Specification;
}