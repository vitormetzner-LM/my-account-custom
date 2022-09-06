import React, { Fragment } from "react";
import { Route } from "react-router-dom";
//Your components pages
import MyAccountLink from "./components/MyAccountLink";

const MyAppPage = () => {
  return (
    <Fragment>
      <Route exact path="/meusvales" component={MyAccountLink} />
    </Fragment>
  );
};

export default MyAppPage;
