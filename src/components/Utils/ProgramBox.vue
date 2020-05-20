<template>
        <div class="col-lg-4 col-sm-6">
            <div class="pricing-box">
                <h2>{{program.name}}</h2>
                <!-- <p>classes</p> -->
                <div class="row" v-for="(item,index) in program.classes" :key="index">
                    <div class="col">{{item.name}}</div>
                    <div class="col" v-if="item.duration">{{item.duration}}</div>
                    <div class="col">{{item.price}}</div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'PricingBox',
    props: {
        program: Object
    }
}
</script>