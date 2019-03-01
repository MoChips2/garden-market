import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import '@appbaseio/reactivesearch/dist/css/style.min.css';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
