import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

function Test() {
  return React.createElement('div', { style: { padding: '20px' } }, 'Hello from React!');
}

var container = document.getElementById('root');
if (container) {
  var root = ReactDOM.createRoot(container);
  root.render(React.createElement(Test, null));
}
