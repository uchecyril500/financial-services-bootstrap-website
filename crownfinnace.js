// === Navbar active state on click ===
const nav = document.getElementById("mainNav");
if (nav) {
  const links = nav.querySelectorAll(".nav-link:not(.dropdown-toggle)");

  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

// === "Read more" buttons – simple info popup ===
const readMoreButtons = document.querySelectorAll(".read-more");

readMoreButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const productName = btn.dataset.product || "this product";
    alert(`More information about: ${productName}\n\nIn a real project this would open a detailed page or modal.`);
  });
});

// === Request a Call Back form ===
const callbackForm = document.getElementById("callbackForm");
const callbackMessage = document.getElementById("callbackMessage");

if (callbackForm && callbackMessage) {
  callbackForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const topic = document.getElementById("discussionTopic").value;
    const phone = document.getElementById("phoneNumber").value.trim();

    if (!name || !topic || !phone) {
      alert("Please fill in your name, topic and phone number.");
      return;
    }

    // very simple phone check
    if (phone.length < 7) {
      alert("Please enter a valid phone number.");
      return;
    }

    // Show success alert
    callbackMessage.classList.remove("d-none");

    // Reset form
    callbackForm.reset();

    // Hide message again after a few seconds
    setTimeout(() => {
      callbackMessage.classList.add("d-none");
    }, 4000);
  });
}
