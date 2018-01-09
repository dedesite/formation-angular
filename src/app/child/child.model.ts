export enum ChildLevel {
  petit,
  moyen,
  grand
}

export class Child {
  id: number;
  name: string;
  level: ChildLevel;
  attemptCount: number = 0;
  successCount: number = 0;
}
