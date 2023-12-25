# Fiber Styles

Design System Tokens

## Description

This package contains the design system tokens for the Fiber Design System.

What's inside?

```text

├── dist                                        # Output of the build
│   └── tokens                                  # Contains different types of tokens
│       ├── variables.css                       # Output of tokens in CSS format
│       ├── variables.scss                      # Output of tokens in SCSS format
│       ├── variables.js                        # Output of tokens in JS format
│       └── variables-detailed.js               # Output of tokens in JS format, with info about each token
└── src                                         # Source folder
    ├── style-dictionary                        # Contains the style-dictionary related files
    |   ├── config                              # Contains the style-dictionary config files
    |   |   └── index.ts                        # Configures the style-dictionary build
    |   ├── formatters                          # Contains custom formatters for the style-dictionary
    |   |   └── jsKeyValue.ts                   # Defines a custom formatter for JS format, responsible for variables-detailed.js
    |   └── build.ts                            # Runs the style-dictionary build
    ├── input.json                              # Input to token-transformer, exported from Figma Tokens Studio
    └── output.json                             # Output of token-transformer, input to style-dictionary

```

---

## Tooling

| Tool              | Description                                                                                                       |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| style-dictionary  | Used to transform tokens into different formats                                                                   |
| sass              | Used to build the .scss tokens                                                                                    |
| token-transformer | Used to transform the tokens exported from Figma Tokens Studio into a format that style-dictionary can understand |
| ts-node           | Used to run the style-dictionary build in TS                                                                      |
