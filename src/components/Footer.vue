<template>
    <div>
        <!-- Footer section -->
	<footer class="footer-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-sm-6">
					<div class="footer-widget">
						<h4>Location</h4>
						<div class="fw-info-box">
							<div class="fw-info-text">
									<p>{{contacts.address}}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-6">
					<div class="footer-widget">
						<h4>Contacts</h4>
						<div class="fw-info-box">
							<div class="fw-info-text">
								<p>{{contacts.email}}</p>
								<p>{{contacts.phone}}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-6">
					<div class="footer-widget">
						<h4>Social Media</h4>
						<div class="fw-info-box">
							<div class="social-links icon">
								<a :href="contacts.socialMedia.ig" rel="noopener noreferrer" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" size="1x" /></a>
								<a :href="contacts.socialMedia.fb" rel="noopener noreferrer" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" size="1x" /></a>
								<a :href="contacts.socialMedia.youtube" rel="noopener noreferrer" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']" size="1x" /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 order-2 order-md-1">
				</div>
					
				<div class="col-md-6 order-1 order-md-2">
					<ul class="footer-menu">
						<li v-for="(item, index) in linkEntries" :key="index">
							<router-link :to="item.routeTo" exact>{{ item.name }}</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
	<!-- Footer section end -->
    </div>
</template>

<script>

import constants from '../Utils/Constants'

export default {
	name: 'Footer',
	data() {
		return {
			contacts: constants.contacts,
			linkEntries: constants.linkEntries
		}
	},
}
</script>

<style scoped>
	.footer-section{
		background-color: black;
	}

	.icon{
		color: white;
	}
</style>