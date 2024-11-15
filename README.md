# Food Guide Service

This project provides a responsive, scalable application for generating optimal daily menus for individuals and families to encourage healthy eating habits.

### Demo

The deployed version is available at [GitHub Pages](https://mahdin75.github.io/signal).

## Features

The application provides:

- **User Daily Menu:** A single-user view for an optimal daily menu to promote individual health.
- **Family Daily Menu:** A family view with a breakdown for each member, allowing personalized daily recommendations.

This project is an MVP (Minimum Viable Product) and does not include additional features like grocery delivery integration or personalized dietary preferences, which may be added in future updates.

## UI/UX Design

The UI/UX designs for this project are available on Figma. You can view them [here](https://www.figma.com/design/4B2SAEnDNFKhkJQYVkUZO7/Signal).

## Demo Walkthroughs

### How to Login and Logout
![How to login and logout](public/support/login_logout.gif)

### Update User Settings
![How to update user settings](public/support/user-settings-menu.gif)

### Add a Family Member in Settings
![How to add family member in settings](public/support/family-settings-menu.gif)

### Show Daily Food Menu
![Show daily food menu](public/support/food-menu.gif)

## Data

The app loads CSV data directly on the client side, located in the `public/data` folder.

## Getting Started

This project was bootstrapped with Create React App. Follow these instructions to get started.

### Prerequisites

- **Node.js** and **npm**: Ensure you have these installed for dependency management.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mahdin75/signal.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

In the project directory, you can run:

- **Start Development Server**:
  ```bash
  npm start
  ```
  Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- **Run Tests**:
  ```bash
  npm test
  ```
  Launches the test runner in interactive watch mode.

- **Build for Production**:
  ```bash
  npm run build
  ```
  Builds the app for production to the `build` folder. The app is minified and optimized for best performance.

- **Eject Configuration** (optional):
  ```bash
  npm run eject
  ```
  Copies configuration files for full control over build settings. Note: this action is irreversible.

## Technical Details

- **React**: Built using React with TypeScript and functional components, utilizing hooks for state and effect management.
- **Responsive Design**: Uses modern HTML and CSS for a responsive, accessible user experience.
- **Automated Testing**: Tests implemented for key components to validate core functionality.
- **DevOps and Security**: Incorporates DevOps practices for streamlined deployment and basic security.
