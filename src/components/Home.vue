<template>
    <div>
        <h1 v-show="isBaseball">this is Baseball</h1>
        <h1 v-show="!isBaseball">this is Fitness</h1>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            isBaseball: true
        }
    },
    mounted() {
        this.isBaseball = this.$store.state.baseball;
    }    
}
</script>

<style lang="stylus" scoped>

</style>