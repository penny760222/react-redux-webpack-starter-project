import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actionCreators from '../../actions/Actions';

class MemberAccountListContainer extends Component {

  constructor(props, context) {
    super(props, context);
    this.deleteAccount = this.deleteAccount.bind(this);
  }

  deleteAccount(index, event) {
    this.props.actions.deleteAccount(index);
  }

  render() {
    const { accountList } = this.props;
    const context = this;
    return (
      <div>
        <h1>會員子帳號列表</h1>
        <div style={ { marginTop: '20px' } }>
          <Link className="btn" to="/member/account/create">新增子帳號</Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>子帳號</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            { accountList.map((account, index) => {
              let accountDeleteClick = context.deleteAccount.bind(this, index);
              return (<tr key={ index } >
                <td>{ parseInt(index + 1) }</td>
                <td>{ account }</td>
                <td><button onClick={ accountDeleteClick }>刪除</button></td>
              </tr>);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

MemberAccountListContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  accountList: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return { accountList: state.accountList };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberAccountListContainer);
