import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styles from './App.module.css';
import HomePage from './Pages/HomePage';
import SettingsPage from './Pages/Settings';
import ApplicationReview from './Components/ApplicationReviewCard';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/settings" component={SettingsPage} />
            <Route exact path="/application-review" component={ApplicationReview} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
