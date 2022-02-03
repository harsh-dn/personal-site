/*eslint-disable */
import React,
{
  Suspense, lazy, useEffect, useState,
}
  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));


const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      {!loading
        ? <Suspense fallback={<Main />}>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/stats" component={Stats} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route component={NotFound} status={404} />
          </Switch>
          </Suspense>
        : <div style={{marginTop:"40vh", display:"flex", justifyContent:"center", textAlign:"center", alignItems:"center"}}><ScaleLoader color="#AAB1B1" loading={loading} height={80} width={10} radius={4}/></div>}
    </BrowserRouter>
  );
};

export default App;
