## Intro

MyAccount is a canonical app built in all VTEX stores. This app serves as a hub of apps, meaning that it is the entry point for all apps that want to be available for the store's customers.

The app is responsible for handling customer's personal data such as: profile info, passwords, addresses, orders and credit cards. Orders and credit cards are responsibilities of other two apps that come per default with the MyAccount, respectively, these app are: `vtex-account_menu-link`.

## Features

This application was made to facilitate the use of vtex my account, being able to add a new tab in vtex-account_menu-link

### Adding a new tab to vtex account menu link

To add a new tab in `vtex-account_menu-link` you need  you need to add the following builders in `manifest.json`


```json

  "builders": {
    "styles": "2.x",
    "store": "0.x",
    "sitemap": "0.x",
    "docs": "0.x",
    "react": "3.x",
    "messages": "1.x"
  },
```
Now next you can be manually adding a file in the react folder called package.json after that you may be manually adding a file in the react folder called package.json


```json
  "name": "my-account-plugin",
  "dependencies": {
    "@types/react-router-dom": "^5.3.3",
    "apollo-client": "^2.4.7",
    "axios": "^0.26.1",
    "exenv": "^1.2.2",
    "graphql": "^14.0.2",
    "moment": "^2.22.2",
    "query-string": "^6.3.0",
    "react": "^16.4.1",
    "react-apollo": "^2.3.2",
    "react-dropzone": "^5.0.1",
    "react-intl": "^2.4.0",
    "react-media": "^1.8.0",
    "react-responsive-modal": "^6.2.0",
    "react-router-dom": "^4.3.1",
    "recompose": "^0.27.1"
```
  
 Now add a file called custom.d.ts in the same location as package.json and declare the react-intl module

```jsx
  declare module "react-intl";
 ```
   
 Inside the react component folder you will create a file called MyAccountLink with the following items , And then in the root of the react folder 2 files, MyApp Link and MyAppPage


```jsx
import React from "react";
const MyAccountLink = () => {
  return (
    <div>
      <h1>User Support</h1>
      <div>How can I help you today?</div>
    </div>
  );
};
export default MyAccountLink;
```
MyAppLink below
```jsx
import PropTypes from "prop-types";
import { intlShape, injectIntl } from "react-intl";

function MyAppLink({ render , intl }: any) {
    return render([
        {
            name: intl.formatMessage({ id: "Meus Vales" }),
            path: "/meusvales",
        },
    ]);
}
MyAppLink.PropTypes = {
  render: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(MyAppLink);
```
   
Then still in the root you will add a file MyAppPage.tsx

```jsx 
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
```

Now outside the react folder in the root folder called your project will create a messages file and inside it a file called context.json
```json
{
    "store.my-account-lm.link": "Seu Texto"
} 
```
Inside the message folder you will create 3 files en,es and pt with the same item placed in context.json

Inside your store folder called plugins.json you will create the following plugin

```json
{
    "my-account-pages > my-account-page":"my-account-page.my-account-lm-page",
    "my-account-menu > my-account-link":"my-account-link.my-account-lm-link"
}
```

Still, some errors will appear in React , you will run the command inside the react folder `vtex setup --typings` , and outside the react folder at the root of the project will give a vtex install to install the necessary app and its dependencies added manually

<a href="https://prnt.sc/_0nNGxLC3jh-">
## Contributors ✨


<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/devvitorfarias/"><img src="https://avatars.githubusercontent.com/u/66703405?v=4" width="100px;" alt=""/><br /><sub><b>Vitor De Farias Metzner</b></sub></a><br /></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the  (https://github.com/vitorfarias001) specification. Contributions of any kind welcome!
