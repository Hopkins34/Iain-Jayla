document.addEventListener("DOMContentLoaded", () => {
    const eventDate = new Date("2024-12-10T21:50:00"); // Set your event date
    const liveTimeElement = document.getElementById("live-time");
    const milestonesElement = document.getElementById("milestones");

    // Function to format time duration
    const formatDuration = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;
        return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    };

    // Function to update the live time
    const updateLiveTime = () => {
        const now = new Date();
        const elapsed = now - eventDate;
        liveTimeElement.textContent = `${formatDuration(elapsed)}`;
    };

    // Function to add all milestones up to the current month
    const addMilestones = () => {
        const now = new Date();
        const totalMonths = (now.getFullYear() - eventDate.getFullYear()) * 12
                          + (now.getMonth() - eventDate.getMonth());

        milestonesElement.innerHTML = ""; // Clear the list to avoid duplicates

        for (let month = 1; month <= totalMonths; month++) {
            const milestoneDate = new Date(eventDate);
            milestoneDate.setMonth(eventDate.getMonth() + month);
            const milestoneItem = document.createElement("li");
            milestoneItem.textContent = `Month ${month}: ${milestoneDate.toDateString()}`;
            milestoneItem.classList.add("Article__li");
            milestonesElement.appendChild(milestoneItem);
        }
    };

    // Update the live time every second
    setInterval(updateLiveTime, 1000);

    // Check and update milestones every day
    setInterval(addMilestones, 24 * 60 * 60 * 1000);

    // Initial calls
    updateLiveTime();
    addMilestones();
});
