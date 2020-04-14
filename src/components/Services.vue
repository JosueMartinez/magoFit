<template>
    <div>
        <h1>this is serviecs</h1>
    </div>
</template>

<script>
export default {
    name: 'Services',
    mounted() {
        this.$store.commit('isBaseball');
    },
}
</script>

<style lang="stylus" scoped>

</style>