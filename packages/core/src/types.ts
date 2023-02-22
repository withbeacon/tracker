type PageViewEvent = {
  pathname: string;
};

export type SendEvent = (event: PageViewEvent) => PageViewEvent | null;

export type AnalyticsProps = {
  before?: SendEvent;
};

declare global {
  interface Window {
    beacon: {
      before: SendEvent;
    };
  }
}

