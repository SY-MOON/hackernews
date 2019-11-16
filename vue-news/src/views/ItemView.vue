<template>
	<div>
		<section>
			<div class="user-container">
				<div>
					<!-- <i class="fas fa-user"></i> -->
				</div>
				<div class="user-description">
					<router-link :to="`/user/${fetchedItem.user}`">
						{{ fetchedItem.user }}
					</router-link>
					<div>
						{{ fetchedItem.time_ago }}
					</div>
				</div>
			</div>
			<h2>{{ fetchedItem.title }}</h2>
		</section>
		
		<section>
			<div v-html="fetchedItem.content"></div>
		</section>
		<p></p>
		<p>{{ fetchedItem.content}}</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['fetchedItem'])
	},
	created() {
		const itemId = this.$route.params.id;
		this.$store.dispatch('FETCH_ITEM', itemId)
	}
}
</script>

<style scoped>
.user-container {
	display: flex
}

.user-description {
	padding-left: 8px;
}
</style>