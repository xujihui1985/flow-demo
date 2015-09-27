/* @flow */

import type {Action} from './Action';
import Group from './modals/Group';
import Member from './modals/Member';

import React, {Component} from 'react';
import Immutable from 'immutable';
import Header from './Header';



//parameters are D (= DefaultProps), P (= PropTypes), S (= State).
type State = {
  group: Group;
  isloading: bool;
};

export default class App extends Component<{},{}, State> {

  constructor() {
    super(...arguments);
    this.state = {
      group: new Group('xxxxx', [new Member('bbb', 'xxxx', 'ccccc')]),
      isloading: false
    };
  }

  render(): ?ReactElement {
    return (
      <div>
        <Header group={this.state.group.name}/>
        <div>hi body</div>
      </div>
    );
  }
}
