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
        Schema::create('counselors', function (Blueprint $table) {
            $table->id();
            $table->string("message")->nullable();
            $table->text("resume")->nullable();
            $table->integer("rating")->nullable();
            $table->integer("status");
            $table->integer("automatic_message");
            $table->json("specialities")->nullable();
            $table->foreignId("user_id")->references("id")->on("users")->unique();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('counselors');
    }
};
