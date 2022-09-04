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
        Schema::create('chat_messages', function (Blueprint $table) {
            $table->id();
            $table->text("text");
            $table->integer('status');
            $table->json("photo")->nullable();
            $table->json("video")->nullable();
            $table->json("audio")->nullable();
            $table->json("attachment")->nullable();
            $table->foreignId("reply_to")->references("id")->on("users")->nullable();
            $table->foreignId("sender_id")->references("id")->on("users");
            $table->foreignId("chat_id")->references("id")->on("chats");
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
        Schema::dropIfExists('chat_messages');
    }
};
