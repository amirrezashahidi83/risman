<?php

namespace App\Listeners;

use App\Events\ScoreChanged;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendScoreNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\ScoreChanged  $event
     * @return void
     */
    public function handle(ScoreChanged $event)
    {
        
    }
}
