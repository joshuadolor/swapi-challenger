<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <v-img
                    alt="Pink Zebra Logo"
                    class="shrink mr-2 swapi-challenge-logo"
                    contain
                    src="https://www.pinkzebra.com.au/img/logo-pz.3ec1c08b.png"
                    transition="scale-transition"
                    width="60"
                />
                <span class="title">SWAPI Challenge</span>
            </div>

            <v-spacer></v-spacer>
            <Nav />
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import Nav from "@/components/Nav";

export default {
    name: "App",

    components: {
        Nav,
    },

    data: () => ({
        //
    }),
};
</script>

<style scoped>
.swapi-challenge-logo {
    filter: brightness(0) invert(1);
}
</style>