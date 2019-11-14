import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getOrders, deleteOrder } from '../actions/orderActions';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

class OrderList extends Component {
  static propTypes = {
    getOrders: PropTypes.func.isRequired,
    order: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getOrders();
  }

  onDeleteClick = id => {
    this.props.deleteOrder(id);
  };

  render() {
    const { orders } = this.props.order;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {orders.map(({ _id, name, date, number, address, model }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  {this.props.isAuthenticated ? (
                    <Button
                      className='remove-btn'
                      color='danger'
                      size='sm'
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times;
                    </Button>
                  ) : null}
                  
                  <p className="post" style={{ color: 'green' }}>{name} {number} {address} #{model}</p>
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
  order: state.order,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getOrders, deleteOrder }
)(OrderList);
