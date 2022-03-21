<script>
import Service from "@/services/StarshipService";
import BaseComponent from "../Base/Page";

export default {
    name: "StarshipsPage",
    extends: BaseComponent,
    data() {
        return {
            displayKeys: ["manufacturer", "crew", "passengers"],
            pageTitle: "Starships",
            displayTitle: "",
            displayData: {},
            service: Service,
        };
    },
    methods: {
        rearrangeItems: (a, b) => a.name.length - b.name.length,
    },
};
</script>