<script>
export default {
    props: {
        nome : String,
        id : String,
        type : String,
        attribute : String,
        img : String,
    },
    data() {
        return {
        };
    },
    methods: {
        //    placeholder
    },
    mounted() {
        //  placeholder
    }
};
</script>

<template>
   <div class="card">
    <div class="name">quiname</div>
    <div class="imgContainer">
        <img :src="img " alt="">
    </div>
    <div class="desc">quidesc</div>
   </div>
</template>

<style scoped>

.card{
    border: 2px dashed purple;
    width: 100%;
    /* width: calc(100% / 3 - 4rem); */
}

.imgContainer{
    border: 2px dashed fuchsia;
}

img{
    width: 100%;
</style>
