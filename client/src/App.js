import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignupPage from './screens/SignUp';
import LoginPage from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import AdminScreen from './screens/Admin';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/admin" component={AdminScreen} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/" component={SignupPage} />
      </Switch>
    </Router>
  );
}