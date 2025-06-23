<?php
$name = $_POST['name'];
$email = $_POST['email'];
$feedback = $_POST['feedback'];

//Database connection
$conn = new mysqli('localhost','root','','form');
if($conn ->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
else{
    $stmt = $conn ->prepare("INSERT INTO feedback (name, email, feedback) VALUES(?,?,?)");
    $stmt  -> bind_param("sss", $name,$email ,$feedback ); 
    $stmt->execute(); 
    echo "Submitted Successfully!";
    $stmt ->close();  
    $conn->close();
}

?>
