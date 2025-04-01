# CLAUDE.md - Guidance for agentic coding

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run generate` - Generate static site

## Tests
- Tests use Vue Test Utils with Jest
- Run tests: `npm test` (add to package.json scripts)
- Run single test: `npm test -- -t 'ComponentName'`

## Code Style
- Use Vue 3 Composition API with `<script setup>`
- 2-space indentation, single quotes, no trailing commas
- PascalCase for component filenames, camelCase for variables
- Group imports: external libraries first, then internal modules
- Document props with type validation when appropriate
- Handle errors with try/catch and store.toastError() for notifications

## Component Structure
- Organize components by feature in designated directories
- Follow existing patterns when creating new components
- Components should be single-responsibility focused
- Use FormKit for forms following existing validation patterns