<?php
date_default_timezone_set('PST');
$currentHour = date("H");
$openTime = 7;

$closeTime = 21;
if ($currentHour >= $openTime && $currentHour < $closeTime && (date("w") != 0 || date("w") != 6)){
    $css = 'timeOn';
} else {
    $css = 'timeOff';
}

echo '<style type="text/css">';
// This is our class for showing the block
echo '.timeOn {
                display:block;
              }';
// This is our class for hiding the block
echo '.timeOff {
                display:none;
               }';
echo '</style>';

// We're ending the PHP Tag here
?>

$email_address = $_POST['email_address'];
$content = $_POST['content'];
