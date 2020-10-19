import React, { Component } from "react";
import './Modal.css';
class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hideModal: this.props.hideModal,
      buttonClass : 'button',
      mClass : 'modal modal-hide'
    };

    this.handleModal = this.handleModal.bind(this);
    this.handleExitModal = this.handleExitModal.bind(this);
  }

  handleModal() {
    this.setState({ 
      buttonClass : 'button button-clicked',
      mClass : 'modal',
    });
    console.log(this.state.hideModal);
  }

  handleExitModal() {
    this.setState({ 
      buttonClass : 'button',
      mClass : 'modal modal-hide',
    });
    console.log(this.state.hideModal);
  }



  render() {
    return (
      <div className="center">
        <div className={this.state.buttonClass}>
          <button className='btn btn-open' onClick={this.handleModal}>Open modal</button>
        </div>

        <div className={this.state.mClass}>
          <div className="title">
            <p>This is a modal 1</p>
            <i class="fa fa-times" aria-hidden="true" onClick={this.handleExitModal}></i>
          </div>

          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="footer">
            <button className='btn btn-accept' onClick={this.handleExitModal}>Accept</button>
            <button className='btn btn-decline' onClick={this.handleExitModal}>Decline</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PopUp;
