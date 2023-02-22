import type { AnalyticsProps } from "@beacon/core";
import { onMount } from "solid-js";
import { track } from "@beacon/core";

export function useAnalytics({ before, ...props }: AnalyticsProps) {
  onMount(() =>
    track({
      before: before ? before : (evt) => evt,
      ...props,
    })
  );
}
