const internshipList = document.getElementById("internshipList");
const searchInput = document.getElementById("searchInput");
const domainFilter = document.getElementById("domainFilter");

const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");
const emptyMessage = document.getElementById("emptyMessage");

let internships = [];


// ===============================
// Load Internship JSON
// ===============================

async function loadInternships() {

    try {

        const response = await fetch(
            "internship-records-sample.json"
        );

        if (!response.ok) {
            throw new Error("Unable to load internship data");
        }

        const data = await response.json();

        if (!data.internships ||
            !Array.isArray(data.internships)) {

            throw new Error("Invalid JSON format");
        }

        internships = data.internships;

        loadingMessage.hidden = true;

        createDomainOptions();

        displayInternships(internships);

    } catch (error) {

        console.error(error);

        loadingMessage.hidden = true;

        errorMessage.hidden = false;
    }
}


// ===============================
// Create Domain Options
// ===============================

function createDomainOptions() {

    const domains = [
        ...new Set(
            internships.map(
                internship => internship.domain
            )
        )
    ];

    domains.forEach(domain => {

        const option =
            document.createElement("option");

        option.value = domain;

        option.textContent = domain;

        domainFilter.appendChild(option);
    });
}


// ===============================
// Create Internship Card
// ===============================

function createInternshipCard(internship) {

    const card =
        document.createElement("article");

    card.className = "internship-card";

    const skills =
        internship.skills.join(", ");

    card.innerHTML = `

        <h2>${internship.title}</h2>

        <p class="company">
            Internship ID: ${internship.id}
        </p>

        <span class="domain">
            ${internship.domain}
        </span>

        <p class="details">
            📍 Location: ${internship.location}
        </p>

        <p class="details">
            💼 Mode: ${internship.mode}
        </p>

        <p class="details">
            🛠 Skills: ${skills}
        </p>

        <p class="details">
            👥 Openings: ${internship.openings}
        </p>

        <button
            type="button"
            class="apply-button"
            aria-label="Apply for ${internship.title}"
        >
            Apply Now
        </button>
    `;


    // Apply button event

    const applyButton =
        card.querySelector(".apply-button");


    applyButton.addEventListener(
        "click",
        function () {

            alert(
                `You selected: ${internship.title}`
            );

        }
    );


    return card;
}


// ===============================
// Display Internships
// ===============================

function displayInternships(data) {

    internshipList.innerHTML = "";

    if (data.length === 0) {

        emptyMessage.hidden = false;

        return;
    }

    emptyMessage.hidden = true;


    data.forEach(internship => {

        const card =
            createInternshipCard(internship);

        internshipList.appendChild(card);

    });
}


// ===============================
// Search + Domain Filter
// ===============================

function filterInternships() {

    const searchText = searchInput.value
        .toLowerCase()
        .trim();

    const selectedDomain = domainFilter.value;

    const filtered = internships.filter(internship => {

        // Create searchable text
        const title = internship.title.toLowerCase();
        const domain = internship.domain.toLowerCase();

        const skills = internship.skills.map(skill =>
            skill.toLowerCase()
        );

        // Match complete word
        const searchRegex = new RegExp(
            `\\b${searchText}\\b`,
            "i"
        );

        const matchesSearch =
            searchText === "" ||

            searchRegex.test(title) ||

            searchRegex.test(domain) ||

            skills.some(skill =>
                searchRegex.test(skill)
            );

        const matchesDomain =
            selectedDomain === "all" ||
            internship.domain === selectedDomain;

        return matchesSearch && matchesDomain;
    });

    displayInternships(filtered);
}

// ===============================
// Search Event
// ===============================

searchInput.addEventListener(
    "input",
    filterInternships
);


// ===============================
// Filter Event
// ===============================

domainFilter.addEventListener(
    "change",
    filterInternships
);


// ===============================
// Start Application
// ===============================

loadInternships();