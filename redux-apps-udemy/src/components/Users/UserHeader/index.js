import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as UsersActions from '../../../store/actions/users'

class UserHeader extends React.Component {
  render() {
    const { user } = this.props
    if (!user) return null
    return <div className={'header'}>{user.name} </div>
  }
}
const mapStateToProps = ({ users }, { userId }) => ({
  user: users.find(u => u.id === userId)
})
const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHeader)
