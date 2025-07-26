
fetch('data/publications_NLP.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('publications-list_nlp').innerHTML = data;

        document.querySelectorAll('#publications-list_nlp li').forEach(li => {
            li.addEventListener('click', function (e) {
                const abstract = this.querySelector('.abstract');
                if (abstract) abstract.style.display = abstract.style.display === 'none' ? 'block' : 'none';
                e.stopPropagation();
            });
        });
    })
    .catch(error => {
        console.error('Failed to load publications:', error);
    });
fetch('data/publications_ML.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('publications-list_ML').innerHTML = data;

        // Enable abstract toggling on click
        document.querySelectorAll('#publications-list_ML li').forEach(li => {
            li.addEventListener('click', function (e) {
                const abstract = this.querySelector('.abstract');
                if (abstract) {
                    abstract.style.display = abstract.style.display === 'none' ? 'block' : 'none';
                }
                e.stopPropagation();
            });
        });
    })
    .catch(error => {
        console.error('Error loading publications:', error);
    });

fetch('data/under_review.txt')
					.then(response => response.text())
					.then(data => {
						document.getElementById('under_review').innerHTML = data;

						// Toggle abstract on click
						document.querySelectorAll('#under_review li').forEach(li => {
							li.addEventListener('click', function (e) {
								const abstract = this.querySelector('.abstract');
								if (abstract) {
									abstract.style.display = abstract.style.display === 'none' ? 'block' : 'none';
								}
								e.stopPropagation();
							});
						});
					})
					.catch(err => {
						console.error('Failed to load publications:', err);
					});

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}


// for publication abstract 

document.addEventListener("DOMContentLoaded", function () {
    const publications = document.querySelectorAll(".teams li");

    publications.forEach((publication) => {
        publication.addEventListener("mouseenter", function () {
            const abstract = publication.querySelector(".abstract");
            if (abstract) {
                abstract.style.display = "block";
            }
        });

        publication.addEventListener("mouseleave", function () {
            const abstract = publication.querySelector(".abstract");
            if (abstract) {
                abstract.style.display = "none";
            }
        });
    });
});



$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Teacher", "Researcher", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Teacher", "Researcher", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("body").value;
    window.open('mailto:shahidulshakib034@gmail.com?' + '&subject=' + subject + '&body=' + body);
}

async function Ongoing_Research() {
    // Read the file content
    try {
        const response = await fetch('data/Ongoing-Research.txt');  // Replace with your file path
        const text = await response.text();

        // Split the text file into sentences using newlines
        const sentences = text.split('\n').filter(line => line.trim() !== '');

        // Reference to the list (ol) element in the HTML
        const researchList = document.getElementById('Ongoing-Research');

        // Create list items and append them to the ol element
        sentences.forEach(sentence => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<b>${sentence}</b><br><br>`;
            researchList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

// This function will read the content from the text file and display it
async function displayProjects() {
    // Read the file content
    try {
        const response = await fetch('data/projects.txt');  // Replace with your file path
        const text = await response.text();

        // Split the text file into individual project details using newlines
        const projects = text.split('\n').filter(line => line.trim() !== '');

        // Reference to the list (ol) element in the HTML
        const projectList = document.getElementById('projects-list');

        // Loop through each project line and dynamically add to the HTML list
        projects.forEach(project => {
            // Split each project line into title, link, and description
            const [title, githubLink, description] = project.split('|').map(item => item.trim());

            // Create list item for each project
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <b>${title}</b>
                <a href="${githubLink}" target="_blank" style="color: #03bafc;">🔗Github</a>
                <br>
                🎯<i>${description}</i>
                <br><br>
            `;
            projectList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error reading file:', error);
    }
}


// Call the function to load and display projects when the page loads
window.onload = function () {
    Ongoing_Research();  // Display Ongoing Research
    displayProjects();         // Display My Projects
    displayUnderReview();
    publications_NLP();  // Display NLP Publications
}

