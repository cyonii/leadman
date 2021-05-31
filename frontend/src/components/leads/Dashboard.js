import React, { Fragment } from 'react';
import LeadForm from './LeadForm';
import LeadList from './LeadList';

export default function Dashboard() {
  return (
    <div className="container">
      <div className="row gy-4 gy-lg-0 gx-lg-5 justify-content-center">
        <div className="col-md-4 col-lg-3">
          <LeadForm />
        </div>
        <div className="col-md-8 col-lg-5">
          <LeadList />
        </div>
      </div>
    </div>
  );
}
