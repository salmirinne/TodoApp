export class TodoTask {
  constructor(
    public readonly id: number,
    public readonly description: string,
    public readonly isDone: boolean
  ) {}
}