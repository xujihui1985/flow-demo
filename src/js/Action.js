/* @flow */

export type Action = {
  type: 'file.added';
  id: string;
} |
  {
  type: 'file.added.success';
  id: string;
};

