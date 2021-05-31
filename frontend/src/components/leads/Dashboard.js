import React, { Fragment } from 'react';
import LeadForm from './LeadForm';
import LeadList from './LeadList';

export default function Dashboard() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-5">
          <LeadForm />
          <div className="my-5"></div>
          <LeadList />
        </div>
      </div>
    </div>
  );
}
