<?php
	
	$client = $_POST["email"];
	$subject = $_POST["subject"];
	$message = $_POST["message"];
	
	echo $client."\n".$subject."\n".$message;
	/*
	// : Recipient's email
	$to = "tharunkumar8906@gmail.com";
	
	// Email headers
	$headers = "From: \r\n";
	$headers .= "Reply-To: sender@example.com\r\n";
	$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
	
	// Sending the email
	$mail_sent = mail($to, $subject, $message, $headers);
	
	// Result check
	if ($mail_sent) {
		 echo "Email sent successfully!";
	} else {
		 echo "Email sending failed.";
	}*/
?>
