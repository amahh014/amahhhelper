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
import { addPlace } from '../actions/placeActions';
import PropTypes from 'prop-types';

class PlaceModal extends Component {
  state = {
    modal: false,
    name: '',
    number: '',
    address: '',
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

    const newPlace = {
      name: this.state.name,
      number: this.state.number,
      address: this.state.address,
      comment: this.state.comment
    };

    // Add item via addItem action
    this.props.addPlace(newPlace);

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
            წასასვლელი ადგილის დამატება
          </Button>
        ) : (
          <h4> </h4>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>შეკვეთის გაფორმება</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>სახელი,გვარი</Label>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  placeholder=''
                  onChange={this.onChange}
                />

                <Label for='number'>მობილური ნომერი</Label>
                <Input
                  type='text'
                  name='number'
                  id='number'
                  placeholder=''
                  onChange={this.onChange}
                />

                <Label for='address'>მისამართი</Label>
                <Input
                  type='text'
                  name='address'
                  id='address'
                  placeholder='სრული მისამართი'
                  onChange={this.onChange}
                />

                <Label for='comment'>მოდელის კოდი</Label>
                <Input
                  type='text'
                  name='comment'
                  id='comment'
                  placeholder='ჩაწერე მოდელის კოდი'
                  onChange={this.onChange}
                />

                <Button color='dark' style={{ marginTop: '2rem' }} block>
                 შეკვეთის გაფორმება
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
  place: state.place,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addPlace }
)(PlaceModal);
