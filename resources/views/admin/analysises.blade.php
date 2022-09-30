@extends('admin.admin')

@section('content')
<div class="inner-block">
	<div>
		<select onchange="getanalysis()">
			@foreach($exams as $exam)
				<option value={{$exam.id}}>{{$exam.name}}</option>
			@endforeach
		</select>
	</div>
	<div class="chit-chat-layer1">
		<table class="table table-striped table-bordered table-hover table-condensed col-md-12 saeid_block">
			<thead>

			</thead>
			<tbody>
				@foreach($questions as $question)
					<tr>
						<td>{{$question.number}}</td>
					</tr>
				@endforeach
			</tbody>
		</table>
	</div>
</div>
@endsection