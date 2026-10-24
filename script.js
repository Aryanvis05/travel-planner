
document.getElementById("travelForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const destination = document.getElementById("destination").value;
    const days = document.getElementById("days").value;
    const budget = document.getElementById("budget").value;
    const interest = document.getElementById("interest").value;

    document.getElementById("result").innerHTML = `
        <h2>Your Travel Plan</h2>
        <p>Destination: ${destination}</p>
        <p>Days: ${days}</p>
        <p>Budget: ₹${budget}</p>
        <p>Interest: ${interest}</p>
        <p>Enjoy your trip!</p>
    `;
});
