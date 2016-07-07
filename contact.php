<?php
$to = "info@elevarequity.com";
$subject = "Contact web form";


$name = $_REQUEST["name"];
$email = $_REQUEST["email"];
$organization = $_REQUEST["organization"];
$message = $_REQUEST["message"];

$bodyMsg = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<table width='269'>

<tr>
  <td>Name</td>
  <td>$name</td>
</tr>
<tr>
  <td>Email</td>
  <td>$email</td>
</tr>
<tr>
  <td>Organization</td>
  <td>$organization</td>
</tr>
<tr>
  <td>Message</td>
  <td>$message</td>
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: no-replay@elevarequity.com' . "\r\n";
//$headers .= 'Cc: tj@seventhinc.com' . "\r\n";

return mail($to,$subject,$bodyMsg,$headers);


?>