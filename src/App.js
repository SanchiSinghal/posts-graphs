import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./graph/components/Navbar";
import './App.css';
import LinePostChart from './graph/components/LinePostChart';
import PieCharts from './graph/components/PieChart'
import BarGraph from './graph/components/BarGraph'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={LinePostChart} />
          <Route path='/pieChart' component={PieCharts} />
          <Route path='/barGraph' component={BarGraph} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
