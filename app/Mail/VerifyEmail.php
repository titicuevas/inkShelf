<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class VerifyEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function build()
    {
        return $this->view('emails.verify-email') // Asegúrate de que esta vista exista
                    ->subject('Verifica tu correo electrónico')
                    ->with([
                        'username' => $this->user->name,
                        'verificationUrl' => route('verification.verify', ['id' => $this->user->id]),
                    ]);
    }
}
