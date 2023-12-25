# Fiber Components

React UI components built on top of Radix UI

## Development

### Radix UI

We use [Radix UI](https://radix-ui.com/) as the base for our components.

Radix UI is a collection of unstyled low-level UI components that are un-opinionated and easy to build on top of.

---

### Structure

Components are split into 3 categories:

- Atoms
- Molecules
- Organisms

#### Atoms

Atoms are the smallest building blocks of the design system. They are the most basic UI elements and are used to build molecules and organisms.

Examples: Text, Button, Input, Checkbox, Radio

#### Molecules

Molecules are a combination of atoms. They are more complex than atoms and are used to build organisms.

Examples: Card, Modal, SearchField, Header

#### Organisms

Organisms are the most complex components. They are a combination of atoms and molecules. They are used to build pages.

Examples: Dashboard, Settings, Profile, SearchPage

---

### Storybook

[Storybook](https://storybook.js.org/) is used to develop and showcase components.

Run `yarn storybook` to start the storybook

Make sure your components is well documented in all its states in storybook.

---

### Vite

There's a vite environment that comes built in with the components package.

Run `yarn dev` to start the vite environment

Edit `main.tsx` to see your changes.

It provides a faster environment for developing components than Storybook.

---

### Testing

We use [Playwright](https://playwright.dev/) to test our components.

Run `yarn test` to run the tests

Recommended to download the [Playwright VSCode extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) to debug tests.

Make sure to write meaningful unit tests for your components.

---

### Documentation

A library is only as good as its documentation. Make sure to document your components so that other developers can easily use them.

- In the overview section in storybook `Component.mdx`, you should list

  - Component description
  - Component behavior
  - Component use cases/examples
  - Component props, their types, and if they're required
  - Component events
  - Component accessibility
  - Component references (links to design files, etc, if applicable)

- In the component story section `Component.stories.tsx`, you should demo the component in all its states/use-cases/variants

---

### \_Blank

The `_Blank` folder contains a blank component that you can use as a template to create a new component. Copy it and rename it to the name of your component.

---

## Tooling

| Tool                     | Description                                                       |
| ------------------------ | ----------------------------------------------------------------- |
| class-variance-authority | Easily creates TS-friendly variants of components                 |
| clsx                     | Utility for combining classNames                                  |
| playwright               | Testing                                                           |
| rollup                   | Used to build the package into a tree-shakable ESM format         |
| storybook                | Used to document and showcase components                          |
| vite                     | Used to develop components in a faster environment than Storybook |
