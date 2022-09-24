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
        Schema::create('daily_messages', function (Blueprint $table) {
            $table->id();
            $table->integer('type');
            $table->text("text")->nullable();
            $table->string('picture')->nullable();
            $table->integer("start_time")->nullable();
            $table->integer("end_time")->nullable();
            $table->foreignId("counselor_id")->references("id")->on("counselors");
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('daily_messages');
    }
};
