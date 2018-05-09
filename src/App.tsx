import * as React from 'react';
import './App.css';

import { Panel } from './components/panel'; 
import { Stage } from './components/stage'; 

class App extends React.Component {

  public componentDidMount() {
    setTimeout(()=>{
      const pan = document.getElementsByClassName("panel");
      
      pan[0].setAttribute('data-status', 'open');
      pan[1].setAttribute('data-status', 'open');


    }, 2000);
  }

  public render() {
    return (
      <div className="App">
      <div className="panel-holder">
        <div className="panel left" data-status="closed">
          <Panel />
        </div>
        <div className="panel right" data-status="closed">
          <Panel />
        </div>
      </div>
        <Stage />
      </div>
    );
  }
}

export default App;
