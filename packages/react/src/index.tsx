import type { AnalyticsProps } from "@beacon/core";
import { useAnalytics } from "./hooks";

export function Analytics(props: AnalyticsProps){
  useAnalytics(props);
  return null;
}

