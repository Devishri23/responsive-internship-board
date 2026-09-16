# Responsive Internship Board

A responsive and accessible internship listing interface built using HTML, CSS, and JavaScript without using any framework.

Project Overview

The Responsive Internship Board allows users to search and filter internship opportunities by keyword and domain.

The interface is designed to work smoothly on:

* Mobile
* Tablet
* Desktop

Internship information is loaded dynamically from a JSON file.

Features

*  Search internships by title, domain, location, mode, or skills
*  Filter internships by domain
*  Responsive design for mobile, tablet, and desktop
*  Accessible form labels and keyboard navigation
*  Dynamic internship cards using JavaScript
*  Internship data loaded from JSON
*  Error state when internship data cannot be loaded
*  Empty state when no internship matches the search
*  Keyboard-friendly controls

Technologies Used

* HTML5
* CSS3
* JavaScript
* JSON

No framework or external UI library is used.

Project Structure

responsive-internship-board/
│
├── index.html
├── style.css
├── script.js
├── internships.json
└── README.md
```

Internship Data

The project currently contains internship opportunities in domains such as:

* Full Stack Development
* UI/UX
* Data Analytics
* Cyber Security

The internship data is stored in `internships.json` and rendered dynamically using JavaScript.

Accessibility

The project includes accessibility-focused features such as:

* Semantic HTML elements
* Proper form labels
* Keyboard navigation
* Visible focus indicators
* `aria-live` for dynamic results
* `role="alert"` for error messages
* Accessible buttons


How to Run Locally

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Open `index.html` using Live Server.
4. Search and filter the internship listings.

Live Server is recommended because the project loads internship data using JavaScript `fetch()` from `internships.json`.

Live Demo

Add your deployed GitHub Pages URL here:

YOUR-LIVE-URL-HERE

Built as a responsive frontend development practice project.
