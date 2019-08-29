import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { ApplicationState } from '../../store';
import { Dashboard } from '../../store/ducks/dashboard/types';
import * as DashboardActions from '../../store/ducks/dashboard/actions';

interface StateProps {
  dashboard: Dashboard;
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class DashboardPage extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    return (
      <>Page Dashboard</>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  dashboard: state.dashboard.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(DashboardActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardPage);
