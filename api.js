// Get the element where the result will be displayed
const resultDiv = document.getElementById("result");

// Fetch the data from the API
url = "https://worldtimeapi.org/api/ip";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Create a string with the data to display
    const dateString = data.datetime;
    const timezone = data.timezone;
    const displayString = `The current time is ${dateString} in the ${timezone} timezone.`;

    // Add the result to the HTML
    resultDiv.innerText = displayString;
  })
  .catch((error) => {
    // If there's an error, display a message
    resultDiv.innerText = "An error occurred while fetching the data.";
  });


