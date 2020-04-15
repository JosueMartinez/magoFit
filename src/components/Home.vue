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
                            <img src="@/assets/img/1.jpg" alt="">
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
                <div v-for="(items,index) in groupedBaseballProgram" class="row" :key="index">
                        <div v-for="(item,index) in baseballProgram" class="col-lg-4 icon-box-item" :key="index">
                            <div class="ib-icon">
                                <i class="flaticon-050-weightlifting"></i>
                            </div>
                            <h4>{{ item.Title }}</h4>
                            <p>{{item.Description}}</p>
                        </div>
                    </div>
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
        return {
            isBaseball: true,
            headerImage: this.isBaseball ? '1.jpg' : '1.jpg',
            headerText: this.isBaseball ? "Practice with Purpose.  Play With Passion." : "Practice with Purpose.  Play With Passion.",
            baseballProgram: [
                {Title: "Minor Athletics Classes", Description: "test" },
                {Title: "Youth Baseball Classes", Description: "test" },
                {Title: "Private Lessons", Description: "test" },
                {Title: "Team Practices", Description: "test" },
                {Title: "Baseball Camps", Description: "test" },
                {Title: "Clinics", Description: "test" },
                {Title: "Team Tryouts", Description: "test" },
            ]
        }
    },
    mounted() {
        this.isBaseball = this.$store.state.baseball;
    },
    computed: {
        groupedBaseballProgram(){
            return this.chunk(this.baseballProgram,3);
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