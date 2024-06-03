# Team TJUSX 2024 Wiki

This repository uses `TypeScript` and `React` to manage the wikis.

This repository **MUST** contain all coding assets to generate your team's wiki
(HTML, CSS, JavaScript, TypeScript, Python, etc).

Images, photos, icons and fonts **MUST** be stored on `static.igem.wiki` using
[tools.igem.org](https://tools.igem.org), and Videos **must** be embedded
from [iGEM Video Universe](https://video.igem.org).

For up-to-date requirements, resources, help and guidance, visit
[competition.igem.org/deliverables/team-wiki](https://competition.igem.org/deliverables/team-wiki).

## Getting Started

Before refactoring the code of this template to suit your wiki needs, please make sure you have the ability to use React
for web development.

1. Clone the repository:
   ```bash
   git clone https://gitlab.igem.org/2024/tjusx
   cd tjusx
   ```
2. Install the dependencies:

   ```bash
   yarn install
   ```

   ### Important:

   Ensure you are using Node.js version `^18.18.0 or >=20.0.0` to mostly avoid compatibility issues. Node `v18.20.0` is
   recommended for this project. You can check your Node version by running `node -v` in your terminal.

3. Start the development server:
   ```bash
   yarn run dev
   ```
4. Navigate to the files you wish to edit:
   - The main App component can be found under `src/containers/App`
   - Pre-built components are located under `src/components`
   - Individual pages can be modified in the `src/pages.ts`
   - Content pages can be updated in the `src/contents`
5. Once you are done, save the changes by **committing** them to the _main branch_ of the repository
6. An automated script will build, test and deploy your wiki to the iGEM server

## About This Template

### Files

Below is the structure of important files and directories in this project:

    ├── README.md            -> The file you are currently reading
    ├── index.html           -> Single HTML file for the wiki
    ├── package.json         -> Manages project metadata and dependencies
    ├── src/
    │   ├── components/      -> Pre-built components(like Navbar, Footer, etc.)
    │   ├── containers/
    │   │   └── App/         -> Main React application container
    │   ├── contents/
    │   │   ├── *.tsx        -> Page components for the wiki
    │   ├── main.tsx         -> Entry point of the wiki application
    │   ├── pages.ts         -> Page definition and path mapping
    │   ├── utils/           -> Utility functions
    │   └── vite-env.d.ts    -> TypeScript definitions for Vite
    ├── tsconfig.json        -> Configures TypeScript options
    ├── tsconfig.node.json   -> TypeScript settings for Node.js
    ├── vite.config.ts       -> Configuration for the Vite tool
    └── yarn.lock            -> Yarn lock file for dependency management

### Technologies

- [React](https://reactjs.org): A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org): Extends JavaScript by adding types
- [Vite](https://vitejs.dev): Frontend tooling that provides faster and leaner development builds
- [Bootstrap](https://getbootstrap.com): Framework for building responsive, mobile-first sites
- [React Bootstrap](https://react-bootstrap.github.io): Bootstrap components built with React
- [React Router](https://reactrouter.com): Declarative routing for React applications
- (Optional) [Prettier](https://prettier.io): Code formatter
