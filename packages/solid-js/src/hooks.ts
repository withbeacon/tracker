import type { AnalyticsProps } from "@withbeacon/core";
import { onMount } from "solid-js";
import { track } from "@withbeacon/core";

export function useAnalytics({ before, ...props }: AnalyticsProps) {
  onMount(() =>
    track({
      before: before ? before : (evt) => evt,
      ...props,
    })
  );
}
