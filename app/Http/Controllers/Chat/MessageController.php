<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    public function store(Request $request){
        
        $text = $request->text;
        $sender_id = $request->sender_id;
        $chat_id = $request->chat_id;
        
        $message = new Message();
        $message->text = $text;
        $message->sender_id = $sender_id;
        $message->chat_id = $chat_id;
        
        if($request->has('media')){
            $media = $request->file('media');
            $media->store('medias','local');
            $message->media = $media;
        }

        if($request->has('attachment')){
            $attachment = $request->file('attachment');
            $attachment->store('attachments','local');
            $message->attachment = $attachment;
        }

        if($request->has('reply_to')){
            $message->reply_to = $request->reply_to;
        }

        return response()->json($message->save(),200);
    }

    public function forward(Request $request){
        $message_id = $request->message_id;
        $sender_id = $request->sender_id;
        $forward_chat = $request->forward_chat;

        $current_message = Message::where('message_id',$message_id)->first();

        $forward_message = new Message();
        $forward_message->text = $current_message->text;
        $forward_message->sender_id = $sender_id;
        $forward_message->chat_id = $forward_chat;
        $forward_message->forwarded_from = $current_message->sender_id;

        if(isset($current_message->media))
            $forward_message->media = $current_message->media;

        if(isset($current_message->attachment))
            $forward_message->attachment = $current_message->attachment;

        return response()->json($forward_message,200);

    }

    public function setSeen(Request $request){
        $message_id = $request->message_id;
        $result = Message::where('id',$message_id)->update(['status' => 1]);

        return response()->json($result,200);
    }

    public function getAll(Request $request){
    	$chat_id = $request->chat_id;
        $messages = Message::where('chat_id',$chat_id)->get();

        return response()->json($messages,200);
    }
}
