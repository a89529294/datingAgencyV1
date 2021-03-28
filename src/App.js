import { useEffect, useContext, useRef } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import { urlIndexMapping, navStateContext } from './contexts/navState';
import Footer from './components/partials/Footer';
import AboutUsPage from './components/AboutUsPage';
import HomePage from './components/HomePage';

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
      </Switch>
      <Footer headerElement={headerRef.current} />
    </div>
  );
}

export default App;
