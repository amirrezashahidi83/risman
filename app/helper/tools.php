<?php

namespace App\helper;

use App\Chat;
use App\StudySum;
use DB;

class Tools
{
    public function __construct()
    {
    }


    public static function checkTokenStudent($token)
    {
        if(!$token || !str_contains($token, ';')) return ['success' => false];

        $mobile = explode(';', $token)[0];
        $stu_id = explode(';', $token)[1];

        $student = DB::table('stu')
            ->where('id', $stu_id)
            ->where('mobile', $mobile)
            ->first();

        if ($student) {
            return [
                'success' => true,
                'user' => $student,
                'type' => 'student',
            ];
        }

        return ['success' => false];
    }

    public static function checkTokenMosh($token)
    {

        $mobile = explode(';', $token)[0];
        $mosh_code = explode(';', $token)[1];

        $mosh = DB::table('mosh')
            ->where('code', $mosh_code)
            ->where('mobile', $mobile)
            ->first();

        if ($mosh) {
            return [
                'success' => true,
                'user' => $mosh,
                'type' => 'moshaver'
            ];
        }

        return ['success' => false];
    }

    public static function weeklyResultSum($weekId, $studentsIds)
    {


        $resultWeek = StudySum::whereIn('stu_id', $studentsIds)
            ->where('week_id', $weekId)
            ->get();

        return $resultWeek;
    }

    public static function convertSecond_2_hours($time_base_seconds)
    {

        $total_minutes = floor($time_base_seconds / 60);
        $hours = floor($total_minutes / 60);
        $minutes = $total_minutes % 60;
        $result = $hours . ':' . $minutes;

        return $result;
    }

    public static function convertSecond_2_minutes($time_base_seconds)
    {

        $total_minutes = floor($time_base_seconds / 60);
        $hours = floor($total_minutes / 60);
        $minutes = $total_minutes % 60;
        $result = ($hours/60) + $minutes;

        return $result;
    }

    public static function sumStudyTime_2_secound_in_2day_between($eduArr)
    {


        foreach ($eduArr->h as $key2 => $value2) {

            $eduArr->test_count += $value2->test_count;

            if ($value2->test_time && strpos($value2->test_time, ':')) {
                $eduArr->h_org += explode(':', $value2->test_time)[0] * 3600;
                $eduArr->h_org += explode(':', $value2->test_time)[1] * 60;
            } else {
                $eduArr->h_org += $value2->test_time * 3600;
            }
            if ($value2->study_time && strpos($value2->study_time, ':')) {
                $eduArr->h_org += explode(':', $value2->study_time)[0] * 3600;
                $eduArr->h_org += explode(':', $value2->study_time)[1] * 60;
            } else {
                $eduArr->h_org += $value2->study_time * 3600;
            }
            if ($value2->Pre_reading && strpos($value2->Pre_reading, ':')) {
                $eduArr->h_org += explode(':', $value2->Pre_reading)[0] * 3600;
                $eduArr->h_org += explode(':', $value2->Pre_reading)[1] * 60;
            } else {
                $eduArr->h_org += $value2->Pre_reading * 3600;
            }
            if ($value2->exercise && strpos($value2->exercise, ':')) {
                $eduArr->h_org += explode(':', $value2->exercise)[0] * 3600;
                $eduArr->h_org += explode(':', $value2->exercise)[1] * 60;
            } else {
                $eduArr->h_org += $value2->exercise * 3600;
            }
            if ($value2->Summarizing && strpos($value2->Summarizing, ':')) {
                $eduArr->h_org += explode(':', $value2->Summarizing)[0] * 3600;
                $eduArr->h_org += explode(':', $value2->Summarizing)[1] * 60;
            } else {
                $eduArr->h_org += $value2->Summarizing * 3600;
            }
            if ($value2->passage && strpos($value2->passage, ':')) {
                $eduArr->h_org += explode(':', $value2->passage)[0] * 3600;
                $eduArr->h_org += explode(':', $value2->passage)[1] * 60;
            } else {
                $eduArr->h_org += $value2->passage * 3600;
            }
            if ($value2->Repeat_test && strpos($value2->Repeat_test, ':')) {
                $eduArr->h_org += explode(':', $value2->Repeat_test)[0] * 3600;
                $eduArr->h_org += explode(':', $value2->Repeat_test)[1] * 60;
            } else {
                $eduArr->h_org += $value2->Repeat_test * 3600;
            }
        }

        return $eduArr;
    }

    public static function getStuWithId($stuId)
    {

        $student = DB::table('stu')
            ->where('id', $stuId)
            ->first();

        // if ($student) {
        //     return [
        //         'success' => true,
        //         'student' => $student
        //     ];
        // }

        return $student;
    }

    public static function remove_chat_with_id($chatId)
    {
        Chat::where('id', $chatId)
            ->update([
                'status' => -1
            ]);

        return 1;
    }

    public static function sumTestCount($arrayEdu)
    {
        $sum = 0;

        if (count($arrayEdu) > 0) {

            foreach ($arrayEdu as $key => $value) {

                if ($value->test_count)
                    $sum += $value->test_count;
            }
        }

        return $sum;
    }

    public static function findReplayFrom($chats,$replay_to)
    {
        foreach ($chats as $key => $value) {
            if($value->id == $replay_to)
                return $value;
        }

    }

    public static function sumStudyTime_and_testCount($eduArr)
    {
        $testCount = 0;
        $studyTime = 0;
        $test_time = 0;

        foreach ($eduArr as $key2 => $value2) {
            
            $testCount += $value2->test_count;

            if ($value2->test_time && strpos($value2->test_time, ':')) {
                $test_time += explode(':', $value2->test_time)[0] * 3600;
                $test_time += explode(':', $value2->test_time)[1] * 60;
            } else {
                $test_time += $value2->test_time * 3600;
            }
            if ($value2->study_time && strpos($value2->study_time, ':')) {
                $studyTime += explode(':', $value2->study_time)[0] * 3600;
                $studyTime += explode(':', $value2->study_time)[1] * 60;
            } else {
                $studyTime += $value2->study_time * 3600;
            }
            if ($value2->Pre_reading && strpos($value2->Pre_reading, ':')) {
                $studyTime += explode(':', $value2->Pre_reading)[0] * 3600;
                $studyTime += explode(':', $value2->Pre_reading)[1] * 60;
            } else {
                $studyTime += $value2->Pre_reading * 3600;
            }
            if ($value2->exercise && strpos($value2->exercise, ':')) {
                $studyTime += explode(':', $value2->exercise)[0] * 3600;
                $studyTime += explode(':', $value2->exercise)[1] * 60;
            } else {
                $studyTime += $value2->exercise * 3600;
            }
            if ($value2->Summarizing && strpos($value2->Summarizing, ':')) {
                $studyTime += explode(':', $value2->Summarizing)[0] * 3600;
                $studyTime += explode(':', $value2->Summarizing)[1] * 60;
            } else {
                $studyTime += $value2->Summarizing * 3600;
            }
            if ($value2->passage && strpos($value2->passage, ':')) {
                $studyTime += explode(':', $value2->passage)[0] * 3600;
                $studyTime += explode(':', $value2->passage)[1] * 60;
            } else {
                $studyTime += $value2->passage * 3600;
            }
            if ($value2->Repeat_test && strpos($value2->Repeat_test, ':')) {
                $studyTime += explode(':', $value2->Repeat_test)[0] * 3600;
                $studyTime += explode(':', $value2->Repeat_test)[1] * 60;
            } else {
                $studyTime += $value2->Repeat_test * 3600;
            }
        }

        return [
            'studyTime' => $studyTime,
            'testCount' => $testCount,
            'test_time' => $test_time,
        ];
    }
}
