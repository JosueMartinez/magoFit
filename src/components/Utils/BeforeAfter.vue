<template>
    <div class="col-lg-4">
        <div class="testimonial">
            <h2 class="text-center">{{result.client}}</h2>
            <div class="row">
                <div class="col">
                    <img class="float-right" src="@/assets/img/beforeDefault.jpg" alt="">
                </div>
                <div class="col">
                    <img class="float-left" src="@/assets/img/afterDefault.jpg" alt="">
                </div>
            </div>
            <div class="row text-justify">
                <em>"{{result.testimonial}}"</em>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'BeforeAfter',
    props: {
        result: Object
    }
}
</script>