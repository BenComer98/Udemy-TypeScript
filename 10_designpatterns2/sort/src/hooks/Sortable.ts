export interface Sortable {
  at: (i: number) => number | string;
  set: (i: number, val: number | string) => void;
  size: () => number;
};