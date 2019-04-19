<?php
	error_log(1);

	require 'c_config.php';

	$xs_contact_name = $_POST['xs_contact_name'];
	$xs_contact_email = $_POST['xs_contact_email'];
	$xs_contact_subject = $_POST['xs_contact_subject'];
	$xs_contact_phone = $_POST['xs_contact_phone'];
	$x_contact_massage = $_POST['x_contact_massage'];

	$e_content = "You have been contacted by ". $xs_contact_email . ". Their additional massage is as follow. <br><br>";

	$e_content .= "Subject : " . $xs_contact_subject . "<br><br>";
	$e_content .= "Phone : " . $xs_contact_phone . "<br><br>";
	$e_content .= "Massage body : " . $x_contact_massage . "<br><br>";
	$e_content .= "You can contact $xs_contact_email via email, $xs_contact_email";


	$headers = "From: " . $xs_contact_email . PHP_EOL;
	$headers .= "Reply-To: $xs_contact_email" . PHP_EOL;
	$headers .= "MIME-Version: 1.0" . PHP_EOL;
	$headers .= "Content-type: text/html; charset=utf-8" . PHP_EOL;



	$mail = mail(XPEEDSTUDIO_EMAIL, XPEEDSTUDIO_SUBJECT, $e_content, $headers);

	if ($mail) {
		echo XPEEDSTUDIO_SUCCESS_MASSAGE;
	}

?>