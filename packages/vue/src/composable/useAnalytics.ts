import type { AnalyticsProps } from "@withbeacon/core";
import { track } from "@withbeacon/core";
export function useAnalytics({ before, ...props }: AnalyticsProps) {
    track({
        before: before ? before : (evt) => evt,
        ...props,
    })
}