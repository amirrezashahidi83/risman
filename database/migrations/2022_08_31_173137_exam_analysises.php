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
        Schema::create('exam_analysises', function (Blueprint $table) {
            $table->id();
            $table->integer("balance");
            $table->json("data");
            $table->foreignId('exam_id')->references('id')->on('exams');
            $table->foreignId("student_id")->references("id")->on("students");
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
        Schema::dropIfExists('exam_analysises');
    }
};
