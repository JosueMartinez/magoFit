<template>
    <div class="container">
        <!-- Section Header -->
        <SectionHeader :text="headerText" :image="headerImage" />
        <!-- Section Header End -->

        <!-- About section -->
        <section class="about-section">
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-lg-5">
                        <div class="section-title text-center">
                            <h2><span>Welcome</span> to The Wizard Baseball Program</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="about-text">
                            <p>
                                The Wizard Baseball Program specializes in elite baseball training. 
                                This program is designed for individuals ages six and up proven to improve skills and performance.
                                Get to know our staff, learn more about their credentials, and their hobbies. 
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-text">
                            <p>
                                Founder and Owner Francisco Rosario has passion for Baseball 
                                and wants to learn more about those who have the same passion for the game.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-img">
                            <img src="@/assets/img/bb-home.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="text-center pt-4">
                    <a href="#" class="site-btn">Contact Us</a>
                </div>
            </div>
        </section>
        <!-- About section end -->

        <!-- Service section -->
        <section class="service-section">
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-lg-4 col-sm-6">
                        <div class="section-title text-center">
                            <h2>Our Program <span>Includes</span></h2>
                        </div>
                    </div>
                </div>

                <!-- Baseball Program -->
                <div  v-if="baseballData">
                    <div v-for="(items,index) in groupedBaseballProgram" class="row" :key="index">
                        <div v-for="(item,index) in baseballProgram" class="col-lg-4 icon-box-item" :key="index">
                            <div class="ib-icon">
                                <font-awesome-icon :icon="['fas', 'baseball-ball']" size="1x" />
                            </div>
                            <h4>{{ item.Title }}</h4>
                            <p>{{item.Description}}</p>
                        </div>
                    </div>
                </div>
                <!-- Baseball Program END -->

                <!-- Fitness Program -->
                <div v-if="!baseballData">
                    <div v-for="(items,index) in groupedFitnessProgram" class="row" :key="index">
                        <div v-for="(item,index) in fitnessProgram" class="col-lg-4 icon-box-item" :key="index">
                            <div class="ib-icon">
                                <font-awesome-icon :icon="['fas', 'dumbbell']" size="1x" />
                            </div>
                            <h4>{{ item.Title }}</h4>
                            <p>{{item.Description}}</p>
                        </div>
                    </div>
                </div>
                <!-- Fitness Program END -->
                
            </div>
        </section>

    </div>
</template>

<script>

import SectionHeader from './Utils/TopSectionHeader'

export default {
    name: 'Home',
    components: {
        SectionHeader
    },
    data() {
        let isBaseball = this.$store.state.baseball; 
        return {
            baseballData: isBaseball,
            headerImage: isBaseball ? 'bb-home-top.jpg' : '1.jpg',
            headerText: isBaseball ? "Practice with Purpose.  Play With Passion." : "Don’t be afraid of being a beginner",
            baseballProgram: [
                {Title: "Minor Athletics Classes", Description: "specifically designed for athletes under 7 years of age. These classes teach confidence and the fundamentals of baseball." },
                {Title: "Youth Baseball Classes", Description: "s designed for the athletes that are 12 years and older that want to level their game up for the future, while having fun." },
                {Title: "Private Lessons", Description: "This program offers each player the extra work needed to improve their game specifically. Private baseball lessons for hitting, defense, pitching, speed and agility’s are available." },
                {Title: "Team Practices", Description: "Are you looking to improve your team before any type of tournament and/or game? Our professional baseball coach Francisco Rosario can help you with a more intense practice designed to your needs." },
                {Title: "Baseball Camps", Description: "A camp where athletes aged 5 & up are trained in different aspects of the baseball sport. This camp will offer numerous benefits for baseball players." },
                {Title: "Clinics", Description: "Kids participating In Sports Clinics are geared towards the child who has a particular interest in learning how to play the game, the right way, while having fun." },
            ],
            fitnessProgram: [{Title: "test", Description: "test desc"}]
        }
    },
    computed: {
        groupedBaseballProgram(){
            return this.chunk(this.baseballProgram,3);
        },
        groupedFitnessProgram(){
            return this.chunk(this.fitnessProgram,3);
        }

    },
    methods: {
        chunk (arr, len) {
            const chunks = []
            let i = 0
            const n = arr.length

            while (i < n) {
                chunks.push(arr.slice(i, i += len))
                i+=len+1;
            }

            return chunks
            }
    },    
}
</script>

<style lang="stylus" scoped>

</style>