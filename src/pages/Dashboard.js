import React from 'react';
import {connect} from 'react-redux';


const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
};

const mapStateToProps = state => ({
  email: state.userReducer.email,
})

export default connect(mapStateToProps) (Dashboard);
