<template>
    <div>
         <SectionHeader :text="headerText" :color="headerColor" :image="headerImage" />

         <section class="service-section">            
                <!-- Baseball Program -->
                <div  v-if="baseballData" class="row text-center">
                    <div v-for="(item,index) in baseballProgram" class="col-lg-6 icon-box-item" :key="index">
                        <div class="ib-icon">
                            <font-awesome-icon :icon="['fas', 'baseball-ball']" size="1x" />
                        </div>
                        <h4>{{ item.Title }}</h4>
                        <h6><span>{{item.SubTitle}}</span></h6>
                        <p>{{item.Description}}</p>
                    </div>
                </div>
                <!-- Baseball Program END -->         
        </section>
    </div>
</template>

<script>

import SectionHeader from './Utils/TopSectionHeader'

export default {
    name: 'Program',
    components: {
        SectionHeader
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
</style>