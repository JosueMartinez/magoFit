<template>
    <div class="col-sm-6 icon-box-item">
        <div class="ib-icon">
            <font-awesome-icon :icon="['fas', 'baseball-ball']" size="1x" />
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
        description: String
    }
}
</script>