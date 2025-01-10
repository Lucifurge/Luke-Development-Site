// Include the Supabase library
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Supabase credentials
const supabaseUrl = 'https://ehrwsusgkzerozjnddib.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVocndzdXNna3plcm96am5kZGliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0Nzk4OTgsImV4cCI6MjA1MjA1NTg5OH0.2gC_pxtLhwrAGA2wR6jvXKuIhNMe_L_IsMWgSa3KKds';
const supabase = createClient(supabaseUrl, supabaseKey);

// Example: Register a user
async function registerUser(username, password) {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: username, // Supabase uses email for authentication
            password: password,
        });
        if (error) {
            console.error('Error signing up:', error.message);
            alert('Registration failed: ' + error.message);
        } else {
            console.log('User registered:', data);
            alert('Registration successful!');
        }
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}

// Example: Login a user
async function loginUser(username, password) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: username,
            password: password,
        });
        if (error) {
            console.error('Error logging in:', error.message);
            alert('Login failed: ' + error.message);
        } else {
            console.log('User logged in:', data);
            alert('Login successful!');
        }
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}

// Example: Fetch user data
async function fetchUserData() {
    try {
        const { data, error } = await supabase.from('users').select('*');
        if (error) {
            console.error('Error fetching data:', error.message);
            alert('Failed to fetch user data.');
        } else {
            console.log('User data:', data);
            alert('Data fetched successfully! Check console for details.');
        }
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}

// Attach event listeners
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

    document.getElementById('fetch-data-btn').addEventListener('click', fetchUserData);
};
