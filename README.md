# Stroybook Component Library

A reusable component library built with React, TypeScript, Storybook, Tailwind CSS, Shadcn UI, and Radix UI.

## Features

- **Component Library**: Includes standard UI components (Dialog, Button, etc.) built on Radix UI.
- **Styling**: Tailwind CSS with Shadcn design system variables.
- **Development**: Storybook for component development and testing.
- **Build**: Vite Library Mode for optimized bundling (ESM/UMD).

## Installation

(Assuming this package is published or linked)

```bash
npm install stroybook
```

## Usage

### 1. Import Styles

Import the CSS file in your root entry point (e.g., `main.tsx` or `App.tsx`):

```tsx
import 'stroybook/dist/style.css';
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

## Consuming Tailwind Config (Optional)

If you want to use the library's Tailwind configuration or utility classes extensively in your project, you can add the library's source paths to your `tailwind.config.js` content array (if you have access to source) or just rely on the compiled CSS.

## Development

- **Run Storybook**: `npm run storybook`
- **Build Library**: `npm run build`
- **Lint**: `npm run lint`

## Project Structure

- `src/components`: UI components (Shadcn & Custom)
- `src/stories`: Storybook stories
- `dist`: Compiled output (JS, CSS, Types)
