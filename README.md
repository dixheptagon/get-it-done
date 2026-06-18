# Get In Done 🎯

A modern, responsive todo application built with Next.js and React. Stay productive with intuitive task management, progress tracking, and time logging features.

## ✨ Features

- **Responsive Design** - Seamless experience on desktop and mobile devices
- **Todo Management** - Create, edit, and delete tasks with detailed views
- **Time Tracking** - Log and track hours spent on tasks
- **Weekly Calendar** - Visualize your schedule at a glance
- **Progress Bar** - Monitor your productivity and task completion
- **Current Time Tracker** - Keep track of time spent on active tasks
- **Mobile-Optimized UI** - Dedicated mobile and desktop components for optimal UX
- **Form Validation** - Robust form handling with Zod and React Hook Form
- **State Management** - Efficient global state using Zustand

## 🛠 Tech Stack

- **Framework**: [Next.js 16.2.6](https://nextjs.org) with App Router
- **UI Library**: [React 19.2.4](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) with custom animations
- **State Management**: [Zustand 5.0.14](https://zustand-demo.pmnd.rs/)
- **Form Management**: [React Hook Form 7.77.0](https://react-hook-form.com) + [Zod 4.4.3](https://zod.dev)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com)
- **Icons**: [Phosphor Icons](https://phosphoricons.com) + [React Icons](https://react-icons.github.io/react-icons)
- **Utilities**: [date-fns](https://date-fns.org) for date manipulation, [Embla Carousel](https://www.embla-carousel.com) for carousels
- **Development**: ESLint, Prettier with Tailwind CSS plugin

## 📁 Project Structure

```
get-in-done/
├── app/                    # Next.js App Router
├── components/             # Reusable React components
│   ├── footer/            # Footer components
│   ├── infobar/           # Info bar with progress tracking
│   ├── todoPanel/         # Main todo panel components
│   │   └── todoDetail/    # Detailed todo views
│   └── ui/                # Base UI components
├── constants/             # Application constants
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and helpers
├── public/                # Static assets
├── store/                 # Zustand store definitions
├── styles/                # Global styles
├── types/                 # TypeScript type definitions
└── config files           # Next.js, TypeScript, ESLint config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or compatible
- pnpm (or npm/yarn/bun)

### Installation

1. Clone or navigate to the project directory:

```bash
cd get-in-done
```

2. Install dependencies:

```bash
pnpm install
# or: npm install / yarn install / bun install / pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

The app will automatically reload as you edit files thanks to Next.js Fast Refresh.

## 📜 Available Scripts

- **`pnpm dev`** - Start development server
- **`pnpm build`** - Build for production
- **`pnpm start`** - Start production server
- **`pnpm lint`** - Run ESLint to check code quality

## 🎨 Key Components

### TodoPanel

Main container for todo management with desktop and mobile-specific views.

### InfoBar

Displays todo statistics, weekly calendar, and progress tracking.

### Footer

Contains mobile navigation and desktop todo form panel for quick task creation.

### TodoDetail

Detailed view of individual todos with options to edit, delete, and manage hours logged.

### UI Components

Base building blocks including buttons, calendars, carousels, dialogs, and overlays.

## 🔧 Customization

### Styling

- Global styles: `styles/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- PostCSS: `postcss.config.mjs`

### State Management

- Todo store: `store/useTodoStore.ts`
- UI state store: `store/useTodoUIStore.ts`

### Type Definitions

- Todo schema: `types/todoSchema.ts`

## 📝 Notes for Developers

- Components follow a desktop/mobile responsive pattern using dedicated component files
- Reusable UI components are located in `components/ui/`
- Utility functions are organized in `lib/` by functionality
- Custom hooks handle component logic (e.g., time tracking, height calculations)

## 🚧 Future Enhancements

- [ ] Backend integration for data persistence
- [ ] User authentication
- [ ] Cloud sync across devices
- [ ] Recurring tasks
- [ ] Task categories/tags
- [ ] Notifications and reminders
- [ ] Export task data

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 📄 License

This project is private and for practice purposes.
