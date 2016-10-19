export class Task {
  public done: boolean = false;
  public id: number = 0;
  constructor(public description: string, public priority: string) {   }
}
