// Function to register a user
function registerUser(username, callback) {
    console.log(`Registering user: ${username}...`);
    
    // Simulate a delay to represent a time-consuming operation (e.g., database interaction)
    setTimeout(() => {
        console.log(`User "${username}" has been registered successfully.`);
        // Call the callback function after the user registration process is complete
        callback();
    }, 2000); // 2-second delay
}

// Function to send a confirmation email
function sendConfirmationEmail() {
    console.log("Sending confirmation email...");
    
    // Simulate a delay to represent a time-consuming email-sending process
    setTimeout(() => {
        console.log("Confirmation email sent successfully.");
    }, 1000); // 1-second delay
}

// Using the callback to manage the flow
registerUser("JohnDoe", sendConfirmationEmail);
