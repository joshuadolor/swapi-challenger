<template>
    <v-container>
        <v-row>
            <v-col>
                <div class="text-h3">
                    {{ pageTitle }}
                </div>
                <div class="title">{{ this.filteredItems.length }} items</div>
            </v-col>
        </v-row>

        <v-row>
            <v-col
                cols="12"
                sm="4"
                md="3"
                v-show="loading"
                :key="idx"
                v-for="idx in loadingItems"
            >
                <v-skeleton-loader
                    type="list-item-avatar"
                    elevation="2"
                    class="py-2"
                ></v-skeleton-loader>
            </v-col>
            <v-col
                cols="12"
                sm="4"
                md="3"
                v-for="item in filteredItems"
                :key="item.id"
            >
                <list-card-item
                    :title="item.name"
                    :subtitle="item.releaseDate"
                    @click.native="showDisplayData(item)"
                />
            </v-col>
        </v-row>
        <display-data-dialog
            :show="showDialog"
            :title="displayTitle"
            :data="displayData"
            @close="showDialog = false"
        />
    </v-container>
</template>


<script>
import Service from "@/services/FilmService";
import ListCardItem from "@/components/widgets/ListCardItem";
import DisplayDataDialog from "@/components/dialogs/DisplayDialog";

export default {
    name: "FilmsPage",
    components: {
        ListCardItem,
        DisplayDataDialog,
    },
    data() {
        return {
            items: [],
            loading: false,
            showDialog: false,
            loadingItems: 10,
            displayKeys: ["releaseYear", "director", "producer"],
            pageTitle: "Films",
            displayTitle: "",
            displayData: {},
            service: Service,
        };
    },
    methods: {
        showDisplayData(data) {
            this.showDialog = true;
            this.displayTitle = data.name;
            this.displayData = this.displayKeys.reduce((a, b) => {
                return { ...a, [b]: data[b] };
            }, {});
        },
        async fetchItems() {
            this.loading = true;
            this.items = await this.service.getAll();
            this.loading = false;
        },
        rearrangeItems: (a, b) =>
            new Date(b.releaseDate) - new Date(a.releaseDate),
    },
    computed: {
        filteredItems() {
            return [...this.items].sort(this.rearrangeItems);
        },
    },
    async mounted() {
        await this.fetchItems();
    },
};
</script>