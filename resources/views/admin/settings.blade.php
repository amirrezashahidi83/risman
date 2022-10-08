@extends('admin.admin')

@section('content')
<div class="inner-block">
	<div class="row">
		<div class="col">
			<input />
			<button onClick='add_link()'/>
		</div>

		<div class="col">
			<span v-for="link in links" >
				@{{link.value}}
			</span>
		</div>
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