# U08AngularFrontendDavidDyberg

This project is built in **Angular** and is a continuation of my previous portfolio built in vanilla JavaScript: [u06-vanilla-frontend-DavidDyberg](https://github.com/chas-academy/u06-vanilla-frontend-DavidDyberg).  
It is a personal portfolio app where you can display, edit, add, and delete projects.

## Installation

- Clone this repository
- Run `npm install`

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## For New Developers – Getting Started Quickly

If you're new to this project and want to start contributing, here’s where to look:

1. **`/src/app/pages/projects/`**

   - Start here to understand how projects are listed, routed, and managed.
   - Look at `projects.component.ts` to see how project data is fetched.

2. **`projects.service.ts`**

   - This is the central place for communication with the backend API (GET, POST, DELETE, etc.).

3. **`add-project-modal.component.ts` & `edit-project-modal.component.ts`**

   - These components show how form inputs are handled and emitted.

4. **Routing**

   - Defined in `app.routes.ts`. Learn how navigation between pages works.

5. **Styling**
   - Tailwind CSS is used for styling.
