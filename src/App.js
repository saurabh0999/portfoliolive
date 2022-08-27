import './App.css';
// import store from './store'
// import { Provider } from 'react-redux'
import Myapp from "./myapp";

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    // <Provider store={store} >
    <BrowserRouter basename={process.env.PUBLIC_URL}>
     <Myapp/>
    /</BrowserRouter>
    // </Provider>
  );
}

export default App;
