<script>
export default {
    props: {
        NavLinks :Array,
        HeaderLinks :Array,
        LogoTitle :String,
    },
    data() {
        return {
            //   placeholder
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
    <header class="df">
        <!-- left -->

        <div class="cont left df">
            <ul class="df">
                <li v-for="(navLink) in NavLinks">{{ navLink }}</li>
            </ul>
        </div>
        <!-- mid -->
        <div class="cont mid df">
            <h1>{{LogoTitle}}</h1>
        </div>
        <!-- right -->
        <div class="cont right df">
            <ul class="df">
                <li v-for="(headerLink) in HeaderLinks">{{ headerLink }}</li>
            </ul>
        </div>
    </header>
</template>

<style scoped>
header {
    padding: 1rem 4rem;
    justify-content: space-between;
    border: 2px dashed blue;
    background: rgba(0, 0, 255, 0.253);

}

.df {
    display: flex;
}

.cont {
    border: 2px dashed red;
}

ul {
    justify-content: space-around;
    gap: 1rem;
    list-style-type: none;
    align-items: center;
}

li {
    cursor: pointer;
}
</style>
