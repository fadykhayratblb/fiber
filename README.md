# BLabs Fiber Design System

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Commitizen-friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Open in VSCode](https://img.shields.io/badge/open-vscode-blue.svg)](https://open.vscode.dev/btechlabs/fiber-web)

## Packages

- [@blabs/fiber-components](./packages/components/README.md)
- [@blabs/fiber-styles](./packages/styles/README.md)

## Getting Started

### Documentation website

- [Storybook](https://btechlabs.github.io/fiber-web/) (🏗️ Under construction)

### Contributing

#### Commits

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to automate our releases. Your commit message must follow the conventional commit format.

To commit, use on of these options:

- Use [commitizen](https://commitizen-tools.github.io/commitizen/)
  - `npx cz` - Recommended, simple and can be triggered anywhere
  - `yarn commit` - Works _only_ in the root of the project or in a package
  - `git cz` - Works _only_ if you have commitizen installed globally
- Write your commit message manually
  - `git commit -m "type(scope): description"`

#### Changeset

We use [Changesets](https://github.com/changesets/changesets) to facilitate semantic versioning. When you want to release a new version of a package, you must create a changeset.

Run `yarn changeset` in the root to create a changeset. You will be prompted to select the packages you want to release and to write a summary of the changes.

### Installing Fiber

1. Go to [Github account settings](https://github.com/settings/tokens)
2. Generate a personal access token, make sure to select `read:packages`
3. Run `npm login --registry=https://npm.pkg.github.com --scope=@btechlabs`
4. Enter your Github username
5. Enter your personal access token from step 2 as the password

Now you can install Fiber packages from Github Packages.

- Run `yarn add @btechlabs/fiber-components @btechlabs/fiber-styles`

## What's inside?

```text

├── .changeset                                # Contains changeset files and config
├── .github                                   # Contains github actions and workflows
│   └── workflows                             # Contains github workflows
│       └── release-packages.yml              # Github workflow for releasing packages
├── .husky                                    # Contains husky hooks
│   ├── pre-commit                            # Runs lint-staged which runs eslint + prettier
│   └── commit-msg                            # Runs commitlint
├── .yarn                                     # Contains yarn release, cache and patch files
├── node_modules                              # Contains all dependencies
├── packages                                  # Contains all packages (workspaces)
│   ├── components                            # Contains React UI components
│   └── styles                                # Contains standard design system style tokens
├── .eslintrc.cjs                             # Contains eslint config
├── .gitignore                                # Contains gitignore config
├── .prettierrc                               # Contains prettier config
├── README.md                                 # Contains README.md (this file!)
├── .yarnrc.yml                               # Contains yarn config
├── commitlint.config.js                      # Contains commitlint config
├── package.json                              # root package.json
└── yarn.lock                                 # yarn lockfile

```

### Package descriptions

| Package Name | Description                                                                                                                                              |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| components   | React UI components built on top of Radix UI                                                                                                             |
| styles       | Standard design system style tokens. Contains output of Figma Design Tokens, transforms it to style-dictionary, which outputs css, scss, .js style files |

## Demos of Fiber

- 📂 [Tech foundation using nx.dev](https://github.com/btechlabs/blue-beetle-web) (🏗️ Under construction)
- 📂 [Simple demo with Vite](https://github.com/btechlabs/fiber-web) (🏗️ Under construction)

## Tooling

| Tool            | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| yarn workspaces | Used to manage multiple packages within this monorepo        |
| changesets      | Used to enforce semantic versioning                          |
| commitlint      | Used to force conventional commit messages                   |
| eslint          | Used to lint the codebase                                    |
| husky           | Git hooks to lint and check commit message before committing |
| lint-staged     | Runs eslint and prettier on staged files                     |
| parallelshell   | Used to build packages in parallel since they're independent |
| prettier        | Standardizes file format across the repo                     |
| typescript      | All packages are written in TS                               |

---

**_Always pin your dependencies!_**
