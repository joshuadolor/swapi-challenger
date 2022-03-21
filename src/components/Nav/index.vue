<template>
    <div>
        <v-btn
            v-for="route in routes"
            :to="route.name"
            :key="route.name"
            text
            v-text="route.label"
        >
        </v-btn>
    </div>
</template>

<script>
import routes from "@/router/routes";

export default {
    name: "NavigationButtons",
    data() {
        return {
            routes,
        };
    },
};
</script>