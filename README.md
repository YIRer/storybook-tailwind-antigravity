# Stroybook Component Library

A reusable component library built with React, TypeScript, Storybook, Tailwind CSS, Shadcn UI, and Radix UI.

## Features

- **Component Library**: Includes standard UI components (Dialog, Button, etc.) built on Radix UI.
- **Styling**: Tailwind CSS with Shadcn design system variables.
- **Development**: Storybook for component development and testing with Vite HMR.
- **Build**: Rollup for optimized library bundling (ESM/UMD) and Type definition generation.

## Installation

```bash
npm install stroybook
```

## Usage

### 1. Import Styles

Import the CSS file in your root entry point (e.g., `main.tsx` or `App.tsx`):

```tsx
import 'stroybook/dist/index.css';
```

### 2. Use Components

```tsx
import { GlobalModal, Button } from 'stroybook';

function App() {
  return (
    <div>
      <Button>Click Me</Button>
      <GlobalModal />
    </div>
  );
}
```

## Theme Customization

The library uses CSS variables for theming (Shadcn standard). You can override these variables in your project's global CSS to change the look and feel.

Example `index.css` overrides:

```css
:root {
  --primary: 260 80% 50%; /* Deep Purple */
  --primary-foreground: 210 40% 98%;
  --radius: 1rem;
}
```

## Development

- **Run Storybook**: `npm run storybook`
- **Build Library**: `npm run build`
- **Test**: `npx vitest`

## Project Structure

- `src/components`: UI components (Shadcn & Custom)
- `src/stories`: Storybook stories
- `dist`: Compiled output (JS, CSS, Types)
