/* =====================================================
   STEP 1: PASTE YOUR GOOGLE FORM LINK BELOW (inside the quotes)
   Example: "https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform"
   Use the normal "Send > Link" URL. Do not add ?embedded=true
   ===================================================== */

const FEEDBACK_FORM_URL = "PASTE_YOUR_GOOGLE_FORM_LINK_HERE";


/* ================= MOBILE MENU ================= */

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}

// close the mobile menu after tapping a link
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("show");
    });
});


/* ================= EVENT FILTER ================= */

function filterEvents(category) {

    const cards = document.querySelectorAll(".event-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(button => button.classList.remove("active"));

    event.target.classList.add("active");

    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        card.style.display =
            (category === "all" || cardCategory === category) ? "block" : "none";
    });

}


/* ================= EVENT DETAILS ================= */

const events = {

    abhyudaya: {
        category: "FEATURED EVENT",
        title: "Abhyudaya 25.0",
        description: `
            <p>Abhyudaya 25.0 brought together students through activities that celebrated talent, creativity, participation and teamwork.</p>
            <p>The magazine highlights the experiences of students, winners, guests and participants who contributed to making Abhyudaya a memorable event.</p>
        `
    },

    campus: {
        category: "CAMPUS CHRONICLES",
        title: "Campus Chronicles",
        description: `
            <p>Campus Chronicles captures the social and technical experiences taking place throughout the Engineering India journey.</p>
        `
    },

    bhaktisangam: {
        category: "SOCIAL EVENT",
        title: "Bhaktisangam",
        description: `
            <p>Engineering India organized Bhaktisangam, an evening centered around devotion, music and positivity.</p>
            <p>The event created an uplifting atmosphere and brought participants together through shared spiritual and cultural experiences.</p>
        `
    },

    orientation: {
        category: "LEADERSHIP",
        title: "Orientation Programme",
        description: `
            <p>The Central Orientation Programme marked the beginning of an exciting journey for the newly joined coordinators of Engineering India.</p>
            <p>The orientation focused on understanding roles, responsibilities, leadership and teamwork.</p>
        `
    },

    biodiversity: {
        category: "LEARNING JOURNEY",
        title: "Biodiversity Park",
        description: `
            <p>Engineering India organized Prakriti Yatra, a peaceful and refreshing biodiversity walk.</p>
            <p>The activity focused on connecting with nature, teamwork and spending meaningful time together.</p>
        `
    },

    industry: {
        category: "TECHNICAL EVENT",
        title: "Industry Visit on Excello Software",
        description: `
            <p>The industry visit to Excello Software provided participants with an introduction to industry operations and partnerships.</p>
            <p>The visit included interaction with industry professionals and helped bridge the gap between academics and industry.</p>
        `
    },

    seva: {
        category: "COMMUNITY",
        title: "Seva Sankalp 2.0",
        description: `
            <p>Seva Sankalp 2.0 was conducted as part of Engineering India's commitment to social responsibility and community bonding.</p>
            <p>Volunteers spent meaningful time with elders through conversations, music, songs, games and shared activities.</p>
        `
    },

    diwali: {
        category: "SOCIAL EVENT",
        title: "Diwali Milan",
        description: `
            <p>Engineering India celebrated Diwali Milan with warmth, laughter and a festive spirit.</p>
            <p>The event focused on togetherness, shared memories and celebrating the spirit of community.</p>
        `
    }

};


/* ================= OPEN MODAL ================= */

function openEvent(eventName) {

    const data = events[eventName];

    if (!data) return;

    document.getElementById("modalCategory").innerText = data.category;
    document.getElementById("modalTitle").innerText = data.title;
    document.getElementById("modalDescription").innerHTML = data.description;
    document.getElementById("eventModal").style.display = "flex";

}


/* ================= CLOSE MODAL ================= */

function closeEvent() {
    document.getElementById("eventModal").style.display = "none";
}

window.addEventListener("click", function (e) {
    const modal = document.getElementById("eventModal");
    if (e.target === modal) closeEvent();
});


/* ================= ACCORDIONS (HELP + FAQ) ================= */

document.querySelectorAll(".help, .faq").forEach(function (section) {

    const items = section.querySelectorAll(".acc-item, .faq-item");

    function setOpen(item, open) {
        item.classList.toggle("open", open);
        const panel = item.querySelector(".acc-panel");
        panel.style.maxHeight = open ? panel.scrollHeight + "px" : "0";
    }

    items.forEach(function (item) {

        item.querySelector(".acc-btn").addEventListener("click", function () {
            const willOpen = !item.classList.contains("open");
            items.forEach(other => setOpen(other, false));
            setOpen(item, willOpen);
        });

        if (item.classList.contains("open")) setOpen(item, true);

    });

});


/* ================= GOOGLE FORM (FEEDBACK) ================= */

(function () {

    const frame = document.getElementById("feedbackFrame");
    const note = document.getElementById("formNote");
    const link = document.getElementById("formLink");

    const notSet = FEEDBACK_FORM_URL.includes("PASTE_YOUR");

    if (notSet) {
        frame.style.display = "none";
        link.style.display = "none";
        note.style.display = "block";
        note.innerText = "Feedback form coming soon.";
        return;
    }

    // embedded version inside the page
    const embedUrl = FEEDBACK_FORM_URL.includes("?")
        ? FEEDBACK_FORM_URL + "&embedded=true"
        : FEEDBACK_FORM_URL + "?embedded=true";

    frame.src = embedUrl;
    link.href = FEEDBACK_FORM_URL;

})();