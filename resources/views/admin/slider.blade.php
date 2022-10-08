@extends('admin.admin')

@section('content')
<div class="inner-block">
	<!--mainpage chit-chating-->
	<h3>عکس های اسلایدر</h3>
	<hr>
	<div class="chit-chat-layer1">
		<div class="col-md-12 saeid_block">
			<example-component @addrfilm="funcaddrimg()"></example-component>
		</div>
		<div class="clearfix"> </div>
	</div>
	<div class="chit-chat-layer1">
		<table class="table table-striped table-bordered table-hover table-condensed col-md-12 saeid_block">
			<thead>
				<th>ردیف</th>
				<th>متن</th>
				<th>عکس</th>
				<th>حذف</th>
			</thead>
			<tbody>
				<tr v-for="images in all_img_slider">
					<td>@{{images.id}}</td>
					<td>@{{images.text}}</td>
					<td><a :href="'images/'+images.picture"><img width="70" height="70" :src="'images/'+images.picture" alt=""></a></td>
					<td class="td_delete" @click="slider_img(images.id)"><i class="fa fa-trash"></i></td>
				</tr>
			</tbody>

		</table>
	</div>
	<h3>متن بالای صفحه ی اصلی</h3>
	<hr>
	<div class='row'>
		<div class="col chit-chat-layer1">
			<div class="col-md-8 right" style="padding-top: 10px;">
				<div class="form-group">
					<input type='file' />
				</div>
			</div>
			<div class="col-md-4 right list_button_insert">
				<button style="margin-top: 42px;" type="button" class="btn btn-success" @click="add_message()">تغییر پیام</button>
			</div>
		</div>
		<div class="col chit-chat-layer1">
			<div class="col-md-8 right" style="padding-top: 10px;">
				<div class="form-group">
					<textarea v-model="message">
					</textarea>
				</div>
			</div>
			<div class="col-md-4 right list_button_insert">
				<button style="margin-top: 42px;" type="button" class="btn btn-success" @click="add_picture()">تغییر پیام</button>
			</div>
		</div>
	</div>
	<div class="clearfix"> </div>
</div>
@endsection