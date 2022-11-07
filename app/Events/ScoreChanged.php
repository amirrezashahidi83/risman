<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\StudyPlan;

class ScoreChanged
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $study_plan;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(StudyPlan $study_plan)
    {
        $this->student = $student;
        $this->study_plan = $study_plan;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
