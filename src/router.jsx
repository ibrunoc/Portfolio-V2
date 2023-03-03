import * as React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = React.lazy(() => import('./App.jsx'));
const Courses = React.lazy(() => import('./Pages/Courses/Courses.jsx'));
const Projects = React.lazy(() => import('./Pages/Projects/Project.jsx'));
const Error = React.lazy(() => import('./Pages/Error404/Error404.jsx'));

export function Router() {
  return (    
    <React.Suspense fallback='loading...'>
      <BrowserRouter>   
        <Routes>        

          <Route path="*" element={<Error />} />      

          <Route path="/" element={<App />} /> 

          <Route path="/Courses" element={<Courses />} />

          <Route path="/Projects" element={<Projects />} />

        </Routes>     
      </BrowserRouter>
    </React.Suspense>
  );
}