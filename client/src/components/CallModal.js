import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addCall } from '../actions/callActions';
import PropTypes from 'prop-types';

class CallModal extends Component {
  state = {
    modal: false,
    name: '',
    comment: ''
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newCall = {
      name: this.state.name,
      comment: this.state.comment
    };

    // Add item via addItem action
    this.props.addCall(newCall);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color='dark'
            style={{ marginBottom: '2rem' }}
            onClick={this.toggle}
          >
            მოთხოვნილი ზარის დამატება
          </Button>
        ) : (
          <h4> </h4>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>სიაში დამატება</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>ელოდება ზარს</Label>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='ჩაწერე ნომერი'
                  onChange={this.onChange}
                />

                <Label for='comment'>კომენტარი</Label>
                <Input
                  type='text'
                  name='comment'
                  id='comment'
                  placeholder='ჩაწერე კომენტარი'
                  onChange={this.onChange}
                />

                <Button color='dark' style={{ marginTop: '2rem' }} block>
                 ზარის დამატება
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  call: state.call,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addCall }
)(CallModal);
