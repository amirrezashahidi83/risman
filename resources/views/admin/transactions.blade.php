@extends('admin.admin')

@section('content')
<div class="inner-block">
	<div class="search-box">
		<!-- <form> -->
		<input type="text" v-model="search_item" placeholder="جستوجو..." required="">
		<input type="submit" @click="search_stu" value="">
		<!-- </form> -->
	</div>
	<div class="clearfix"> </div>
	<div class="chit-chat-layer1">
		<table class="table table-striped table-bordered table-hover table-condensed col-md-12 saeid_block">
			<thead>
				<th>ردیف</th>
				<th>نام دانش آموز</th>
				<th>مبلغ</th>
				<th>وضعیت</th>
				<th>کد شناسه</th>
				<th>نوع</th>
				<th>زمان</th>
			</thead>
			<tbody>
				@foreach($TrAc as $key => $value)
				<tr>
					<td></td>
					<td>{{$value->name}}</td>
					<td>{{$value->price}}</td>
					<td>{{$value->status}}</td>
					<td>{{$value->code}}</td>
					<td>{{$value->kind}}</td>
					<td>{{$value->date_time}}</td>
				</tr>
				@endforeach
			</tbody>

		</table>
		<div class="mail-toolbar clearfix">
			<div class="" dir="rtl">
					{{$TrAc}}
			</div>

		</div>
	</div>
</div>
@endsection