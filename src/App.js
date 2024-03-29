import React from "react";
import Main from "./routers/Main.js";
import { BrowserRouter } from 'react-router-dom';
import myStore from "./redux/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={myStore}>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
