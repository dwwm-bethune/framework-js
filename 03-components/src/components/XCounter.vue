<template>
	<div :style="{ backgroundColor: value >= max ? 'red' : '' }">
		<button @click="decrement" v-if="value > 0">-</button>
		{{ value }}
		<button @click="value++" v-if="!max || value < parseInt(max)">+</button>
	</div>
</template>

<script>
export default {
	props: ['start', 'max'],
	data() {
		return {
			value: parseInt(this.start) || 0,
		}
	},
	methods: {
		decrement() {
			this.value--;
		}
	},
	// mounted() {
	//	this.value = this.start || 0;
	// }
}
</script>
