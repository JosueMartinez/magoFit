<template>
    <div>
         <SectionHeader :text="headerText" :color="headerColor" :image="headerImage" />

         <section class="service-section">  
			<div class="container">
				<div class="row">
					<IconItemBox v-for="(item,index) in program" :key="index" :twoColumns="baseballData"
					:title="item.Title" :subtitle="item.SubTitle" :description="item.Description" :icon="item.Icon" />
				</div>
			</div>
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
					Description: "Health can be improved by following a balanced diet,  eating foods that contain vitamins and minerals. This includes fruits, vegetables, whole grains, dairy, and a protein." },
                {
					Title: "Weight lose advice ", 
					Icon: 'weight', 
					Description: "To be successful in weight loss, you have to focus on more than just your look. An approach that taps into how you feel, your overall health, and your mental health is often the most efficient." 
				},
				{
					Title: 'Muscle Tone',
					Icon: 'dumbbell',
					Description: 'Of course you want to be toned! And that’s why you’re here. You want to know all of the best tips, tricks, and secrets for how to get toned as quickly and effectively as possible.'
				},
				{
					Title: 'Cardio Fitness',
					Icon: 'heartbeat',
					Description: 'People can get a wide range of results because of cardio. To help you get started on the right foot with your cardio, I’ve compiled a few tips that any beginner should keep in mind.'
				},
				{
					Title: 'Core Strength',
					Icon: 'dumbbell',
					Description: 'The core includes all muscle groups that stabilize the spine and pelvis, which are responsible for transmitting energy to other areas of the body during physical activity while preventing injuries.'
				},
				{
					Title: 'Body Transformation',
					Icon: 'sync',
					Description: 'People always set goals, and getting in shape is among the most popular resolutions made. We are here to help you achieve your goals no matter if you are starting or re-committing.'
				},
				{
					Title: '6 Weeks Transformation',
					Icon: 'calendar',
					Description: 'This program is designed to help you improve strength, size, endurance, conditioning, and overall health. The way this will work is we are going to keep the body guessing and focus on each aspect of your fitness one at a time.'
				},
				{
					Title: 'Fat Burn',
					SubTitle: 'For men & women',
					Icon: 'fire',
					Description: 'Losing fat is no easy feat, but a little pro advice can go a long way so If blasting body fat and burning calories is one of your main  goals Reach us out and let us help you !'
				},
			],
			fitnessProgramDetails: [
				{
					name: 'Individual Consultation',
					classes: [
						{
							name: 'Diet Plans',
							price: 'Please Call'
						},
						{
							name: 'Consultation',
							price: '$20'
						}
					]
				},
				{
					name: 'Personal Trainning Weekly Package',
					classes: [
						{
							name: '1 Session',
							price: '$50'
						},
						{
							name: '2 Sessions',
							price: '$90'
						},
						{
							name: '3 Sessions',
							price: '$120'
						},
						{
							name: '4 Sessions',
							price: '$140'
						},
						{
							name: '5 Sessions',
							price: '$160'
						}
					]
				},
				{
					name: 'Groups Trainning Sessions',
					classes: [
						{
							name: 'Groups of 2',
							price: '$30 / pp'
						},
						{
							name: 'Groups of 3',
							price: '$25 / pp'
						},
						{
							name: 'Groups of 4',
							price: '$20 / pp'
						},
						{
							name: 'Groups of 7',
							price: '$15 / pp'
						},
					]
				},
			]
        }
    },
	computed: {
		programsPricings(){
			return this.baseballData ? this.baseballProgramDetails : this.fitnessProgramDetails;
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