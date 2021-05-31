import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';

export class LeadForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    note: '',
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const leadData = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      note: this.state.note,
    };

    this.props.addLead(leadData);
    e.target.reset();
  };

  render() {
    const { firstName, lastName, email, note } = this.state;

    return (
      <Fragment>
        <h1 className="fs-5 fw-bold text-dark">Add new lead</h1>
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <form className="row g-2" id="leadForm" onSubmit={this.onSubmit}>
              <div className="col-12">
                <label htmlFor="firstName" className="text-muted mb-0">
                  <small>First Name</small>
                </label>
                <input
                  type="text"
                  className="form-control py-1"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={this.onChange}
                />
              </div>

              <div className="col-12">
                <label htmlFor="lastName" className="text-muted mb-0">
                  <small>Last Name</small>
                </label>
                <input
                  type="text"
                  className="form-control py-1"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={this.onChange}
                />
              </div>

              <div className="col-12">
                <label htmlFor="email" className="text-muted mb-0">
                  <small>Email</small>
                </label>
                <input
                  type="email"
                  className="form-control py-1"
                  name="email"
                  id="email"
                  value={email}
                  onChange={this.onChange}
                />
              </div>

              <div className="col-12">
                <label htmlFor="email" className="text-muted mb-0">
                  <small>Note</small>
                </label>
                <textarea
                  className="form-control py-1"
                  name="note"
                  id="note"
                  value={note}
                  onChange={this.onChange}
                ></textarea>
              </div>

              <div className="col">
                <input className="btn btn-primary py-1" type="submit" value="Add contact" />
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(null, { addLead })(LeadForm);
