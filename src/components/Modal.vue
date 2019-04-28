<template>
	<div>
		<div class="modal is-active">
			<div class="modal-background"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">{{ result }}</p>
					<button class="delete" aria-label="close" @click.prevent="cancelFunction"></button>
				</header>
				<section class="modal-card-body">
					<button class="button is-success" @click.prevent="newGameFunction">New game</button>
					<button class="button is-danger" @click.prevent="cancelFunction">Cancel</button>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Modal',
	props: [
	'newGameFunction',
	'cancelFunction',
	'result',
	],
}
</script>