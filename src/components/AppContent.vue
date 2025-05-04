<script>
import Store from "../data/store.js";
import AppContentCard from "./AppContentCard.vue";

export default {
    components: {
        AppContentCard,
    },
    props: {
        // palceholder
    },
    data() {
        return {
            ricerca: "",
            Store
        };
    },
    methods: {
        inputSearch() {
            this.Store.searchInput = ricerca
        }
    },
    mounted() {
        //  placeholder
    }
};
</script>

<template>
    <div class="cont">

        <div class="container" v-if="Store.pageCards" v-for="element in Store.pageCards">

            <span v-for="cardImageInfo in element.card_images">
               <!-- {{ cardImageInfo.image_url_small }}  -->
                <AppContentCard :img="cardImageInfo.image_url_small">
                </AppContentCard>
            </span>
            <!-- {{ element }} -->
        </div>
        <!-- <h1>
        <input type="text" v-model="ricerca">
    </h1>
    
    <div>{{ ricerca }}</div>
    <div>uguale{{ Store.searchInput }}</div> -->

        <!-- <pre v-for="element in Store.pageCards">
        {{ element.name }}
    </pre> -->

        <!-- <span v-if="Store.pageCards" v-for="element in Store.pageCards"> -->
        <!-- {{element.card_images}} -->
        <!-- <span v-for="cardIndex in element.card_images"> -->
        <!-- <img :src="cardIndex.image_url_small" alt=""> -->

        <!-- </span> -->

        <!-- </span> -->

    </div>
</template>

<style scoped>
.cont {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    flex-wrap: wrap;
    border: 2px dashed blue;
    gap: 2rem;
}

.container{
    width: calc(100% / 3 - 4rem);
    border: 2px dashed green;
}
</style>
