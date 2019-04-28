<template>
	<div class="column is-2">
		<button class="button is-rounded" @click.prevent="nameFunction" :class="color">{{ name }}</button>
	</div>
</template>
<script>
export default {
	name: 'ButtonComponent',
	props: ['nameFunction','name','color'],
}
</script>

<style>
.specialAttack {
	background-color: #fb0505;
	color: white;
}

.giveUp {
	background-color: #1e5cd2;
	color: white;
}
</style>