import React from 'react';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {ConfigureStore} from '../store/configureStore';
import cssComponent from './App.module.scss';
import Header from './Header/Header'
import HeroSection from './HeroSection/HeroSection';

const store = ConfigureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className={cssComponent.App}>
          <Switch>
            <Route exact path="/" >
              <HeroSection />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
