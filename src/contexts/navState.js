import React, { createContext } from 'react';

import useStateWithLabel from '../hooks/useStateWithLabel';

const navStateContext = createContext();

const signupSigninMenuOptions = [
  { to: '/signup', label: '加入會員' },
  { to: '/signin', label: '登入' },
];

const urlIndexMapping = {
  '/': { tabIndex: false, subMenuIndex: false },
  '/aboutUs': { tabIndex: 0, subMenuIndex: false },
  '/plans': { tabIndex: 1, subMenuIndex: false },
  '/events': { tabIndex: 2, subMenuIndex: false },
  '/members': { tabIndex: 3, subMenuIndex: false },
  '/news': { tabIndex: 4, subMenuIndex: false },
  '/signup': { tabIndex: 5, subMenuIndex: 0 },
  '/signin': { tabIndex: 5, subMenuIndex: 1 },
};

const routes = [
  {
    label: '關於我們',
    to: '/aboutUs',
  },
  { label: '優惠專案', to: '/plans' },
  { label: '活動', to: '/events' },
  {
    label: '會員',
    to: 'members',
  },
  {
    label: '公告',
    to: '/news',
  },
  {
    label: '登入',
    subMenu: signupSigninMenuOptions,
  },
];

const NavStateProvider = ({ children }) => {
  const [tabIndex, setTabIndex] = useStateWithLabel(false, 'tabIndex');
  const [subMenuIndex, setSubMenuIndex] = useStateWithLabel(
    null,
    'subMenuIndex'
  );
  const [openDrawer, setOpenDrawer] = useStateWithLabel(false, 'openDrawer');
  const [drawerMenu, setDrawerMenu] = useStateWithLabel(routes, 'drawerMenu');
  const [inMainMenu, setInMainMenu] = useStateWithLabel(true, 'inMainMenu');
  const navState = {
    tabIndex,
    subMenuIndex,
    openDrawer,
    drawerMenu,
    inMainMenu,
    setTabIndex,
    setSubMenuIndex,
    setOpenDrawer,
    setDrawerMenu,
    setInMainMenu,
    routes,
    signupSigninMenuOptions,
  };
  return (
    <navStateContext.Provider value={{ navState }}>
      {children}
    </navStateContext.Provider>
  );
};

export { NavStateProvider, navStateContext, urlIndexMapping };
