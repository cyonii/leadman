import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';

export class LeadList extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <Fragment>
        <h1 className="fs-5 fw-bold text-dark">Leads</h1>
        <table className="table table-striped">
          <thead className="text-muted">
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map((lead, index) => {
              const fullName = `${lead.first_name} ${lead.last_name}`;
              return (
                <tr key={lead.uuid}>
                  <td>{index + 1}</td>
                  <td>{fullName}</td>
                  <td>{lead.email}</td>
                  <td className="text-muted">
                    <small className="fw-light">{lead.note}</small>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm py-0 fw-bold"
                      onClick={this.props.deleteLead.bind(this, lead.uuid)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ leads: state.leads.leads });

export default connect(mapStateToProps, { getLeads, deleteLead })(LeadList);
