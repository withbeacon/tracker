<script lang="ts" setup>
import { onMounted } from "vue";
import { useAnalytics } from "../composable/useAnalytics";
type PageViewEvent = {
    pathname: string;
};

type SendEvent = (event: PageViewEvent) => PageViewEvent | null;

type AnalyticsProps = {
    before?: SendEvent;
};
const props = defineProps<AnalyticsProps>();
onMounted(() => {
    useAnalytics(props)
})
</script>

<template>
</template>
