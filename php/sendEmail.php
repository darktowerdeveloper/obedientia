<?php

// Replace this with your own email address
$siteOwnersEmail = 'willyson@willyson.com.br';

if($_POST) {

   $company = trim(stripslashes($_POST['contactCompany']));
   $email = trim(stripslashes($_POST['contactEmail']));
   $tel = trim(stripslashes($_POST['contactTel']));
   $contact_message = trim(stripslashes($_POST['contactMessage']));

   // Check company
	if (strlen($company) < 2) {
		$error['company'] = "Por favor, insira o nome da empresa.";
	}
	// Check Email
	if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
		$error['email'] = "Por favor insira um endereço de e-mail válido.";
	}
	// Check Message
	if (strlen($contact_message) < 15) {
		$error['message'] = "Por favor insira a sua mensagem. Deve ter pelo menos 15 caracteres.";
	}
   // tel
	if ($tel == '') { $tel = "Submissão de Formulário de Contato"; }


   // Set Message
   $message .= "<strong>Empresa:</strong> " . $company . "<br />";
	$message .= "<strong>Email:</strong> " . $email . "<br />";
	$message .= "<strong>Telefone:</strong> " . $tel . "<br />";
   $message .= "<strong>Mensagem:</strong> ";
   $message .= $contact_message;
   $message .= "<br /> ----- <br /> E-mail enviado pelo site willyson.com.br<br />";

   // Set From: header
   $from =  $company . " <" . $email . ">";

   // Email Headers
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
 	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


   if (!$error) {

      ini_set("sendmail_from", $siteOwnersEmail); // for windows server
      $mail = mail($siteOwnersEmail, $tel, $message, $headers);

		if ($mail) { echo "OK"; }
      else { echo "Algo deu errado. Por favor, tente novamente."; }
		
	} # end if - no validation error

	else {

		$response = (isset($error['company'])) ? $error['company'] . "<br /> \n" : null;
		$response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
		$response .= (isset($error['tel'])) ? $error['tel'] . "<br /> \n" : null;
		$response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;
		
		echo $response;

	} # end if - there was a validation error

}

?>