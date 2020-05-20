<template>
    <div>
        <section class="page-top-section" :style="{backgroundImage: 'url('+ require('@/assets/img/' + image)+')'}">
            <div class="container">
                <h2 :style="{color: color}">{{text}}</h2>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'TopSectionHeader',
    props: {
        image: String,
        text: String,
        color: String
    }
}
</script>

<style scoped>
    /* h2{
        color: black
    } */
</style>