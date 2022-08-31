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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->integer('major');
            $table->integer('grade');
            $table->integer("status");
            $table->foreignId('plan_id')->references('id')->on('counselor_plans');
            $table->foreignId('schedule_id')->references("id")->on("school_schedules");
            $table->foreignId("counselor_id")->references("id")->on("counselors");
            $table->foreignId("user_id")->references("id")->on("users");
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
        Schema::dropIfExists('students');
    }
};
