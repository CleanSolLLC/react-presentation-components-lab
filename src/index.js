import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const changedBlue = (event) => {
  event.target.style.color = "blue"
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={changedBlue} />
  </div>,
  document.getElementById('root')
);