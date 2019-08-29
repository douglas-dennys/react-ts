import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { ApplicationState } from '../../../store';
import { Recover } from '../../../store/ducks/recover/types';
import * as RecoverActions from '../../../store/ducks/recover/actions';

interface StateProps {
  recover: Recover;
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class RecoverPage extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    return (
      <>Page Recover</>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  recover: state.recover.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RecoverActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecoverPage);
