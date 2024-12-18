const modal = document.getElementById("reviewModal");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

function submitReview() {
  const name = document.getElementById("name").value;
  const review = document.getElementById("review").value;

  if (name && review) {
    alert("Thank you for your review, " + name + "!");
    modal.style.display = "none";
  } else {
    alert("Please fill in all fields!");
  }
}
