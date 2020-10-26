import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import TopNavbar from './components/TopNavbar';
import Sidebar from './components/SideBar';
import Home from './pages/Home';
import Payments from './pages/Payments'

import './App.css';

function App() {
  const { pathname } = useLocation(); 
    
  return (
    <Router>
      <ScrollToTop>
      <TopNavbar />
      <div className="app">
        <div className="app__container">
          <Sidebar />
            <Switch>
              <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
              <Route exact path="/" component={Home} />
              <Route path="/payments" component={Payments} />
              <Redirect from="*" to="/" />
            </Switch>
        </div>
      </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
