import type { AnalyticsProps } from "@withbeacon/core";
import { useAnalytics } from "./hooks";

export function Analytics(props: AnalyticsProps){
  useAnalytics(props);
  return null;
}

