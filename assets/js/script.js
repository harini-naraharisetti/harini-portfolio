'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


// project modal variables
const projectItems = document.querySelectorAll("[data-filter-item]");
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectModalCloseBtn = document.querySelector("[data-project-modal-close-btn]");
const projectOverlay = document.querySelector("[data-overlay-project]");

const projectModalImg = document.querySelector("[data-project-modal-img]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalCategory = document.querySelector("[data-project-modal-category]");
const projectModalText = document.querySelector("[data-project-modal-text]");

const projectModalFunc = function () {
  projectModalContainer.classList.toggle("active");
  projectOverlay.classList.toggle("active");
}

for (let i = 0; i < projectItems.length; i++) {
  if (projectItems[i].classList.contains("project-item")) {
    projectItems[i].addEventListener("click", function (e) {
      e.preventDefault();

      const img = this.querySelector("img");
      const title = this.querySelector(".project-title");
      const category = this.querySelector(".project-category");

      projectModalImg.src = img.src;
      projectModalImg.alt = img.alt;
      projectModalTitle.innerHTML = title.innerHTML;
      projectModalCategory.innerHTML = category.innerHTML;

      let desc = "";
      const titleText = title.innerHTML.toLowerCase().trim();
      if (titleText.includes("investiq")) {
        desc = "Developed InvestIQ, a FinTech web application. Built a stock market learning platform that helps users understand investments and financial trends, focusing on the frontend design and interactive components.";
      } else if (titleText.includes("crop health")) {
        desc = "Developed an AI-driven millet crop health monitoring system during the Prototype Challenge (secured 3rd prize). Built real-time monitoring tools, weather insights, and advisory systems.";
      } else if (titleText.includes("skill gap") || titleText.includes("rag")) {
        desc = "Built AI systems during the KL Hackathon, including an AI-powered system to identify skill gaps by analyzing user profiles and a Retrieval-Augmented Generation (RAG) based AI solution to process and retrieve relevant knowledge from datasets.";
      } else if (titleText.includes("stack fusion")) {
        desc = "Designed and developed the frontend of a website within one hour using HTML and CSS during the Stack Fusion Hackathon, securing 2nd prize.";
      }
      projectModalText.innerHTML = `<p>${desc}</p>`;

      projectModalFunc();
    });
  }
}

// creative/blog modal activation
const blogItems = document.querySelectorAll(".blog-post-item");
for (let i = 0; i < blogItems.length; i++) {
  blogItems[i].addEventListener("click", function (e) {
    e.preventDefault();

    const img = this.querySelector("img");
    const title = this.querySelector(".blog-item-title");
    const category = this.querySelector(".blog-category");
    const text = this.querySelector(".blog-text");
    const link = this.querySelector("a").getAttribute("href");

    projectModalImg.src = img.src;
    projectModalImg.alt = img.alt;
    projectModalTitle.innerHTML = title.innerHTML;
    projectModalCategory.innerHTML = category.innerHTML;

    let linkButton = "";
    if (link && link !== "#") {
      linkButton = `
        <div style="margin-top: 20px;">
          <a href="${link}" target="_blank" class="form-btn" style="display: inline-flex; align-items: center; gap: 8px; justify-content: center; padding: 10px 20px; font-size: 14px; width: auto; background: var(--border-gradient-onyx); border-radius: 8px; cursor: pointer; color: var(--orange-yellow-crayola);">
            <span>Visit Project</span>
            <ion-icon name="open-outline"></ion-icon>
          </a>
        </div>
      `;
    }

    projectModalText.innerHTML = `<p>${text.innerHTML.trim()}</p>${linkButton}`;

    projectModalFunc();
  });
}

if (projectModalCloseBtn) {
  projectModalCloseBtn.addEventListener("click", projectModalFunc);
}
if (projectOverlay) {
  projectOverlay.addEventListener("click", projectModalFunc);
}

// contact form submit event
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector("[data-form-btn]");
    const btnText = submitBtn.querySelector("span");
    const originalText = btnText.innerHTML;
    const accessKeyInput = this.querySelector('input[name="access_key"]');
    
    btnText.innerHTML = "Sending...";
    submitBtn.setAttribute("disabled", "");
    
    // Check if the user has entered their real Web3Forms access key
    if (!accessKeyInput || accessKeyInput.value === "YOUR_ACCESS_KEY_HERE") {
      // Simulate form submission for preview / local testing
      setTimeout(() => {
        alert("Success! Your message has been sent. Harini will get back to you soon!");
        form.reset();
        btnText.innerHTML = originalText;
        submitBtn.setAttribute("disabled", "");
      }, 1500);
    } else {
      // Send real email via Web3Forms API
      const formData = new FormData(form);
      
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert("Success! Your message has been sent. Harini will get back to you soon!");
          form.reset();
        } else {
          alert("Oops! Something went wrong: " + data.message);
        }
        btnText.innerHTML = originalText;
        submitBtn.setAttribute("disabled", "");
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Oops! There was a network error. Please try again later.");
        btnText.innerHTML = originalText;
        submitBtn.setAttribute("disabled", "");
      });
    }
  });
}

// preloader fadeout event
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("loaded");
    }, 600); // smooth cinematic transition buffer
  }
});

// back to top variables
const backToTopBtn = document.querySelector("[data-back-to-top]");

if (backToTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 300) {
      backToTopBtn.classList.add("active");
    } else {
      backToTopBtn.classList.remove("active");
    }
  });

  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Theme toggle functionality
const themeBtn = document.querySelector("[data-theme-btn]");

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light-mode");
}

if (themeBtn) {
  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
}