// @flow

import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

type State = {

}

class FirstScreen extends Component<State> {
  handleLogin: Function

  render() {
    const { t } = this.context // eslint-disable-line id-length

    return (
      <div className="login-screen">
        {t('Translate this text')}
      </div>
    )
  }

}

FirstScreen.contextTypes = {
  t: PropTypes.func, // eslint-disable-line id-length
}

export default connect()(FirstScreen)
