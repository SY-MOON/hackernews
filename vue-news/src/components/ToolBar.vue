<template>
	<div id="header">
		<router-link to="/news">NEWS</router-link> |
		<router-link to="/ask">ASK</router-link> |
		<router-link to="/jobs">JOBS</router-link>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#header {
	background-color: #42b883;
	display: flex;
	padding: 8px;
	color: #ffffff;
}

#header a {
	color: #ffffff;
	text-decoration: none;
	margin: 0 10px;
}

#header .router-link-exact-active {
	color: #354953;
}
</style>