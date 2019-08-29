import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { ApplicationState } from '../../../store';
import { Login } from '../../../store/ducks/login/types';
import * as LoginActions from '../../../store/ducks/login/actions';

interface StateProps {
  login: Login;
}

interface DispatchProps {
  loadRequest(): void;
}

// só é utilizado quando vem dado do component pai
// interface OwnProps {}
// type Props = StateProps & DispatchProps & OwnProps;

type Props = StateProps & DispatchProps;

class LoginPage extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    return (
      <>Page Login</>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  login: state.login.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
