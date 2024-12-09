# Astro + Shadcn + PocketBase Starter

## Overview

This is a starter template combining [Astro](https://astro.build/), [React](https://reactjs.org/), [Shadcn UI](https://ui.shadcn.com/) (with [Tailwind CSS](https://tailwindcss.com/)), and [PocketBase](https://pocketbase.io/) for rapid web application development.

## Prerequisites

- Bun (recommended)
- Node.js (alternative)

## Features

- ⚡ Astro framework
- 🎨 Shadcn UI components
- 💾 PocketBase v0.23.5 as backend (Please replace depending on your OS type)
- 🦾 TypeScript support for both frontend and backend
- 🚀 TailwindCSS for styling

## Getting Started

### Installation

1. Scaffolding

```bash
npm create astro@latest my-astro-project -- --template syahmirafsan/astro-shadcn-pocketbase-starter
cd my-astro-project
```

2. Install dependencies

```bash
bun install
```

### Development

Run development server with PocketBase:

```bash
bun run dev
```

This will start both the Astro development server and PocketBase.

### Build

Build for production:

```bash
bun run build
```

### Preview

Preview production build:

```bash
bun run preview
```

### Type Generation

Generate types from PocketBase database:

```bash
bun run typegen
```

## Scripts

- `dev`: Start Astro and PocketBase concurrently
- `build`: Build Astro project
- `preview`: Preview production build
- `pb`: Start PocketBase server
- `typegen`: Generate TypeScript types from PocketBase DB
- `server`: To run server (optional)

## Technologies

- [Astro](https://astro.build)
- [React](https://reactjs.org)
- [Shadcn UI](https://ui.shadcn.com)
- [PocketBase](https://pocketbase.io)
- [TailwindCSS](https://tailwindcss.com)

## Configuration

Customize your project by modifying:

- `astro.config.mjs`
- `tailwind.config.mjs`
- `src/styles/globals.css`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
