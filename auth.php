<?php
require 'vendor/autoload.php';

$provider = $_GET['provider'];

if ($provider === 'google') {
    // Implement Google Login
    // Use Google OAuth Client here
    header('Location: https://accounts.google.com/o/oauth2/auth');
    exit;
} elseif ($provider === 'facebook') {
    // Implement Facebook Login
    // Use Facebook PHP SDK here
    header('Location: https://www.facebook.com/v11.0/dialog/oauth');
    exit;
} else {
    echo "Invalid provider";
    exit;
}
