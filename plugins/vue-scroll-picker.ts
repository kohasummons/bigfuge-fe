import VueScrollPicker from "vue-scroll-picker";
import "vue-scroll-picker/lib/style.css";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueScrollPicker);
});