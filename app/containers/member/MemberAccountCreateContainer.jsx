import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { browserHistory } from 'react-router'
import * as actionCreators from '../../actions/Actions';

const fields = ['accountName'];

class MemberAccountCreateContainer extends Component {

  constructor(props, context) {
    super(props, context);
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    if (values !== undefined) {
      this.props.actions.addAccount(values.accountName);
      browserHistory.push('/member/account/list');
    }
  }

  render() {
    const {
      fields: { accountName },
      handleSubmit,
      resetForm,
      submitting
      } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.submit) }>
        <div>
          <label htmlFor="accountName">要新增的子帳號</label>
          <div>
            <input type="text" placeholder="帳號名稱" { ...accountName } />
          </div>
        </div>
        <div>
          <button type="submit" disabled={ submitting }>新增</button>
          <button type="button" disabled={ submitting } onClick={ resetForm }>清除</button>
        </div>
      </form>
    );
  }
}

MemberAccountCreateContainer.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

const container = connect(null, mapDispatchToProps)(MemberAccountCreateContainer);

export default reduxForm({
  form: 'memberCraeteForm',
  fields
})(container);
