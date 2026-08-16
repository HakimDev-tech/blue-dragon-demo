/* ========================================
   Blue Dragon Plumbing — V2 Scripts
   Minimal vanilla JavaScript
   ======================================== */

(function () {
  "use strict";

  // ----------------------------------------
  // Mobile Navigation
  // ----------------------------------------
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      mainNav.classList.toggle("nav--open");
    });

    // Close nav when clicking a link
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.setAttribute("aria-expanded", "false");
        mainNav.classList.remove("nav--open");
      });
    });
  }

  // ----------------------------------------
  // Smooth scroll for anchor links
  // ----------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ----------------------------------------
  // Contact Form
  // ----------------------------------------
  const form = document.getElementById("service-form");
  const successMessage = document.getElementById("form-success");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Clear previous custom validation
      form.querySelectorAll(".error-message").forEach(function (el) {
        el.remove();
      });
      form.querySelectorAll("[aria-invalid='true']").forEach(function (el) {
        el.removeAttribute("aria-invalid");
      });

      let isValid = true;

      // Validate required fields
      const requiredFields = form.querySelectorAll("[required]");
      requiredFields.forEach(function (field) {
        if (!field.value.trim()) {
          isValid = false;
          field.setAttribute("aria-invalid", "true");

          const error = document.createElement("span");
          error.className = "error-message";
          error.textContent = "This field is required.";
          error.style.color = "#c45c26";
          error.style.fontSize = "0.8125rem";
          error.style.marginTop = "0.25rem";
          error.style.display = "block";
          field.parentNode.appendChild(error);
        }
      });

      // Validate phone format (basic)
      const phoneField = form.querySelector("#phone");
      if (phoneField && phoneField.value.trim()) {
        const phonePattern = /^[\d\s\-\(\)\+\.]{7,}$/;
        if (!phonePattern.test(phoneField.value.trim())) {
          isValid = false;
          phoneField.setAttribute("aria-invalid", "true");

          const error = document.createElement("span");
          error.className = "error-message";
          error.textContent = "Please enter a valid phone number.";
          error.style.color = "#c45c26";
          error.style.fontSize = "0.8125rem";
          error.style.marginTop = "0.25rem";
          error.style.display = "block";
          phoneField.parentNode.appendChild(error);
        }
      }

      if (isValid) {
        // Show success message
        form.reset();
        successMessage.hidden = false;
        successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });

        // Hide success after 10 seconds
        setTimeout(function () {
          successMessage.hidden = true;
        }, 10000);
      }
    });
  }

  // ----------------------------------------
  // Current year in footer (optional)
  // ----------------------------------------
  const yearSpan = document.querySelector(".current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
})();
