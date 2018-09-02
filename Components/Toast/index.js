import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions } from '../../redux/reducers/app';

const ToastContainer = styled.div`
  width: 400px;
  padding: 20px 10px;
  box-sizing: border-box;
  background-color: ${props => props.theme.green};
  position: fixed;
  z-index: 100;
  top: 40px;
  cursor: pointer;
  font-weight: 400;
  color: ${props => props.theme.white};
  right: ${props => (props.isShow ? '80px' : '-400px')};
  opacity: ${props => (props.isShow ? '1' : '0')};
  transition: top 0.4s, right 0.4s, opacity 0.4s;
  @media(max-width: 700px) {
    width: 100%;
    right: 0;
    left: 0;
    top: ${props => (props.isShow ? '0' : '-80px')};
  }
`;

class Toast extends React.Component {

  constructor(props) {
    super(props);
    this.closeToast = this.closeToast.bind(this);
  }

  componentDidUpdate() {
    const { toastMessage, isShowToast, pushToast } = this.props;
    if (isShowToast) {
      this.timeOut = setTimeout(() => pushToast(false, toastMessage), 4000);
    }
  }

  closeToast() {
    const { pushToast } = this.props;
    pushToast(false);
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
  }

  render() {
    const { isShowToast, toastMessage } = this.props;
    return (
      <ToastContainer isShow={isShowToast} onClick={this.closeToast}>{toastMessage}</ToastContainer>
    );
  }
}

export default connect(
  ({ app }) => ({
    isShowToast: app.isShowToast,
    toastMessage: app.toastMessage,
  }), {
    pushToast: actions.pushToast,
  },
)(Toast);
