<template>
    <div>
        <header class="header-section">
		<a href="home.html" class="site-logo">
			<img src="img/logo.png" alt="">
		</a>
		<ul class="main-menu">
			<li v-for="(item, index) in linkEntries" :key="index">
				<router-link :to="item.routeTo" exact>{{ item.name }}</router-link>
			</li>
			<li class="header-right">
				<div class="hr-box">
					<img src="img/location-icon.png" alt="">
					<h6>1525  Amazing Lane, Los Angeles, CA</h6>
				</div>
			</li>
		</ul>
	</header>
	<div class="clearfix"></div>
    </div>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			linkEntries: [
				{name: 'home', routeTo: '/'},
				{name: 'about', routeTo: '/about'},
				{name: 'services', routeTo: '/services'}
			]
		}
	},
}
</script>

<style lang="stylus" scoped>

</style>