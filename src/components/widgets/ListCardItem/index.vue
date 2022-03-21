<template>
    <v-card>
        <v-card-title class="d-block text-truncate">
            {{ title }}
        </v-card-title>
        <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    </v-card>
</template>

<script>
export default {
    name: "ListCardItem",
    props: {
        title: {
            required: true,
        },
        subtitle: {},
    },
};
</script>