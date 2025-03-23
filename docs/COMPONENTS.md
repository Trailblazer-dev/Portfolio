# Component Documentation

This document provides detailed information about the main components used in the portfolio project.

## 1. Button Component

A versatile button component that can render as different elements (button, a, div) based on props.

### Props

- `children` (required): Content inside the button
- `className`: Additional CSS classes
- `swit`: Boolean to toggle background styles
- `onClick`: Function to handle click events
- `as`: Element type to render ('div', 'button', 'a')
- `href`: URL for anchor links
- `download`: Boolean or string for download attribute
- `target`: Target attribute for links
- `rel`: Rel attribute for links
- `ariaLabel`: Accessibility label
- `type`: Button type attribute

### Usage

```jsx
<Button swit={true} className="px-4 py-2">
  Button Text
</Button>

<Button
  as="a"
  href="https://example.com"
  target="_blank"
>
  Link Button
</Button>
```

## 2. DarkModeBtn Component

A toggle button for switching between dark and light modes with animated visual feedback.

### Props

- `floating`: Boolean to render as a floating button

### Usage

```jsx
<DarkModeBtn />
<DarkModeBtn floating={true} />
```

## 3. Header Component

Navigation header with responsive mobile menu, scrolling detection, and active section highlighting.

### States

- `showMenu`: Controls mobile menu visibility
- `activeSection`: Tracks the current visible section
- `scrolled`: Detects when page has scrolled for visual changes

### Usage

The header automatically renders based on the sections defined in `constraints.js`.

## 4. Portfolio Component

Displays projects with filtering capabilities by technology.

### Features

- Filter projects by technology
- Animated project cards
- Mobile-friendly slider view
- Desktop grid view

### Usage

Projects are automatically rendered from the data in `constraints.js`.

## 5. About Component

Displays personal information with responsive layout for mobile and desktop.

### Features

- Conditional rendering based on screen size
- Animated content entry
- Profile image with decorative elements

## 6. Skills Component

Showcases technical skills with icon grids and carousels.

### Features

- Theme-aware technology icons
- Mobile-friendly carousels
- Desktop grid view
- Animated entry for each skill item

## 7. Contact Component

Shows contact information with interactive elements like copy-to-clipboard.

### Features

- Email copy functionality with animation
- WhatsApp direct link
- Back to top navigation
