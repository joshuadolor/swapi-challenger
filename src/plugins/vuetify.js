import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#ec088c',
                secondary: '#535353',
                accent: '#82b1ff',
            },
        },
    },
});
