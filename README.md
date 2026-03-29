# YouTube Zoom

A browser extension that lets you zoom in and out on YouTube videos using your mouse wheel.

## Features

- Zoom in/out on YouTube videos with mouse wheel + modifier key
- Configurable zoom sensitivity and zoom limits
- Choose your preferred modifier key (Shift, Alt, Ctrl, or Cmd)
- Settings saved locally

## Setup

Install dependencies:
```bash
pnpm install
```

## Development

Start the development server:
```bash
pnpm dev
```

Or for Firefox:
```bash
pnpm dev:firefox
```

## Build

Build for production:
```bash
pnpm build
```

Or for Firefox:
```bash
pnpm build:firefox
```

Create a zip file:
```bash
pnpm zip
```

## Settings

Configure the zoom behavior in the extension popup:
- **Sensitivity**: How fast the zoom changes (0.01 - 1)
- **Max Zoom**: Maximum zoom level (1 - 10)
- **Min Zoom**: Minimum zoom level (0.1 - 1)
- **Modifier Key**: Which key to hold while scrolling (Shift, Alt, Ctrl, Cmd)
