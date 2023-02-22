import { AnalyticsProps } from "./types";

export function track({ before }: AnalyticsProps): void | undefined {
  if (typeof window === "undefined") {
    return;
  }

  if (before) {
    window.beacon.before = before;
  }

  if (window.beacon.before({ pathname: window.location.pathname })) {
    return;
  }

  const scriptSrc = "https://withbeacon.vercel.app/track.js";

  if (document.head.querySelector(`script[src*="${scriptSrc}"]`)) {
    return;
  }

  const script = document.createElement("script");
  script.src = "https://withbeacon.vercel.app/track.js";
  script.defer = true;

  document.head.appendChild(script);
}

export * from "./types";
