<template>
    <div>
         <SectionHeader :text="headerText" :color="headerColor" :image="headerImage" />
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
            headerColor: isBaseball ? 'black' : 'white'
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>