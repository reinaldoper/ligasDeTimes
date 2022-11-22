import { Route, Switch } from 'react-router-dom';
import './App.css';
import initialPage from './page/initialPage';
import details from './page/details';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ initialPage } />
        <Route exact path="/pok" component={ details } />
      </Switch>
    </div>
  );
}

export default App;
