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
        $study_plan = $event->study_plan;
        $plan = $study_plan->plan;
        
        $all_tests = 0;
        $all_study = 0;
        $newScore = 0;        
        
        foreach($day->lessons as $lesson){
            $all_tests += $lesson['test_count'];
            $all_study += $lesson['study_time'];
        }

        $newScore += $all_tests % 10;
        $newScore += $all_study;

        $student = Student::where('id',$study_plan->student_id)->first();
        $user = User::where('id',$student->user_id);
        $user->score += $newBalance;
        $user->save();
    }
}
