<template>
    <div>
        <section class="page-top-section" :style="{backgroundImage: 'url('+ require('@/assets/img/' + image)+')'}">
            <div class="container">
                <h2>{{text}}</h2>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'TopSectionHeader',
    props: {
        image: String,
        text: String
    }
}
</script>