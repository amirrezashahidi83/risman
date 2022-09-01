<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('study_plans', function (Blueprint $table) {
            $table->id();
            $table->datetime("study_time");
            $table->datetime("test_time");
            $table->integer("test_count");
            $table->foreignId("lesson_id")->references("id")->on("lessons");
            $table->foreignId("topic_id")->references("id")->on("topics");
            $table->foreignId('student_id')->references("id")->on("students");
            $table->timestamp('created_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("study_plans");
    }
};
