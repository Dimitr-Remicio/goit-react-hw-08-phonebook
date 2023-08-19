import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import App from "./components/App/App.jsx";
import React from "react";
import './index.css';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Headers from "./head/head.jsx";


import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
   <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
     <BrowserRouter basename='/goit-react-hw-08-phonebook'>
       <App  />
     </BrowserRouter>
   </PersistGate>
 </Provider>
 <Headers />
</React.StrictMode>
);
