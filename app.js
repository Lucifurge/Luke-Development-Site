import createClient from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Define Supabase credentials
const supabaseUrl = 'https://ehrwsusgkzerozjnddib.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVocndzdXNna3plcm96am5kZGliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0Nzk4OTgsImV4cCI6MjA1MjA1NTg5OH0.2gC_pxtLhwrAGA2wR6jvXKuIhNMe_L_IsMWgSa3KKds';
const supabase = createClient(supabaseUrl, supabaseKey);

// Example functions
async function registerUser(username, password) {
    const { data, error } = await supabase.auth.signUp({
        email: username,
        password: password,
    });
    if (error) {
        console.error('Error registering user:', error.message);
        alert('Registration failed: ' + error.message);
    } else {
        console.log('Registration successful:', data);
        alert('User registered successfully!');
    }
}

async function loginUser(username, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password,
    });
    if (error) {
        console.error('Error logging in:', error.message);
        alert('Login failed: ' + error.message);
    } else {
        console.log('Login successful:', data);
        alert('User logged in successfully!');
    }
}

window.onload = () => {
    document.getElementById('register-btn').addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        registerUser(username, password);
    });

    document.getElementById('login-btn').addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        loginUser(username, password);
    });
};
