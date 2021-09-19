export class Category {
  name: string;
  created_at: Date;

  constructor(name: string) {
    this.name = name;
    this.created_at = new Date();
  }
}