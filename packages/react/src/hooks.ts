import type { AnalyticsProps } from "@beacon/core";
import { useEffect } from "react";
import { track } from "@beacon/core";

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
