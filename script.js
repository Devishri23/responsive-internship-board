// ========================================
// Get HTML Elements
// ========================================

const internshipList = document.getElementById("internshipList");
const resultCount = document.getElementById("resultCount");

const searchInput = document.getElementById("searchInput");
const domainFilter = document.getElementById("domainFilter");
const searchForm = document.getElementById("searchForm");

const emptyMessage = document.getElementById("emptyMessage");
const errorMessage = document.getElementById("errorMessage");


// ========================================
// Internship Data
// ========================================

let internships = [];


// ========================================
// Load Data from JSON
// ========================================

async function loadInternships() {

    try {

        const response = await fetch("internship-records-sample.json");

        // Check JSON file response
        if (!response.ok) {
            throw new Error("JSON file could not be loaded");
        }

        const data = await response.json();

        // Get internships array from JSON object
        internships = data.internships;

        // Render internships
        renderInternships(internships);

    } catch (error) {

        console.error("Error:", error);

        errorMessage.hidden = false;

        errorMessage.textContent =
            "Unable to load internships. Please try again.";

        resultCount.textContent =
            "Unable to load internships.";
    }
}


// ========================================
// Render Internship Cards
// ========================================

function renderInternships(data) {

    // Clear previous cards
    internshipList.innerHTML = "";

    // Hide messages
    emptyMessage.hidden = true;
    errorMessage.hidden = true;

    // Update result count
    resultCount.textContent =
        `${data.length} internships found`;


    // Show empty state when no result is found
    if (data.length === 0) {

        emptyMessage.hidden = false;

        return;
    }


    // Create internship cards
    data.forEach(function (internship) {

        const card = document.createElement("article");

        card.className = "internship-card";


        // Create card heading
        const title = document.createElement("h3");

        title.textContent = internship.title;


        // Domain
        const domain = document.createElement("span");

        domain.className = "domain";

        domain.textContent = internship.domain;


        // Details
        const mode = document.createElement("p");

        mode.innerHTML =
            `<strong>Mode:</strong> ${internship.mode}`;


        const location = document.createElement("p");

        location.innerHTML =
            `<strong>Location:</strong> ${internship.location}`;


        const skills = document.createElement("p");

        skills.innerHTML =
            `<strong>Skills:</strong> ${internship.skills.join(", ")}`;


        const openings = document.createElement("p");

        openings.innerHTML =
            `<strong>Openings:</strong> ${internship.openings}`;


        const id = document.createElement("p");

        id.innerHTML =
            `<strong>ID:</strong> ${internship.id}`;


        // View button
        const viewButton = document.createElement("button");

        viewButton.type = "button";

        viewButton.className = "apply-button";

        viewButton.textContent = "View Internship";


        // Keyboard and click accessible interaction
        viewButton.addEventListener("click", function () {

            alert(
                `Internship: ${internship.title}\n` +
                `Domain: ${internship.domain}\n` +
                `Mode: ${internship.mode}\n` +
                `Location: ${internship.location}`
            );

        });


        // Add elements to card
        card.appendChild(title);
        card.appendChild(domain);
        card.appendChild(mode);
        card.appendChild(location);
        card.appendChild(skills);
        card.appendChild(openings);
        card.appendChild(id);
        card.appendChild(viewButton);


        // Add card to page
        internshipList.appendChild(card);

    });
}


// ========================================
// Search and Filter
// ========================================

function filterInternships() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    const selectedDomain =
        domainFilter.value;


    const filteredData = internships.filter(function (internship) {

        const skillsText =
            internship.skills.join(" ");


        const searchableText = `
            ${internship.id}
            ${internship.title}
            ${internship.domain}
            ${internship.mode}
            ${internship.location}
            ${skillsText}
        `.toLowerCase();


        // Search condition
        const matchesSearch =
            searchableText.includes(searchText);


        // Domain condition
        const matchesDomain =
            selectedDomain === "all" ||
            internship.domain === selectedDomain;


        return matchesSearch && matchesDomain;

    });


    renderInternships(filteredData);
}


// ========================================
// Search Form Submit
// ========================================

searchForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    filterInternships();

});


// ========================================
// Live Search
// ========================================

searchInput.addEventListener("input", function () {

    filterInternships();

});


// ========================================
// Domain Filter
// ========================================

domainFilter.addEventListener("change", function () {

    filterInternships();

});


// ========================================
// Start Application
// ========================================

loadInternships();
