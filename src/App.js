import React from 'react';
//import Split from './composition/Split';
import './index.css';
import Tooltip from './Tooltip.js';

const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message' ps='Hi'>
   sdlfkjfdf
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <p>Hello {firstTooltip} World</p>
      <Tooltip message='one more tooltip message'>
          Necessitatibus?
      </Tooltip>
      <p>I am operating {secondTooltip} inside of react</p>
      <p>Aren't I cool?</p>
    </main>
  );
}

export default App;