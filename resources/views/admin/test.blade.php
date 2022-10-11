@extends('admin.admin')

@section('content')
<div class="inner-block">
	<div>
		<select onChange="" >
			<option v-for="test in tests" value=@{{test.id}} >@{{test.title}}</option>
		</select>
	</div>
	<div class="chit-chat-layer1">
		<div v-for="option in options" class='row'>
			<div class="col">
				<label>@{{option.key}}</label>
			</div>

			<div class="col">
				<input name=@{{option.id}} value=@{{option.value}} />
			</div>
		</div>
		<div>
			<button onClick="save_options()" />
		</div>
	</div>
</div>
@endsection