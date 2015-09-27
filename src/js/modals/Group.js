/* @flow */

import Immutable from 'immutable';
import type Member from './Member';

const GroupRecord = Immutable.Record({
  id: undefined,
  name: undefined,
  members: undefined
});

export default class Group extends GroupRecord {
  id: number;
  name: string;
  members: Array<Member>;

  constructor(name: string, members: Array<Member>) {
    super({
      name: name,
      members: members
    });
  }
}

