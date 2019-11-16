<template>
	<div>
		<div v-for="item in fetchedAsk">
			<router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
			<span>
				{{item.time_ago}}
				by {{item.user}}
			</span>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters({
			fetchedAsk: 'fetchedAsk'
		})
		// ...mapState({
		// 	ask: state => state.ask
		// })
	},

	created() {
		this.$store.dispatch('FETCH_ASK');
	}
}
</script>

<style>

</style>