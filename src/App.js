import { useEffect, useContext, useRef } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';

import Header from './components/_partials/Header/Header';
import { urlIndexMapping, navStateContext } from './contexts/navState';
import Footer from './components/_partials/Footer';
import AboutUsPage from './components/AboutUsPage';
import HomePage from './components/HomePage';
import PlansPage from './components/PlansPage';
import EventsPage from './components/EventsPage';
import MembersPage from './components/MembersPage';

function App() {
  const location = useLocation();
  const { navState } = useContext(navStateContext);
  const { setTabIndex, setSubMenuIndex } = navState;
  const headerRef = useRef();
  useEffect(() => {
    const pathname = location.pathname;
    if (urlIndexMapping[pathname]) {
      setTabIndex(urlIndexMapping[pathname].tabIndex);
      setSubMenuIndex(urlIndexMapping[pathname].subMenuIndex);
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Header ref={headerRef} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/aboutUs">
          <AboutUsPage />
        </Route>
        <Route exact path="/plans">
          <PlansPage />
        </Route>
        <Route exact path="/events">
          <EventsPage />
        </Route>
        <Route exact path="/members">
          <MembersPage />
        </Route>
      </Switch>
      <Footer headerElement={headerRef.current} />
    </div>
  );
}

export default App;
