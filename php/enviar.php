<?php
    $destino="tomasgelvez8@gmail.com";
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $correo = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    $contenido = "Nombre:" . $nombre . "\nApellido: " . $apellido . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje

    mail($destino, "Contacto", $contenido);

    header("Location:gracias.html");

?>