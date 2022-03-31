import './App.css';
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";

import Default from './components/default/Default';
import HomePage from './components/homepage/HomePage';
import AboutMe from './components/about-me/AboutMe';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="default" element={<Default />} />
        <Route exact path={`${process.env.PUBLIC_URL}/`}  element={<HomePage />} />
        <Route exact path={`${process.env.PUBLIC_URL}/#/about-me`} element={<AboutMe />} />
        <Route exact path={`${process.env.PUBLIC_URL}/#/contacts`} element={<Contacts />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
