# React with Flow and Eslint Boilerplate for Gitlab

<a href="https://reactjs.org" target="_blank">
  <img src="https://cdn.worldvectorlogo.com/logos/react.svg" height="50" />
</a>
<a href="http://eslint.org" target="_blank">
  <img src="https://cdn.worldvectorlogo.com/logos/eslint.svg" height="50" />
</a>
<a href="https://babeljs.io" target="_blank">
  <img src="https://raw.githubusercontent.com/babel/logo/master/babel.png"
  height="50" />
</a>
<a href="https://flow.org/en/" target="_blank">
  <img src="https://cdn.worldvectorlogo.com/logos/flow.svg" height="50" />
</a>
<a href="https://www.docker.com" target="_blank">
  <img src="https://cdn.worldvectorlogo.com/logos/docker.svg" height="50" />
</a>
<a href="https://redux.js.org" target="_blank">
  <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" height="50" />
</a>
<a href="https://about.gitlab.com/features/gitlab-ci-cd/" target="_blank">
  <img src="https://cdn.worldvectorlogo.com/logos/gitlab.svg" height="50" />
</a>

## Features

## Components

- [Babel](https://babeljs.io) for ES6 support.
- [ESlint](http://eslint.org) for ES6 linting.
- [React](https://reactjs.org) as front-end view library.
- [Husky](https://github.com/typicode/husky) as easy git hooks provider.
- [Flow](https://flow.org/en/) for type linting.
- [Redux](https://redux.js.org)
- [redux-I18n](https://github.com/APSL/redux-i18n) as a internationalization provider.
- [redux-thunk](https://github.com/reduxjs/redux-thunk) as a middleware
- [Docker](https://www.docker.com) as a solution for app working everywhere.
- [Gitlab-ci](https://about.gitlab.com/features/gitlab-ci-cd/) as a CI/CD tool

## Getting Start

```bash
  git clone git@github.com:apiotrowski312/react-boilerplate.git
  cd react-boilerplate
  npm install | yarn
  npm start | yarn start
```

## Availible commands

`start` - run app

`build` - create optimalized production build

`test` - run tests

`lint` - show all lint errors inside ./src

`lint:fix` - show all lint errors inside ./src and autofix them if possible

`flow:coverage` - run coverage-report for flow

`gitlab:*` - throw errors on fail


### TO DO:

* add Prettier
* add tutorial for flow, running etc.
* less compiler

https://medium.com/netscape/secret-flow-types-86b2ebb30951