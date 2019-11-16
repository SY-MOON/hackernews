<template>
	<div>
		<div v-for="item in this.$store.state.jobs">
			<a v-bind:href="item.url">{{ item.title }}</a>
			<span>{{item.time_ago}}{{item.user}}</span>
		</div>
	</div>
</template>

<script>
export default {
	created() {
		this.$store.dispatch('FETCH_JOBS')
	}
}
</script>

<style>

</style>