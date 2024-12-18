function bookEvent() {
  const location = document.getElementById("location").value;
  const hall = document.getElementById("venue").value;
  const capacity = document.getElementById("capacity").value;
  const food = document.getElementById("food").value;
  const time = document.getElementById("time").value;
  const date = document.getElementById("date").value;

  if (!location || !venue || !capacity || !food || !time || !date) {
    alert("Please fill in all fields before booking.");
    return;
  }
  const confirmation = confirm(
    `Your booking details:\n\nLocation: ${location}\nHall: ${hall}\nCapacity: ${capacity}\nFood: ${food}\nTime: ${time}\nDate: ${date}\n\nClick OK to proceed to the next page.`
  );

  if (confirmation) {
    window.location.href = "qr.html";
    const bookingLink = "qr.html";
  }
}
