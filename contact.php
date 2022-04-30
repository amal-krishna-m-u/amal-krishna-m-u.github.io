<?php
$con = mysqli_connect('localhost', 'root', '','connect-form');

$txtName = $_POST['name'];
$txtEmail = $_POST['email'];
$txtmsg = $_POST['message'];
$sql="INSERT INTO 'connect-form ('c_id','c_name',C_email','C_msg') VALUES ('0','$txtName', '$txtEmail','$txtmsg')";
$rs=mysqli_query($con,$sql);
if($rs)
{
    echo"contact records inserted";
}


?>