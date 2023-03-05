import type { App } from "vue";
import Analytics from "./component/Analytics.vue";
import type { AnalyticsProps } from "@withbeacon/core";
const AnalyticsPlugin =  {
    install: (app: App, options?:AnalyticsProps) => {
        app.component("Analytics", Analytics)
    }
};
export default AnalyticsPlugin