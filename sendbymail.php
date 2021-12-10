<?php
//codigo php para enviar correo 
if (isset($_POST["enviar"])) {
    if(!empty($_POST["email"]) && !empty($_POST["msg"])) {
        $email = $_POST["email"];
        $msg = $_POST["msg"];
        $header = "From: noreply@example.com" . "\r\n";
        $header = "Reply-To: noreply@example.com" . "\r\n";
        $header = "X-Mailer: PHP/" . phpversion();
        $mail = @mail($email,$msg,$header);
        if ($mail) {
            echo "<h3>¡Mail enviado exitosamente!</h3>";
        }
    }
}
