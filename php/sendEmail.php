<?php

// Replace this with your own email address
$siteOwnersEmail = 'contact.darktower@gmail.com';

if($_POST) {

	$formName = trim(stripslashes($_POST['formName']));
	$formEmail = trim(stripslashes($_POST['formEmail']));
	$formAdress = trim(stripslashes($_POST['formAdress']));
	$formCountry = trim(stripslashes($_POST['formCountry']));
	$formZipcode = trim(stripslashes($_POST['formZipcode']));

	// Set Message
	$message .= "<strong>Nome:</strong> " . $formName . "<br />";
	$message .= "<strong>Email:</strong> " . $formEmail . "<br />";
	$message .= "<strong>Endereço:</strong> " . $formAdress . "<br />";
	$message .= "<strong>Origem:</strong> " . $formCountry . "<br />";
	$message .= "<strong>Código postal:</strong> " . $formZipcode . "<br /><br />";
	$message .= "E-mail enviado pelo site darktowerofficial.com/<br />";
	
	$subject = "Pedido solicitado via site!";

	// Set From: header
	$from =  $formName . " <" . $formEmail . ">";

	// Email Headers
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $formEmail . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	ini_set("sendmail_from", $siteOwnersEmail); // for windows server
	$mail = mail($siteOwnersEmail, $subject, $message, $headers);
}

?>