# SCIENTIFIC++ Calculator ✨

Precision meets elegance in this modern scientific calculator. Built with **React** and **Tailwind CSS**, it offers both fundamental arithmetic and advanced scientific functionalities in a responsive web interface.

## Key Features 🚀

  * **Comprehensive Operations:**
      * **Basic:** `+`, `-`, `×`, `÷`, `%` (modulo)
      * **Scientific:** `sin`, `cos`, `tan`, `asin`, `acos`, `atan`, `log`, `ln`, `sqrt`, `x²`, `x!`, `1/x`, `eˣ`, `|x|`, `π`, `e`
  * **Unit Toggle:** Seamlessly switch between **Radians (RAD)** and **Degrees (DEG)** for trigonometric functions.
  * **Intuitive Controls:** Dedicated buttons for `AC` (All Clear) and `C` (Clear) for easy input management.
  * **Responsive Design:** Flawlessly adapts to various screen sizes.
  * **Robust Error Handling:** Displays "Error" for invalid operations (e.g., division by zero, invalid factorials).

## Technologies 🛠️

  * **Frontend:** React
  * **Build Tool:** Vite
  * **Styling:** Tailwind CSS
  * **Routing:** React Router DOM
  * **Icons:** Lucide React
  * **Utilities:** clsx, tailwind-merge, Radix UI

## Getting Started ⚡

### Prerequisites

  * Node.js (\>= 20.0.0)
  * npm (or yarn)

### Installation

```bash
# Clone the repository
git clone <your-repository-url>
cd calculator

# Install dependencies
npm install # or yarn install
```

### Run Locally

```bash
# Start development server
npm run dev # or yarn dev
```

Your app will be live at `http://localhost:5173`.

### Build for Production

```bash
# Create optimized production build
npm run build # or yarn build
```

### Preview Production Build

```bash
# Serve the production build
npm run preview # or yarn preview
```

## Project Structure 📁

  * `src/`: Core application source code.
      * `components/`: Reusable UI components, including `Calculator.jsx` (the heart of the app).
      * `pages/`: Defines main views like `Index.jsx` and `NotFound.jsx`.
      * `lib/`: Utility functions.
  * `public/`: Static assets.
  * `package.json`: Project dependencies and scripts.

## License 📄

This project is licensed under the **MIT License**.