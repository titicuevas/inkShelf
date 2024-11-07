<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Mailer
    |--------------------------------------------------------------------------
    |
    | Esta opción controla el mailer predeterminado que se usa para enviar
    | correos electrónicos. Estamos configurándolo para "smtp" ya que
    | usaremos Mailtrap, que requiere este protocolo.
    |
    */

    'default' => env('MAIL_MAILER', 'smtp'),

    /*
    |--------------------------------------------------------------------------
    | Mailer Configurations
    |--------------------------------------------------------------------------
    |
    | Aquí puedes configurar todos los mailers utilizados por tu aplicación,
    | junto con sus respectivas configuraciones. En este caso, vamos a
    | centrarnos en "smtp" para el uso con Mailtrap.
    |
    */

    'mailers' => [

        'smtp' => [
            'transport' => 'smtp',
            // Host del servidor SMTP de Mailtrap
            'host' => env('MAIL_HOST', 'sandbox.smtp.mailtrap.io'),
            // Puerto recomendado para Mailtrap (2525)
            'port' => env('MAIL_PORT', 2525),
            // La encriptación suele ser nula para Mailtrap
            'encryption' => env('MAIL_ENCRYPTION', null),
            // Nombre de usuario de Mailtrap proporcionado en el panel
            'username' => env('MAIL_USERNAME'),
            // Contraseña de Mailtrap proporcionada en el panel
            'password' => env('MAIL_PASSWORD'),
            // Tiempo de espera de la conexión, puede ser nulo
            'timeout' => null,
            // Dominio local usado para la autenticación SMTP
            'local_domain' => env('MAIL_EHLO_DOMAIN', parse_url(env('APP_URL', 'http://localhost'), PHP_URL_HOST)),
        ],

        // Otros mailers que puedes tener configurados, como log, ses, etc.
        'log' => [
            'transport' => 'log',
            'channel' => env('MAIL_LOG_CHANNEL'),
        ],

        'array' => [
            'transport' => 'array',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Global "From" Address
    |--------------------------------------------------------------------------
    |
    | Aquí puedes definir una dirección y nombre "from" global para todos
    | los correos enviados por tu aplicación. Esto es útil para centralizar
    | el remitente de los correos.
    |
    */

    'from' => [
        'address' => env('MAIL_FROM_ADDRESS', 'noreply@inkshelf.com'),
        'name' => env('MAIL_FROM_NAME', 'inkShelf'),
    ],
];
