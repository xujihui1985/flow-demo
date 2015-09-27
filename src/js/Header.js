/* @flow */

import React, {Component} from 'react';
import Immutable from 'immutable';

import type {Action} from './Action';
import type Group from './modals/Group';

//parameters are D (= DefaultProps), P (= PropTypes), S (= State).
type PropTypes = {
  group: Group;
}

type State = {
  isloading: bool;
}

export default class Header extends Component<{}, PropTypes, State> {

  render(): ?ReactElement {
    return (<div>{this.props.group.members.length}</div>);
  }
}
