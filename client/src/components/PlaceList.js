import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getPlaces, deletePlace } from '../actions/placeActions';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

class PlaceList extends Component {
  static propTypes = {
    getPlaces: PropTypes.func.isRequired,
    place: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getPlaces();
  }

  onDeleteClick = id => {
    this.props.deletePlace(id); 
  };

  render() {
    const { places } = this.props.place;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='shopping-list' style={{ marginBottom: '2rem' }}>
            {places.map(({ _id, name, date, number, address, comment }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  {this.props.isAuthenticated ? (
                    <Button
                      className='remove-btn'
                      color='primary'
                      size='sm'
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times; შესრულება
                    </Button>
                  ) : null}
                  
                  <p className="post" style={{ color: 'red' }}>{name} {number} {address} {comment}</p>
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
  place: state.place,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getPlaces, deletePlace }
)(PlaceList);
