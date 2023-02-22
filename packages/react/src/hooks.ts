import type { AnalyticsProps } from "@withbeaconthbeacon/core";
import { useEffect } from "react";
import { track } from "@withbeaconthbeacon/core";

export function useAnalytics({ before, ...props }: AnalyticsProps) {
  useEffect(
    () =>
      track({
        before: before ? before : (evt) => evt,
        ...props,
      }),
    []
  );
}
