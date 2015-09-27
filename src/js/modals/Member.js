/* @flow */

import Immutable from 'immutable';

const MemberRecord = Immutable.Record({
  id: undefined,
  name: undefined,
  nick: undefined,
  realname: undefined
});

export default class Member extends MemberRecord {
  id: number;
  name: string;
  nick: string;
  realname: string;

  constructor(name: string, nick: string, realname: string) {
    super({
      name: name,
      nick: nick,
      realname: realname
    });
  }
}

