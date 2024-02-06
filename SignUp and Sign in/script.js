function submitForm(event) {
    event.preventDefault();

    // Fetching values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validate the data (client-side validation)
    if (!name || !email || !password) {
      alert("All fields must be filled out");
      return;
    }

    // Prepare data to send to the server
    var formData = {
      name: name,
      email: email,
      password: password,
    };

    // Assuming you're using a hypothetical endpoint for registration
    var apiUrl = "https://example.com/register";

    // Example using fetch to send data to the server
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        if (data.success) {
          alert("Registration successful!");
        } else {
          alert("Registration failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      });
  }