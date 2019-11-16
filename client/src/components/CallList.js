import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getCalls, deleteCall } from '../actions/callActions';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

class CalList extends Component {
  static propTypes = {
    getCalls: PropTypes.func.isRequired,
    call: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getCalls();
  }

  onDeleteClick = id => {
    this.props.deleteCall(id);
  };

  render() {
    const { calls } = this.props.call;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='shopping-list' style={{ marginBottom: '2rem' }}>
            {calls.map(({ _id, name, comment, date }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  {this.props.isAuthenticated ? (
                    <Button
                      className='remove-btn'
                      color='danger'
                      size='sm'
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times; შესრულება
                    </Button>
                  ) : null}
                  <p style={{ color: 'blue' }}>{name} {comment}</p>
                  <p className='post-date'>
                      შექმნილია <Moment format='YYYY/MM/DD'>{date}</Moment>
                  </p>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  call: state.call,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getCalls, deleteCall }
)(CalList);