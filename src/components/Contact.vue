<template>
    <div>
        <SectionHeader :text="headerText" :image="headerImage" :color="headerColor"/>

        <section class="contact-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-4">
					<h2 class="contact-title">Contact Info</h2>
					<div class="contact-info-warp">
						<h4>Location</h4>
						<div class="contact-info">
							<img src="img/icons/1-dark.png" alt="">
							<div class="cf-text">
								<p>1525  Awesome Lane, Los Angeles, CA</p>
							</div>
						</div>
					</div>
					<div class="contact-info-warp">
						<h4>Subscriptions</h4>
						<div class="contact-info">
							<img src="img/icons/2-dark.png" alt="">
							<div class="cf-text">
								<p>+1 (603)535-4592</p>
								<p>+1 (603)535-4556</p>
							</div>
						</div>
					</div>
					<div class="contact-info-warp">
						<h4>E-mail</h4>
						<div class="contact-info">
							<img src="img/icons/3-dark.png" alt="">
							<div class="cf-text">
								<p>Contact@xgym.com</p>
								<p>www.xgym.com</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-8">
					<h2 class="contact-title">Get in touch</h2>
					<form class="contact-form">
						<div class="row">
							<div class="col-md-6">
								<input type="text" placeholder="Your name">
							</div>
							<div class="col-md-6">
								<input type="text" placeholder="Your e-mail">
							</div>
							<div class="col-md-12">
								<input type="text" placeholder="Subject">
								<textarea placeholder="Message"></textarea>
								<button class="site-btn">Send Message</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
        <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112815.20016649086!2d-81.66599478194938!3d27.918079788827658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd0924318d7e91%3A0x842d169949d76fc!2sLake%20Wales%2C%20FL%2C%20USA!5e0!3m2!1sen!2sdo!4v1590685362552!5m2!1sen!2sdo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
	</section>

    </div>
</template>

<script>

import SectionHeader from './Utils/TopSectionHeader'

export default {
    name: 'Contact',
    components: {
        SectionHeader
    },
    data() {
        let isBaseball = this.$store.state.baseball; 

        return {
            headerText: 'Contact',
            baseballData: isBaseball,
            headerImage: isBaseball ? 'bb-home-top.jpg' : 'fitness-home-2.jpg',
            headerColor: isBaseball ? 'black' : 'white',
        }
    }
}
</script>