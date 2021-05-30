import React, { Fragment } from 'react';
import AddLeadForm from './AddLeadForm';
import LeadList from './LeadList';

export default function Dashboard() {
  return (
    <div className="container">
      <AddLeadForm />
      <LeadList />
    </div>
  );
}
