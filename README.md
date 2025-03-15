# Cultural Underpinnings of Stress Relief: Exploring Cross-Cultural Coping Strategies

> COMP_SCI 397/497 mHealth - Winter 2025 - Northwestern University

[![GitHub License][license-badge]][license-link]
[![Node.js][node-badge]][node-link]
[![pnpm Version][pnpm-badge]][pnpm-link]|
[![React][react-badge]][react-link]
[![Tailwind CSS][tailwind-badge]][tailwind-link]
[![Vite][vite-badge]][vite-link]
[![Eslint][eslint-badge]][eslint-link]

## Table of Contents

- [Cultural Underpinnings of Stress Relief: Exploring Cross-Cultural Coping Strategies](#cultural-underpinnings-of-stress-relief-exploring-cross-cultural-coping-strategies)
  - [Table of Contents](#table-of-contents)
  - [📖 Study Description](#-study-description)
  - [📁 File Structure and Logic](#-file-structure-and-logic)
  - [🚀 Getting Started](#-getting-started)
    - [1. Node.js Environment Setup](#1-nodejs-environment-setup)
    - [2. Dependencies Installation (with pnpm)](#2-dependencies-installation-with-pnpm)
    - [3. Development](#3-development)
    - [4. Production (Preview)](#4-production-preview)
    - [5. Linting](#5-linting)
  - [📜 License](#-license)

## 📖 Study Description

This study investigates **cross-cultural differences in stress relief strategies** among college students, focusing on how **cultural upbringing influences coping behaviors**. By combining **quantitative survey analysis** and **qualitative interview insights**, we explore variations in stress management approaches between **Eastern and Western cultural backgrounds**.

## 📁 File Structure and Logic

This project uses a component-based structure with a focus on clear separation of concerns. Key files and folders:

```plaintext
.
├── LICENSE
├── README.md                  # Project documentation and usage guide
├── vite.config.ts             # Vite configuration file
├── tsconfig.json              # Typescript config file
├── eslint.config.mjs          # Eslint configuration
├── package.json               # Dependencies
├── pnpm-lock.yaml             # pnpm lock file
└── src                        # Source code
    ├── App.tsx                # Main application component
    ├── index.tsx              # Entry point of the application
    ├── global.css             # Global styles
    ├── components             # Shared components and features
    │   ├── common             # Common components
    │   │  └── layout          # Layout components
    │   └── ...                # Other pages' components
    ├── hooks                  # Custom hooks for specialized logic
    └── types.d.ts             # Global types define here
```

The main components and utilities are organized under `src/components` and `src/utils`.

## 🚀 Getting Started

### 1. Node.js Environment Setup

Make sure you have Node.js (>= 20.0.0) installed on your machine. Recommend using LTS version.

Check whether you have `pnpm` installed by running:

```bash
pnpm --version
```

If you don't have `pnpm` installed, you can install it by running:

```bash
npm install --global corepack@latest
corepack enable pnpm
```

If any error occurs, please refer to the [official installation documentation](https://pnpm.io/installation).

### 2. Dependencies Installation (with pnpm)

Run the following command to install all dependencies (in the root directory):

```bash
pnpm install
```

### 3. Development

To start the development server, run:

```bash
pnpm dev
```

And open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 4. Production (Preview)

To build the production version, run:

```bash
pnpm build
```

And to start the production server, run:

```bash
pnpm start
```

### 5. Linting

> **Note**: This step is only for developing purpose.

Auto linting on save and commit is already set up. You can also run the following command to lint the code:

```bash
pnpm run lint:fix
```

## 📜 License

This project is licensed under the **AGPL-3.0 License** as it includes portions of code from
[SuzuBlog](https://github.com/ZL-Asica/SuzuBlog) (AGPL-3.0 licensed).

See the [LICENSE](LICENSE) file for details.

<!-- Badges / Links -->

[eslint-badge]: https://img.shields.io/badge/eslint-4B32C3?logo=eslint&logoColor=white
[eslint-link]: https://www.npmjs.com/package/eslint-config-zl-asica
[license-badge]: https://img.shields.io/github/license/ZL-Asica/W25-CS497-mHealth-Web
[license-link]: https://github.com/ZL-Asica/W25-CS497-mHealth-Web/blob/main/LICENSE
[node-badge]: https://img.shields.io/badge/node%3E=20.00-339933?logo=node.js&logoColor=white
[node-link]: https://nodejs.org/
[pnpm-badge]: https://img.shields.io/github/package-json/packageManager/ZL-Asica/W25-CS497-mHealth-Web?label=&logo=pnpm&logoColor=fff&color=F69220
[pnpm-link]: https://pnpm.io/
[react-badge]: https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB
[react-link]: https://react.dev/
[tailwind-badge]: https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white
[tailwind-link]: https://tailwindcss.com/
[vite-badge]: https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff
[vite-link]: https://vitejs.dev/
