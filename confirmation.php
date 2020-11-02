<?php
/* confirmation.php
 * gets the data from views/forms.html
 * 11/1/2020
 * Jerad Clark
 * Team Cohort
 */

ini_set('display_errors', 1);
error_reporting(E_ALL);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!--Meta Tags-->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width-device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="../css/home.css">
    <title>Confirmation</title>

    <!-- Bootstrap 4 CSS. This is for the alpha 3 release of Bootstrap 4. This should be updated when Bootstrap 4 is officially released. -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/css/bootstrap.min.css" integrity="sha384-MIwDKRSSImVFAZCVLtU0LMDdON6KVCrZHyVQQj6e8wIEJkW4tvwqXrbMIya1vriY" crossorigin="anonymous">

    <!-- Custom CSS: You can use this stylesheet to override any Bootstrap styles and/or apply your own styles -->
    <link href="css/custom.css" rel="stylesheet">

    <!-- For icons -->
    <link href="css/font-awesome-4.6.3/css/font-awesome.min.css" rel="stylesheet">

</head>
<body>
<div class="container" id="main">
    <h1>
        Thank you for your application
    </h1>

    <h2>
        Application Summary
    </h2>

    <?php
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $phoneNumber = $_POST['pnum'];
    $zipCode = $_POST['zip'];
    $bills = $_POST['bills'];
    $food = $_POST['food'];
    $rent = $_POST['rent'];
    $id = $_POST['id'];
    $other = $_POST['other'];

    $fromName = $fname. " " . $lname;
    $fromEmail = $email;

    echo "<p>Name: $fromName</p>";
    echo "<p>Email: $fromEmail</p>";
    echo "<p>Phone: $phoneNumber</p>";
    echo "<p>Zip: $zipCode</p>";
    echo "<p>Services required: $bills $food $rent $id $other</p>";

    $to = "jclark@mail.greenriver.edu";
    $subject = "Application Placed";
    $message = "Order from $fromName";
    $message = "Phone Number: $phoneNumber";
    $headers = "Name: $fromName <$fromEmail>";

    $success =mail($to, $subject, $message, $headers);
    if($success){
        echo "<p>Your order has been placed.</p>";
    } else{
        echo "<p>Sorry. . . There was a problem.</p>";
    }


    ?>

</div>
</body>
</html>
