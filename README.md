# Portfolio 🚀

This is a personal portfolio website built using **Next.js**, **TypeScript**, **React Three Fiber**, and **Framer Motion** to showcase professional projects, skills, and experience. The project is styled using **TailwindCSS** and managed with **Yarn**.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [File Structure](#file-structure)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)

## Demo

Check out the live demo of this portfolio project [here](https://justinlung.com/).

## Features

- **3D Animations**: Integrates **React Three Fiber** for interactive 3D experiences.
- **Smooth Animations**: Utilizes **Framer Motion** for seamless page transitions and animations.
- **Responsive Design**: Fully responsive and optimized for different screen sizes using **TailwindCSS**.
- **TypeScript**: Provides static typing for better development experience and safety.
- **SEO Optimized**: Built-in optimizations for search engine visibility.
- **Fast Performance**: Powered by **Next.js** for server-side rendering and optimized performance.
- **DatoCMS**: Headless CMS 

## Technologies

This portfolio project is built with:

- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **React Three Fiber**: A React renderer for Three.js to create 3D visualizations.
- **Framer Motion**: A library for animations and page transitions.
- **TailwindCSS**: Utility-first CSS framework for responsive styling.
- **Yarn**: Dependency management for fast and reliable builds.

## File Structure

Here’s an overview of the project's file structure:

```
portfolio/
├── lib/                     # Utility functions and libraries
├── public/                  # Static assets such as images, favicons, etc.
├── scripts/                 # Scripts for automation and setup
├── src/                     # Source code (components, pages, etc.)
├── .env                     # Environment variables file (not checked into source control)
├── .gitignore               # Git ignore file
├── .graphqlrc.js            # GraphQL configuration
├── global.d.ts              # Global TypeScript declarations
├── next-env.d.ts            # Next.js TypeScript environment
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss-util-hover.js     # Custom PostCSS hover utilities
├── postcss.config.js         # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── yarn.lock                # Yarn lockfile for dependencies
```

## Environment Variables

The project uses environment variables to handle sensitive information like API keys and endpoints. These should be stored in a `.env` file at the root of the project. **Ensure that this file is not checked into source control.**

### Sample `.env` file:

```env
# GraphQL API Endpoint for DatoCMS
DATO_ENDPOINT=https://graphql.datocms.com/

# API Key for DatoCMS
DATO_API_KEY=your_dato_cms_api_key_here
```

### Usage in the project:

In the `client.ts` file, the environment variables are accessed as follows:

```typescript
// client.ts
import { GraphQLClient } from 'graphql-request';
import { getSdkWithHooks } from '@lib/generated/sdk';

const nextGraphQlClient = new GraphQLClient(process.env.DATO_ENDPOINT || '', {
  headers: {
    Authorization: `Bearer ${process.env.DATO_API_KEY}`,
  },
});

// Use this server side, it directly calls the Umbraco GraphQL endpoint
export const nextClient = getSdkWithHooks(nextGraphQlClient);
```

Make sure you add your actual `DATO_API_KEY` and `DATO_ENDPOINT` in the `.env` file before running the project.

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/JustinLung/Portfolio.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd Portfolio
   ```

3. **Install dependencies** using Yarn:

   ```bash
   yarn install
   ```

4. **Set up environment variables**:

   Create a `.env` file at the root of the project and add your API keys and other sensitive values as shown in the [Environment Variables](#environment-variables) section.

## Usage

### Development Mode

To start the project in development mode:

```bash
yarn dev
```

This will start the development server, and you can access the portfolio at `http://localhost:3000`.

### Production Build

To build the project for production:

```bash
yarn build
```

To serve the production build locally:

```bash
yarn start
```

## Deployment

This project can be deployed on platforms like **Vercel** or **Netlify**.

### Deploying to Vercel

1. Install the Vercel CLI:

   ```bash
   yarn global add vercel
   ```

2. Run the deployment command:

   ```bash
   vercel
   ```

Follow the prompts to deploy the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
