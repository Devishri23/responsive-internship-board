# Responsive Internship Board

Project Description

Responsive Internship Board is a simple web application that helps users find and explore internship opportunities. The website is responsive and works on mobile, tablet, and desktop devices.

## Features

* Responsive design for mobile, tablet, and desktop
* Internship listings loaded from JSON
* Search internships by:

  * Title
  * Domain
  * Skills
* Filter internships by domain
* Empty state when no internship matches the search
* Error state when internship data cannot be loaded
* Loading state while data is being fetched
* Keyboard-friendly navigation
* Visible focus indicators
* Accessible form labels
* Apply Now button with internship selection alert

## Technologies Used

* HTML5
* CSS3
* JavaScript
* JSON

## Project Structure

responsive-internship-board/
│
├── index.html
├── style.css
├── script.js
├── internship-records-sample.json
└── README.md

## How to Run

1. Download or clone the project.
2. Open the project folder in Visual Studio Code.
3. Install the **Live Server** extension.
4. Open `index.html`.
5. Click **Go Live**.
6. The project will open in the browser.

## Responsive Testing

The project was tested for different screen sizes:

| Screen Size | Expected Layout            |
| ----------- | -------------------------- |
| 360px       | 1 internship card per row  |
| 768px       | 2 internship cards per row |
| Desktop     | 3 internship cards per row |

## Search Testing

Examples tested:

* `JavaScript` → Frontend Intern
* `SQL` → API Engineering Intern and Data Analyst Intern
* `Figma` → UI/UX Intern
* `Linux` → Security Operations Intern
* `xyz123` → No internships found

## Domain Filter Testing

* UI/UX → UI/UX Intern
* Cyber Security → Security Operations Intern

## Accessibility

The project includes:
* Semantic HTML elements
* Labels for form controls
* Keyboard navigation
* Visible focus indicators
* ARIA labels and status messages
* Responsive layouts

Project Status
Completed
