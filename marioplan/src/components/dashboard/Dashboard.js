import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {

    console.log(this.props);
    const { project } = this.props;

    return (
      <div className="dashboard container">
        {project}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project
  }
}

export default connect(mapStateToProps)(Dashboard)
