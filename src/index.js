import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import StorePicker from './components/StorePicker';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
