<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "", "Internalyze");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Escape user inputs for security
$name = mysqli_real_escape_string($link, $_REQUEST['name']);
$email = mysqli_real_escape_string($link, $_REQUEST['email']);
$Current_Level_of_Education = mysqli_real_escape_string($link, $_REQUEST['Current_Level_of_Education']);
$Prepared_Entering_The_Job_Market = mysqli_real_escape_string($link, $_REQUEST['Prepared_Entering_The_Job_Market']);
$aboutus = mysqli_real_escape_string($link, $_REQUEST['aboutus']);
 
// Attempt insert query execution
$sql = "INSERT INTO form (name, email, Current_Level_of_Education,Prepared_Entering_The_Job_Market,aboutus) VALUES ('$name', '$email', '$Current_Level_of_Education','$Prepared_Entering_The_Job_Market','$aboutus')";
if(mysqli_query($link, $sql)){
    include"header.php";
    echo "";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
?>