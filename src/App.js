import { useState } from 'react';
import vNode from './lib/vue-to-react';
import JoyUIContextWrapper from './components/JoyUIContextWrapper';
// import reactLogo from './assets/react.svg';
// import './App.css';
import Root from './pages/root/root';

function AppCore() {
  return vNode('div', {className: 'app', id: 'app'}, vNode(Root));
};

function App() {
  const coreNode = vNode(AppCore);
  const wrappers = [
    {
      component: JoyUIContextWrapper,
      props: {
        injectFirst: true,
        useCssBaseline: true,
        defaultMode: 'dark',
        // colorSchemeSelector: "#app *, .app *",
        // disableNestedContext: true,
      },
    },
  ];

  let finalNode = coreNode;
  for (const wrapper of wrappers) {
    finalNode = vNode(wrapper.component, wrapper.props, finalNode);
  };
  return finalNode;
};

export default App;
