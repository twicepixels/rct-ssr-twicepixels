/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/users';

class Home extends React.Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    })).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount() {
    console.log(this.props)
    this.props.getUsers().then(result => {
        console.log(result);
       });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>React.js News</h1>
          
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
