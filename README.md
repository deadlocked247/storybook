# Storybook
[![Greenkeeper badge](https://badges.greenkeeper.io/storybooks/storybook.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/storybooks/storybook.svg?branch=master)](https://travis-ci.org/storybooks/storybook)
[![CodeFactor](https://www.codefactor.io/repository/github/storybooks/storybook/badge)](https://www.codefactor.io/repository/github/storybooks/storybook)
[![Known Vulnerabilities](https://snyk.io/test/github/storybooks/storybook/8f36abfd6697e58cd76df3526b52e4b9dc894847/badge.svg)](https://snyk.io/test/github/storybooks/storybook/8f36abfd6697e58cd76df3526b52e4b9dc894847)
[![BCH compliance](https://bettercodehub.com/edge/badge/storybooks/storybook)](https://bettercodehub.com/results/storybooks/storybook) [![codecov](https://codecov.io/gh/storybooks/storybook/branch/master/graph/badge.svg)](https://codecov.io/gh/storybooks/storybook)
[![Storybook Slack](https://storybooks-slackin.herokuapp.com/badge.svg)](https://storybooks-slackin.herokuapp.com/)

Storybook is a development environment for UI components.
It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

## Intro

![Storybook Screenshot](app/react/docs/demo.gif)

Storybook runs outside of your app. This allows you to develop UI components in isolation, which can improve component reuse, testability, and development speed. You can build quickly without having to worry about application-specific dependencies.

Storybook comes with a lot of [addons](https://storybooks.js.org/docs/react-storybook/addons/introduction) for component design, documentation, testing, interactivity, and so on. Storybook's easy-to-use API makes it easy to configure and extend in various ways. It has even been extended to support React Native development for mobile.

## Getting Started

First install storybook:
```js
npm i -g @storybook/cli
cd my-react-app
getstorybook
```

Once it's installed, you can `npm run storybook` and it will run the development server on your local machine, and give you a URL to browse some sample stories.

For full documentation on using Storybook visit: [storybooks.js.org](https://storybooks.js.org)

## Main Projects
- [Storybook for react](app/react) - Storybook for React components
- [Storybook for react-native](app/react-native) - Storybook for React components

## Sub Projects
- [Storyshots](lib/storyshots) - Easy snapshot testing for storybook
- [CLI](lib/cli) - Streamlined installation for a variety of app types
- [examples](examples) - Code examples to illustrate different Storybook use cases

## Addons
- [addon-actions](addons/actions/) - Log actions as users interact with components in storybook
- [addon-comments](addons/comments/) - Comment on storybook stories
- [addon-graphql](addons/graphql/) - Query a GraphQL server within Storybook stories
- [addon-info](addons/info/) - Annotate stories with extra component usage information
- [addon-knobs](addons/knobs/) - Interactively edit component prop data in the Storybook UI
- [addon-notes](addons/notes/) - Annotate storybook stories with notes
- [addon-options](addons/options/) - Customize the storybook UI in code

## Contributing

We welcome contributions to Storybook! There are many ways to contribute to
this project. [Get started here](CONTRIBUTING.md)
