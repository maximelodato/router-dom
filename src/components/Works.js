// src/components/Works.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Works = () => {
  return (
    <div>
      <h1>Welcome on the works page. Please, select a category</h1>
      <nav>
        <ul>
          <li><Link to="exercises">Exercises</Link></li>
          <li><Link to="case-study">Case Study</Link></li>
          <li><Link to="concret-case">Concret Case</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Works;