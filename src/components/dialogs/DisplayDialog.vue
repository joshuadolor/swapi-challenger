<template>
    <v-dialog :value="show" width="700" @click:outside="$emit('close')">
        <v-card>
            <v-card-title class="text-h5">
                {{ title }}
            </v-card-title>

            <v-card-text>
                <v-list-item
                    two-line
                    :key="dataKey"
                    v-for="dataKey in Object.keys(data)"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{
                            data[dataKey]
                        }}</v-list-item-title>
                        <v-list-item-subtitle>{{
                            titleCase(dataKey)
                        }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="$emit('close')">
                    close
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { titleCase } from "@/helpers/string";
export default {
    name: "DisplayDialog",
    data() {
        return {};
    },
    methods: {
        titleCase,
    },
    props: ["show", "data", "title"],
};
</script>