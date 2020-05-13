<template>
    <div>
         <SectionHeader :text="headerText" :color="headerColor" :image="headerImage" />

         <section class="service-section">            
			<!-- Baseball Program -->
			<div class="container">
				<div class="row">
					<IconItemBox v-for="(item,index) in baseballProgram" :key="index" 
					:title="item.Title" :subtitle="item.SubTitle" :description="item.Description" />
				</div>
			</div>
			<!-- Baseball Program END -->         
        </section>

        <section class="pricing-section graybg" v-if="baseballData">
			<div class="container">
				<div class="section-title text-white text-center">
					<h2>Prices for <span>everybody</span></h2>
				</div>
				<div class="row">					
					<ProgramBox v-for="(item,index) in baseballProgramDetails" :program="item" :key="index" />
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
                {Title: "Little Athletes Specialized Classes", SubTitle: 'Ages 3 to 5', Description: "Introduce your toddler or preschooler to the fun and excitement of Baseball." },
                {Title: "Youth Baseball Classes", SubTitle: 'Ages 5 to 12', Description: "Polk County best instructional classes for boys and girls of all ages and skill levels." },
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
			]
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