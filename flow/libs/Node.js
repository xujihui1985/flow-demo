declare module 'superagent' {
  declare function get(url: string): void;
}

declare class Underscore{
  findWhere<T>(List: Array<T>, properties:{}): T;
}

declare var _ : Underscore;

