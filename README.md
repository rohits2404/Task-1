SCIENTIFIC++ Calculator

A modern, responsive scientific calculator web application built with React and Tailwind CSS, featuring both basic arithmetic and advanced scientific functions.

Features
Basic Arithmetic Operations: Addition, subtraction, multiplication, division, modulo.

Scientific Functions: Sine (sin), Cosine (cos), Tangent (tan), Arc Sine (asin), Arc Cosine (acos), Arc Tangent (atan), Logarithm (log), Natural Logarithm (ln), Square Root (sqrt), Square (x²), Factorial (x!), Inverse (1/x), Exponent (eˣ), Absolute Value (|x|), Pi (π), and Euler's number (e).

Mode Toggle: Switch between Radians (RAD) and Degrees (DEG) for trigonometric calculations.

Memory Functionality: Basic memory storage (although not explicitly shown in buttons, the state variable memory exists).

Clear Functions: All Clear (AC) and Clear (C) buttons.

Responsive Design: Optimized for various screen sizes using Tailwind CSS.

Error Handling: Displays "Error" for invalid operations (e.g., division by zero, factorial of negative numbers).

Number Formatting: Formats large numbers into exponential notation and handles decimal precision.

Technologies Used
React: A JavaScript library for building user interfaces.

Vite: A fast build tool for modern web projects.

Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.

React Router DOM: For declarative routing in React applications.

clsx & tailwind-merge: Utilities for conditionally joining CSS class names and merging Tailwind CSS classes.

Lucide React: A collection of open-source icons for React.

Radix UI (react-slot): For building accessible UI components.

Installation
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js (>= 20.0.0)

npm (>= 8.0.0) or yarn

Setup
Clone the repository:

Bash

git clone <your-repository-url>
cd calculator
(Replace <your-repository-url> with the actual URL of your repository if available)

Install dependencies:

Bash

npm install
# or
yarn install
Usage
Development Server
To run the project in development mode:

Bash

npm run dev
# or
yarn dev
This will start a development server, usually at http://localhost:5173, and the application will automatically reload upon code changes.

Build for Production
To build the application for production:

Bash

npm run build
# or
yarn build
This command compiles and bundles the application into the dist directory.

Preview Production Build
To preview the built application:

Bash

npm run preview
# or
yarn preview
This will serve the static files from the dist directory.

Project Structure
public/: Contains static assets like icon.png and vite.svg.

src/: Main source code directory.

App.jsx: Main application component responsible for routing.

index.css: Main CSS file importing Tailwind CSS.

main.jsx: Entry point for the React application.

components/: Reusable React components.

Calculator.jsx: The core calculator logic and UI.

ui/button.jsx: Custom button component using Radix UI and Tailwind CSS utilities.

lib/utils.js: Utility functions (e.g., cn for class name merging).

pages/: Page-level components.

Index.jsx: The main landing page displaying the calculator.

NotFound.jsx: Page displayed for non-existent routes.

index.html: The main HTML file.

package.json: Project metadata and dependencies.

package-lock.json: Records the exact dependency tree.

components.json: Configuration for shadcn/ui components.

eslint.config.js: ESLint configuration for code linting.

jsconfig.json: JavaScript language service configuration.

vite.config.js: Vite build tool configuration.

.gitignore: Specifies intentionally untracked files to ignore.