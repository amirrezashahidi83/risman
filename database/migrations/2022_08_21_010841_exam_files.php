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
        Schema::create('exam_files', function (Blueprint $table) {
            $table->id();
            $table->string("file");
            $table->integer("exam_id");
            $table->foreign("exam_id")->references("id")->on("exams");
            $table->string("profilePic");
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
        Schema::dropIfExists("exam_files");
    }
};
