// Array to store user data (sign-up details)
let users = [];

// Flag to track login status
let isLoggedIn = false;

// Function to display messages
const message = document.getElementById('message');
function showMessage(msg, type) {
    message.textContent = msg;
    message.style.color = type === 'success' ? 'green' : 'red';
}

// Sign-up functionality
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    let isEmailTaken = false; // Initialize flag
    for (let user of users) {
        if (user.email === email) {
            isEmailTaken = true; // Set flag if email is found
            break; // Exit loop early
        }
    }

    if (isEmailTaken) {
        showMessage('Email already exists. Please use a different one.', 'error');
    } else if (email && password) {
        users.push({ email: email, password: password });
        showMessage('Sign-up successful! You can now log in.', 'success');
        signupForm.reset(); // Clear form
        console.log(users);
    } else {
        showMessage('Please fill out both fields.', 'error');
    }

    console.log('Is email taken:', isEmailTaken);
});

// Login functionality
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    let validUser = null; // Initialize variable
    for (let user of users) {
        if (user.email === email && user.password === password) {
            validUser = user; // Set validUser if found
            break; // Exit loop early
        }
    }

    if (validUser) {
        isLoggedIn = true; 
        showMessage('Login successful!', 'success');
        console.log('Login successful:', isLoggedIn);
    } else {
        isLoggedIn = false; 
        showMessage('Invalid email or password.', 'error');
        console.log('Invalid login:', isLoggedIn);
    }

    console.log('Is user valid:', validUser);
});



































// // Array to store user data (sign-up details)
// let users = [];

// // Function to display messages
// const message = document.getElementById('message');
// function showMessage(msg, type) {
//     message.textContent = msg;
//     message.style.color = type === 'success' ? 'green' : 'red';
// }

// // Sign-up functionality
// const signupForm = document.getElementById('signup-form');
// signupForm.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent form submission

//     const email = document.getElementById('signup-email').value;
//     const password = document.getElementById('signup-password').value;

//     // Check if the email already exists in the array
//     const userExists = users.some(user => user.email === email);

//     if (userExists) {
//         showMessage('Email already exists. Please use a different one.', 'error');
//     } else if (email && password) {
//         // Add new user to the array
//         users.push({ email: email, password: password });
//         showMessage('Sign-up successful! You can now log in.', 'success');
//         signupForm.reset(); // Clear form
//         console.log(users);
//     } else {
//         showMessage('Please fill out both fields.', 'error');
//     }
// });

// // Login functionality (using email instead of username)
// const loginForm = document.getElementById('login-form');
// loginForm.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent form submission

//     const email = document.getElementById('login-email').value;
//     const password = document.getElementById('login-password').value;

//     console.log(email, password);

//     // Check if the email and password match any user in the array
//     const validUser = users.find(user => user.email === email && user.password === password);

//     if (validUser) {
//         showMessage('Login successful!', 'success');
//         console.log('Login successful');
//     } else {
//         showMessage('Invalid email or password.', 'error');
//         console.log('Invalid login');
//     }
// });
