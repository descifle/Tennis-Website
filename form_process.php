<?php
    $firstName = $_POST['fname'];
    $lastName = $_POST['lname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $zip = $_POST['zip'];
    $membership = $_POST['membership-type'];
    $comment = $_POST['comment'];

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

    echo $firstName;
    echo $lastName;
    echo $email;
    echo $phone;
    echo $address;
    echo $city;
    echo $zip;
    echo $membership;
    echo $comment;
?>
<!-- <script>location.assign("index-5.html")</script> -->