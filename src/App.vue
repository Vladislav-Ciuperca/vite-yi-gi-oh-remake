<script>
import AppHeader from "./components/AppHeader.vue";
import AppContent from "./components/AppContent.vue";
import AppFooter from "./components/AppFooter.vue";
import Store from "./data/store.js";
import axios from "axios";

export default {
    components: {
        AppHeader,
        AppContent,
        AppFooter,
    },

    data() {
        return {
            Store,
        };
    },
    methods: {
        //    placeholder
    },
    created() {
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname=mage").then(risultato => {
            this.Store.pageCards = risultato.data.data
            console.log(risultato.data.data);

        })
    },
    mounted() {
        //    placeholder
    },
};
</script>


<template>
    <AppHeader :NavLinks="['primoLink', 'secondo', 'terzo', 'quarto']"
        :HeaderLinks="['altrolink', 'secondoB', 'terzoB', 'quartoB']"
        LogoTitle="Logo/Title"></AppHeader>
    <AppContent></AppContent>
    <AppFooter></AppFooter>
    <pre>{{ Store.pageCards }}</pre>
</template>

<style>
/* placeholder */
</style>
