import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import CallModal from './components/CallModal';
import OrderModal from './components/OrderModal';
import PlaceModal from './components/PlaceModal';
import CallList from './components/CallList';
import OrderList from './components/OrderList';
import PlaceList from './components/PlaceList';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
          <Container>
            <CallModal />
            <CallList />
          </Container>
          <Container>
            <OrderModal />
            <OrderList />
          </Container>
          <Container>
            <PlaceModal />
            <PlaceList />
          </Container>
        </div>
      </Provider>
      
    );
  }
}

export default App;
