import { useEffect, useContext } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutUsBottom from './components/HomePageComponents/AboutUsBottom';
import AboutUsTop from './components/HomePageComponents/AboutUsTop';
import Events from './components/HomePageComponents/Events';
import Hero from './components/HomePageComponents/Hero';
import Plans from './components/HomePageComponents/Plans';
import News from './components/HomePageComponents/News';

import { urlIndexMapping, navStateContext } from './contexts/navState';
import ContactUs from './components/HomePageComponents/ContactUs';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const { navState } = useContext(navStateContext);
  const { setTabIndex, setSubMenuIndex } = navState;
  useEffect(() => {
    const pathname = location.pathname;
    if (urlIndexMapping[pathname]) {
      setTabIndex(urlIndexMapping[pathname].tabIndex);
      setSubMenuIndex(urlIndexMapping[pathname].subMenuIndex);
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Hero />
          <AboutUsTop />
          <AboutUsBottom />
          <Plans />
          <Events />
          <News />
          <ContactUs />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
