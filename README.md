# Responsive Internship Board

## Project Description

Responsive Internship Board is a simple and accessible web application that helps users find and explore internship opportunities.

The website is responsive and works across mobile, tablet, and desktop devices.

Internship data is loaded dynamically from a JSON file using JavaScript.

## Live Demo

[View Live Project](https://devishri23.github.io/responsive-internship-board/)

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
* Apply Now / View Internship interaction with internship selection alert

## Technologies Used

* HTML5
* CSS3
* JavaScript
* JSON

No framework or external UI library is used.

## Project Structure

```text
responsive-internship-board/
│
├── index.html
├── style.css
├── script.js
├── internship-records-sample.json
├── screenshots/
│   ├── desktop.png
│   ├── mobile.png
│   └── search-filter.png
└── README.md
```

## How to Run

1. Download or clone the project.
2. Open the project folder in Visual Studio Code.
3. Install the **Live Server** extension.
4. Open `index.html`.
5. Click **Go Live**.
6. The project will open in the browser.

Live Server is recommended because the project loads internship data from the JSON file using JavaScript `fetch()`.

## Responsive Testing

The project was tested for different screen sizes:

| Screen Size | Layout                     |
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

* `UI/UX` → UI/UX Intern
* `Cyber Security` → Security Operations Intern
* `Full Stack Development` → Frontend Intern and API Engineering Intern
* `Data Analytics` → Data Analyst Intern

## Accessibility

The project includes:

* Semantic HTML elements
* Labels for form controls
* Keyboard navigation
* Visible focus indicators
* ARIA labels and status messages
* Accessible buttons
* Responsive layouts


## Project Status

**Completed**

The project implements responsive layouts, JSON-based internship data, search and domain filtering, empty and error states, loading handling, and accessibility-focused interactions.

## Author

**Devishri Motekar**
