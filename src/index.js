import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import "./index.css";
import client from "./api/config/client";
import { store } from "./app/store/store";
import AppWrapper from "./AppWrapper";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <AppWrapper />
        </ApolloProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
