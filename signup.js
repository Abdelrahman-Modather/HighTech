function signUp() {
    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate that all required fields are filled
    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill in all required fields!");
        return;
    }

    // Validate that the password and confirmPassword match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Create an object to store user info
    const userInfo = {
        username: username,
        email: email,
        password: password
    };

    // Save user info to localStorage
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    // Notify the user that the sign-up was successful
    alert("Sign Up Successful!");
    window.location.href = "login.html"; // Redirect to login page
}