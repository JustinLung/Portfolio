# Sveltalot

Everything you need to build a Svelte project, is powered by [`sv`](https://github.com/sveltejs/cli).

## Prerequistes

- [Node v22.x](https://nodejs.org/en)
- [pNpM](https://pnpm.io/)
- [nvm (node version manager)](https://github.com/nvm-sh/nvm)

## Developing

```bash
git clone git@github.com:MerlinDotStudio/sveltalot.git &&
cd sveltalot &&
nvm use &&
pnpm install
```

Once you've cloned the project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm dev
```

### What if I don't know Svelte?

If you're used to writing react over svelte, than take a look at [component-party.dev](https://component-party.dev/). This compares simple examples of React (or any other framework) and translates them to Svelte (or whatever other framework you'd like)

## Building

To create a production version of your app:

```bash
pnpm build
```

You can preview the production build with `pnpm preview`.

## GraphQL

To generate the GraphQL types make sure you have the correct environment variables in your `.env` file. After that you can generate types by using:

```bash
pnpm generate-graphql
```

or use watch mode by using

```bash
pnpm watch-graphql
```

## Components and state

To create a new component from our the stack template, you can use:

```bash
pnpm component ComponentName
```

or to create state, use:

```bash
pnpm state StateName
```

## Favicons

To generate favicons, use:

> Make sure you have the correct environment variables since the source will be pulled from the CMS.

```bash
pnpm favicons
```

## Icons

To generate favicons, use:

```bash
pnpm icons
```

## Credits

Stack built by [Daan Korver](https://github.com/DaanKorver) @ [Merlin.studio](https://merlin.studio/)
