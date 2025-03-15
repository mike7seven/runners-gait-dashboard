# Runners Gait Analysis Dashboard

This React application serves as the web dashboard for the [Runners Gait Analysis](https://github.com/mike7seven/Runners-gait-analysis) project, a comprehensive system for analyzing runners' gait patterns using computer vision and machine learning techniques.

## Overview

The dashboard provides a user-friendly interface for:
- Uploading running videos for analysis
- Viewing detailed gait analysis results
- Comparing running form with similar gait patterns
- Accessing statistics and insights for form improvement

## Features

- **Video Upload**: Drag-and-drop interface for uploading running videos
- **Gait Analysis**: Detailed visualization of running form analysis
- **Comparison Tool**: Find and compare with similar running styles
- **Statistics Dashboard**: View aggregated insights (coming soon)

## Project Structure

```
src/
├── components/
│   ├── Header.js           # Navigation header
│   ├── Footer.js           # Page footer
│   ├── VideoUploader.js    # Video upload component
│   ├── VideoPlayer.js      # Video playback component
│   ├── GaitAnalysisResults.js # Analysis results display
│   └── SimilarityResults.js   # Comparison results
├── pages/
│   ├── HomePage.js         # Landing page
│   ├── UploadPage.js       # Video upload page
│   ├── AnalysisPage.js     # Analysis results page
│   ├── ComparisonPage.js   # Gait comparison page
│   └── StatsPage.js        # Statistics dashboard
├── services/
│   └── api.js              # API communication service
└── App.js                  # Main application component
```

## Technology Stack

- **Frontend**: React, Material-UI
- **State Management**: React Hooks
- **API Communication**: Axios
- **File Handling**: react-dropzone

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/mike7seven/Runners-gait-analysis.git
   cd runners-gait-dashboard
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the dashboard in your browser.

## Backend Integration

This dashboard communicates with the Runners Gait Analysis backend API, which processes videos using:
- MediaPipe pose estimation
- Machine learning algorithms for gait analysis
- Video processing and feature extraction

For backend setup, refer to the [main project repository](https://github.com/mike7seven/Runners-gait-analysis).

## Available Scripts

- `npm start`: Run the development server
- `npm test`: Launch the test runner
- `npm run build`: Build for production
- `npm run eject`: Eject from Create React App

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For more information about the complete Runners Gait Analysis system, visit the [main project repository](https://github.com/mike7seven/Runners-gait-analysis).
