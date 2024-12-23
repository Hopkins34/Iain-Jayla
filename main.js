// Predefined date to track from
const trackedDate = new Date('2024-12-07T21:50:00'); // Change this to your desired date

function updateTime() {
  const now = new Date();
  const timeDifference = now - trackedDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDifference / 1000) % 60);

  const resultList = document.getElementById('result');
  resultList.innerHTML = `
    <ul class="Ul">
    <li>${days} days</li>
    <li>${hours} hours</li>
    <li>${minutes} minutes</li>
    <li>${seconds} seconds</li>
    </ul>
  `;

  // Update seconds dynamically
  setTimeout(updateTime, 1000);
}

// Display the tracked date
document.getElementById('trackedDate').textContent = trackedDate.toLocaleDateString();

// Start updating time on page load
updateTime();
