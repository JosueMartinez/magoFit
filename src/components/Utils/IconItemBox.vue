<template>
    <div class="col-sm-6 icon-box-item" v-bind:class="{ 'col-lg-4': !twoColumns, 'col-lg-6': twoColumns }">
        <div class="ib-icon">
            <font-awesome-icon :icon="icon" size="1x" />
        </div>
        <h4>{{title}}</h4>
        <h6><span>{{subtitle}}</span></h6>
        <p>{{description}}</p>
    </div>    
</template>

<script>
export default {
    name: 'IconItemBox',
    props: {
        icon: String,
        title: String,
        subtitle: String,
        description: String,
        twoColumns: Boolean
    }
}
</script>