# Inuberry Interactive Slideshow Viewer

## Apprenticeship Task Report

**Apprenticeship:** Mozahidul Haque Shoyeb

## Live Demo

The current prototype is deployed on Vercel and can be accessed here:

🔗 **Live Application:** https://inuberry-simple-slideshow.vercel.app/

> **Note:** This version demonstrates the frontend slideshow prototype using manually converted slide images. Automatic PPTX upload and conversion were part of the planned architecture but were not completed within the available time.

---

## Task Overview

As part of my first task during my apprenticeship at **Inuberry**, I was provided with several PowerPoint (`.pptx`) presentations. The assigned task was:

> **"Redesign the presentations to make them more visually appealing and create interactive web versions of them."**

This project documents my approach, implementation, challenges, and the lessons I learned throughout the process.

---

# Project Approach

I divided the task into two major parts:

1. **Presentation Redesign**
2. **Interactive Web-Based Slideshow**

I first redesigned some of the provided presentation slides to improve their visual appearance while maintaining their original purpose and content.

After that, I began working on an interactive web version of the presentations.

---

# Initial Idea

My initial goal was to build a custom React application capable of:

* Reading PowerPoint (`.pptx`) files directly
* Displaying slides inside a web application
* Providing presentation controls such as:

  * Fullscreen mode
  * Keyboard navigation
  * Mouse navigation
  * Slide thumbnails
  * Progress indicator
  * Responsive presentation viewer

Since the project was intended to be frontend-only using **React.js**, I initially attempted to load and display PowerPoint files directly within the browser.

---

# Research & Findings

During development, I discovered that React alone cannot reliably render PowerPoint (`.pptx`) files in a browser.

A PowerPoint file is not simply an image or PDF. It contains:

* XML documents
* Embedded media
* Fonts
* Animations
* Layout definitions
* Relationships between multiple internal files

Rendering these directly in React would require a complete PowerPoint parser, which is not practical for a frontend-only application.

---

# Alternative Solution

After researching different approaches, I found that a backend service is required.

My planned architecture became:

```
React Frontend
       │
       ▼
Python Backend
       │
       ▼
CloudConvert API
       │
       ▼
Convert PPTX → Images
       │
       ▼
React Slideshow Viewer
```

The backend would:

* Receive the uploaded PowerPoint
* Send it to a conversion service (CloudConvert)
* Convert each slide into images
* Return the generated images to the frontend

The React application would then display these images as an interactive slideshow.

---

# Time Constraint

Due to the limited time available for the task, I was unable to complete the full backend integration and automatic PowerPoint conversion workflow.

At the same time, I also needed to spend significant time redesigning the presentation slides themselves.

Because of these constraints, I implemented a simpler manual workflow.

---

# Current Implementation

The current version of the project displays presentations by using images that were manually converted from PowerPoint slides.

The slideshow application includes:

* Professional landing page
* Automatic presentation discovery from folders
* Interactive slideshow viewer
* Fullscreen mode
* Keyboard navigation
* Mouse navigation
* Thumbnail navigation
* Progress bar
* Responsive layout
* Smooth slide transitions

Each presentation is organized as a folder containing slide images, allowing the viewer to load presentations dynamically without requiring a database.

---

# Technologies Used

### Frontend

* React
* TypeScript
* Vite
* CSS
* Framer Motion

### Planned Backend

* Python

### Planned Conversion Service

* CloudConvert API

---

# Lessons Learned

This task helped me learn several new concepts that I had not previously worked with.

Some of the key lessons include:

* Understanding the internal structure of PowerPoint files.
* Learning the limitations of frontend-only applications when handling `.pptx` files.
* Researching APIs and cloud-based document conversion services.
* Exploring the role of backend processing in web applications.
* Designing a scalable slideshow architecture.
* Improving my React project organization and component structure.
* Creating a responsive presentation viewer with interactive controls.

---

# Reflection

Although I could not complete every feature I initially planned within the available time, I believe this project represents a solid first step toward the complete solution.

Rather than abandoning the task when I encountered technical limitations, I researched alternative approaches, experimented with different solutions, and developed a working prototype that demonstrates the core slideshow functionality.

This experience gave me valuable insight into problem-solving, software architecture, and the importance of choosing appropriate technologies for different requirements.

It also introduced me to several new tools and concepts that I look forward to exploring further throughout my apprenticeship.

---

# Future Improvements

If additional time is available, I plan to extend the project with:

* Automatic PowerPoint upload
* Backend-powered PPTX conversion
* Drag-and-drop presentation upload
* PDF support
* Speaker notes
* Presentation sharing
* Search functionality
* Presentation management dashboard
* Cloud storage integration
* Animation support

---

Thank you for reviewing my submission.
