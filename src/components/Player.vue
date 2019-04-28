<template>
	<div class="column is-one-third">
		<h2 class="title is-2">{{ name }}</h2>
		<progress class="progress is-success show-value" :value="life" max="100"></progress>
	</div>
</template>
<script>
export default {
	name: 'Player',
	props: ['name','life'],
}
</script>

<style>
.progress {
	height: 2rem;
}
progress.show-value {
  position: relative;
}

progress.show-value:after {
  content: attr(value)'%';
  position: absolute;
  top: 25%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  font-size: calc(1rem / 1);
  line-height: 1rem;
}

progress.show-value.is-small:after {
  font-size: calc(0.75rem / 1.5);
  line-height: 0.75rem;
}

progress.show-value.is-medium:after {
  font-size: calc(1.25rem / 1.5);
  line-height: 1.25rem;
}

progress.show-value.is-large:after {
  font-size: calc(1.5rem / 1.5);
  line-height: 1.5rem;
}
</style>