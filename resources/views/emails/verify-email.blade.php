<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Verificación de Correo</title>
</head>
<body>
    <h1>Hola {{ $username }},</h1>
    <p>Gracias por registrarte en inkShelf. Por favor, verifica tu correo haciendo clic en el siguiente enlace:</p>
    <a href="{{ $verificationUrl }}">Verifica tu Correo Electrónico</a>
    <p>¡Gracias!</p>
</body>
</html>
