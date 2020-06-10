<?php

    $firstNameErr = $lastNameErr = $emailErr = $phoneErr = $addressErr = $cityErr = $zipErr = $membershipErr = $commentErr = "";
    $firstName = $lastName = $email = $phone = $address = $city = $zip = $membership = $comment = "";

    include 'contact_config.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["fname"])) {
            $firstNameErr = "First name is required <br />";
        } else {
            $firstName = verifyInput($_POST['fname']);
        }

        if (empty($_POST["lname"])) {
            $lastNameErr = "Last name is required <br />";
        } else {
            $lastName = verifyInput($_POST['lname']);
        }

        if (empty($_POST["email"])) {
            $emailErr = "Enter a proper email address <br />";
        } else {
            $email = verifyInput($_POST['email']);
        }

        if (empty($_POST["phone"])) {
            $phoneErr = "Enter a valid phone number <br />";
        } else {
            $phone = verifyInput($_POST['phone']);
        }

        if (empty($_POST["address"])) {
            $addressErr = "Enter valid address <br />";
        } else {
            $address = verifyInput($_POST['address']);
        }

        if (empty($_POST["city"])) {
            $cityErr = "Enter valid city <br />";
        } else {
            $city = verifyInput($_POST['city']);
        }

        if (empty($_POST["zip"])) {
            $zipErr = "Enter valid zipcode <br />";
        } else {
            $zip = verifyInput($_POST['zip']);
        }

        if (empty($_POST["city"])) {
            $membershipErr = "Select Membership type <br />";
        } else {
            $membership = verifyInput($_POST['membership-type']);
        }

        $comment = verifyInput($_POST['comment']);
    }

    // $conn = new mysqli('localhost','root','','contact');
    // if($conn->connect_error) {
    //     die('Connection Failed  :'.$conn->connect_error);
    // } else {
    //     $stmt = $conn->prepare("insert into userinfo(name, email, phone, comment)
    //     values(?,?,?,?)");
    //     $stmt->bind_param("ssis",$fullName, $email, $phone, $comment);
    //     $stmt->execute();
    //     echo "user info succesfully stored...";
    //     $stmt->close();
    //     $conn->close();
    // }

    // echo $firstName;
    // echo $lastName;
    // echo $email;
    // echo $phone;
    // echo $address;
    // echo $city;
    // echo $zip;
    // echo $membership;
    // echo $comment;

    $errors = array($firstNameErr, $lastNameErr, $emailErr, $phoneErr, $addressErr, $cityErr, $zipErr, $membershipErr, $commentErr);

    $message = "Member Information: \n first Name: " .$firstName. " \n Last name: " .$lastName. " \n Email: " .$email. " \n Number: " .$phone. " \n Address: " .$address. " \n city: " .$city. " \n Zip: " .$zip. " \n Member-type: " .$membership. " \n Comment: " .$comment;
    $subject = "Member Information :";

    if(!array_filter($errors)) {
        mail(WEBMASTER_EMAIL, $subject, $message,
        "From: ".$firstName." <".$email.">\r\n"
        ."Reply-To: ".$email."\r\n"
        ."X-Mailer: PHP/" . phpversion());

        echo "great success";
    } else {
        echo "There was an error adding your information";
    }

    echo $firstNameErr;
    echo $lastNameErr;
    echo $emailErr;
    echo $phoneErr;
    echo $addressErr;
    echo $cityErr;
    echo $zipErr;
    echo $membershipErr;

    //server side validation

    function verifyInput($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    // <script>location.assign("index-5.html")</script> 
?>
