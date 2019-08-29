import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { ApplicationState } from '../../../store';
import { Reset } from '../../../store/ducks/reset/types';
import * as ResetActions from '../../../store/ducks/reset/actions';

interface StateProps {
  reset: Reset;
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class ResetPage extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    return (
      <>Page Reset</>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  reset: state.reset.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ResetActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPage);
