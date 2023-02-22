import type { AnalyticsProps } from "@withbeacon/core";
import { track } from "@withbeacon/core";
import { useEffect } from "react";

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
