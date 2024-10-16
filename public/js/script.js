document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the values of username, password, and role
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var role = document.getElementById('role').value;

    // Prepare the data to send in the request
    var loginData = {
        username: username,
        password: password,
        role: role
    };

    try {
        // Send the data to the backend API
        var response = await fetch('https://your-backend-api.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if (response.ok) {
            // Handle success response
            var result = await response.json();
            document.getElementById('output').innerHTML = `<strong>Login successful!</strong><br>Token: ${result.token}`;
        } else {
            // Handle error response
            var error = await response.json();
            document.getElementById('output').innerHTML = `<span class="error">Error: ${error.message}</span>`;
        }
    } catch (err) {
        // Handle any network errors
        document.getElementById('output').innerHTML = `<span class="error">Network error: ${err.message}</span>`;
    }
});