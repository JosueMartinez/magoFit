<template>
    <div>
         <SectionHeader :text="headerText" :color="headerColor" :image="headerImage" />

         <section class="service-section">            
			<!-- Baseball Program -->
			<div class="container">
				<div class="row">
					<IconItemBox v-for="(item,index) in program" :key="index" :twoColumns="true"
					:title="item.Title" :subtitle="item.SubTitle" :description="item.Description" :icon="item.Icon" />
				</div>
			</div>
			<!-- Baseball Program END -->   

			<!-- Fitness Program -->
			<!-- <div v-if="!baseballData" class="container">
				<div class="row">
					<IconItemBox v-for="(item,index) in fitnessProgram" :key="index" 
					:title="item.Title" :subtitle="item.SubTitle" :description="item.Description" :icon="item.Icon" />
				</div>
			</div> -->
			<!-- Fitness Program END --> 
        </section>

        <section class="pricing-section graybg">
			<div class="container">
				<div class="section-title text-white text-center">
					<h2>Prices for <span>everybody</span></h2>
				</div>
				<div class="row">					
					<ProgramBox v-for="(item,index) in programsPricings" :program="item" :key="index" />
				</div>
			</div>
		</section>
    </div>
</template>

<script>

import SectionHeader from './Utils/TopSectionHeader'
import ProgramBox from './Utils/ProgramBox'
import IconItemBox from './Utils/IconItemBox'

export default {
    name: 'Program',
    components: {
		SectionHeader,
		ProgramBox,
		IconItemBox
    },
    data(){
        let isBaseball = this.$store.state.baseball; 
        
        return {
            baseballData: isBaseball,
            headerImage: isBaseball ? 'bb-programs-top.jpg' : 'fitness-programs-top.jpg',
            headerText: "Programs",
            headerColor: isBaseball ? 'black' : 'white',
            baseballProgram: [
                {Title: "Little Athletes Specialized Classes", Icon: 'baseball-ball', SubTitle: 'Ages 3 to 5', Description: "Introduce your toddler or preschooler to the fun and excitement of Baseball." },
                {Title: "Youth Baseball Classes", Icon: 'baseball-ball', SubTitle: 'Ages 5 to 12', Description: "Polk County best instructional classes for boys and girls of all ages and skill levels." },
			],			
			baseballProgramDetails: [
				{
					name: 'Individual Lessons',
					classes: [
						{
							name: 'Private 30',
							duration: '30 mins',
							price: '$40'
						},
						{
							name: 'Private 60',
							duration: '1 hour',
							price: '$50'
						}
					]
				},
				{
					name: 'Groups Lessons',
					classes: [
						{
							name: '2 players',
							duration: '1 hour',
							price: '$35 /pp.'
						},
						{
							name: '3 players',
							duration: '1 hour',
							price: '$35 /pp.'
						},
						{
							name: '4-8 ps.',
							duration: '1 hour',
							price: '$30 /pp.'
						},
						{
							name: '9-15 ps.',
							duration: '1 hour',
							price: '$25 /pp.'
						}
					]
				},
				{
					name: 'Lesson Package',
					classes: [
						{
							name: '4 private',
							duration: '1 hour',
							price: '$150'
						},
						{
							name: '8 private',
							duration: '1 hour',
							price: '$300'
						},
						{
							name: '12 private',
							duration: '1 hour',
							price: '$420'
						},
						{
							name: '24 private',
							duration: '1 hour',
							price: '$800'
						},
						{
							name: '40 private',
							duration: '1 hour',
							price: '$1600'
						},
					]
				}
			],
			fitnessProgram: [
				{
					Title: "Nutrition advice ",
					Icon: "apple-alt", 
					Description: "Good nutrition is one of the keys to a healthy life. You can improve your health by keeping a balanced diet. You should eat foods that contain vitamins and minerals. This includes fruits, vegetables, whole grains, dairy, and a source of protein." },
                {
					Title: "Weight lose advice ", 
					Icon: 'weight', 
					Description: "If you want to be successful in weight loss, you have to focus on more than just how you look. An approach that taps into how you feel, your overall health, and your mental health is often the most efficient." 
				},
				{
					Title: 'Muscle Tone',
					Icon: 'dumbbell',
					Description: 'Do you want more muscle tone? Of course you do! Maybe you want to tone up your legs, or your stomach, your arms, your back, maybe you want to tone up your entire body.  And that’s why you’re here. You want to know all of the best tips, tricks, and secrets for how to get toned as quickly and effectively as possible.'
				},
				{
					Title: 'Cardio Fitness',
					Icon: 'heartbeat',
					Description: 'Cardio seems like the simplest thing in the world: you just need to do it. This, however, doesn’t explain the wide range of results that people get with it. Some people see quick results while others don’t seem to achieve anything.  To help you get started on the right foot with your cardio, I’ve compiled a few tips that any beginner should keep in mind.'
				},
				{
					Title: 'Core Strength',
					Icon: 'dumbbell',
					Description: 'You’ve probably been hearing a lot about your body’s core section recently, and many athletes have known about its function in fitness for years. The core is the midsection, but it encompasses much more than just the abdominal muscles: It includes all muscle groups that stabilize the spine and pelvis, which are responsible for transmitting energy to other areas of the body during physical activity. A strong, flexible core makes movement more robust and balanced, helping to prevent injuries. '
				},
				{
					Title: 'Body Transformation',
					Icon: 'sync',
					Description: 'It’s that time of year where the gym population grows and the resolutions are made.  People from all walks of life are setting new goals, and getting in shape is among the most popular resolutions made.  Maybe you’re someone who is brand new to this world of fitness and looking to start on the right foot. Perhaps you’re one of the many who started and stopped short but is now ready to re-commit to the mission of achieving your best.'
				},
				{
					Title: '6 Weeks Transformation',
					Icon: 'calendar',
					Description: 'The program that follows is a 6 -week routine that is designed to help you improve strength, size, endurance, conditioning, and overall health. The way this will work is we are going to keep the body guessing and focus on each aspect of your fitness one at a time.'
				},
				{
					Title: 'Fat Burn',
					SubTitle: 'For men & women',
					Icon: 'fire',
					Description: 'Losing fat is no easy feat, but a little pro advice can go a long way so If blasting body fat and burning calories is one of your main  goals Reach us out and let us help you !'
				},
			],
        }
    },
	computed: {
		programsPricings(){
			return this.baseballData ? this.baseballProgramDetails : this.baseballProgramDetails;
		},
		program(){
			return this.baseballData ? this.baseballProgram : this.fitnessProgram;
		}
	}
}
</script>

<style  scoped>
    span{
        background: gray;
        display: inline-block;
        padding: 0 4px;
        color: white;
    }

    .service-section{
        margin-top: 30px;
    }
</style>