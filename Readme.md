# Udemy-Clone:  [LIVE](https://udemy-e-learning.netlify.app/)

A feature-rich Udemy Clone built using React with Vite. This project replicates core functionalities of the Udemy platform, offering an interactive and responsive user interface for online course browsing, purchase, and management.

---

### Cart Route

![Course Route Screenshot](./frontend/src/assets/responsiveUdem.png)

## Features

- User-friendly interface inspired by Udemy's design
- Course browsing and search functionality
- Responsive layout for desktop and mobile devices
- Dynamic routing for course details
- State management using modern React patterns

---

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. [Download Node.js](https://nodejs.org/)
- **Vite**: This project is built with Vite, which will be installed as part of dependencies.

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:utkarsh032/Udemy.git
   cd udemy-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Project

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

### Building for Production

To create an optimized build for deployment:

```bash
npm run build
```

Serve the `dist` folder using any static file server.

---

## Home Page UI Preview

![Home Page Preview](./frontend/src/assets/HomePage.png)

Add a screenshot of your homepage UI in the `path-to-homepage-image.png` location or update the path with the actual image location.

---

### . **Course Route**

- Defined a dedicated route for accessing course details.
- Ensured proper integration with the backend to fetch and display course data.

### . **Course Navigation (CourseNav)**

- Created a left sidebar for navigation through course sections.
- Included responsive design for better usability.

### . **Course Video Player**

- Integrated a video player for streaming course videos.
- Added basic playback controls like play, pause, and seek.

### . **Course Content Section**

- Designed a right sidebar to display the course content.
- Implemented a list view for easy access to lessons and materials.

### . **Course Overview**

- Developed an overview section to provide a summary of the course.
- Displayed key details such as instructor, duration, and prerequisites.

## Sample Data

Included sample data for:

- Course sections
- Video URLs
- Lesson details

## Screenshots

### Course Route

![Course Route Screenshot](./frontend/src/assets/coursePlayer.png)

### Cart Route

![Course Route Screenshot](./frontend/src/assets/cart.png)
