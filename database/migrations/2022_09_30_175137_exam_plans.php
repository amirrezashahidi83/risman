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
        Schema::create('exam_plans', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->string("file");
            $table->integer("price");
            $table->string("image");
            $table->integer("available");
            $table->foreignId("exam_id")->references("id")->on("exams");
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
        Schema::dropIfExists('exam_plans');
    }
};
