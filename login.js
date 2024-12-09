function login() {
    // Get values from input fields
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Get stored user data from localStorage
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

    // Check if the user exists and the password matches
    if (storedUserInfo && storedUserInfo.email === loginEmail && storedUserInfo.password === loginPassword) {
        alert("Login Successful!");
        // Redirect to a new page after successful login (e.g., homepage)
        window.location.href = "index.html"; // Redirect to homepage or dashboard
    } else {
        alert("Invalid credentials. Please try again.");
    }
}



function signUp() {
    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

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
