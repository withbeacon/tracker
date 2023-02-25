<div text-align="center" align="center">
  <img
		src="https://raw.githubusercontent.com/withbeacon/beacon/main/packages/ui/src/assets/logo.svg" 
		alt="Beacon" 
		height="64px" 
		width="64px"
	>
	<h1>Beacon</h1>
</div>
<p align="center">Utility packages to help you track analytics in your app.</p>

> PLEASE NOTE - Many packages specified here are not currently available, Beacon is highly under development.

## Table of Contents
- [React](#react)
- [NextJS](#nextjs)
- [Solid JS](#solid-js)
- [Svelte](#svelte)
- [VueJS](#vuejs)
- [Qwik](#qwik)

## React
Firstly, add the `@withbeacon/react` package with npm or any other package manager:
```sh
npm install @withbeacon/react
```
and then add the `Analytics` component in your app:
```tsx
import { Analytics } from "@withbeacon/react";

function App() {
  return (
    <>
      {/* ... */}
      <Analytics />
    </>
}
```

## NextJS
Firstly, add the `@withbeacon/next` package with npm or any other package manager:
```sh
npm install @withbeacon/next
```

and then add the `Analytics` component in your app:
```tsx
import { Analytics } from "@withbeacon/react";

function App() {
  return (
    <>
      {/* ... */}
      <Analytics rewrites={true /* remove rewrites prop if not proxying your requests with withBeacon() function */} />
    </>
}
```
Optionally, you can also wrap your nextjs config with `withBeacon` function to proxy your requests and bypass adblockers.
```ts
import { withBeacon } from "@withbeacon/next";

export default withBeacon({
  // ... your config
});
```

## Solid JS
Firstly, add the `@withbeacon/solid-js` package with npm or any other package manager:
```sh
npm install @withbeacon/solid-js
```
and then add the `Analytics` component in your app:
```tsx
import { Analytics } from "@withbeacon/react";

function App() {
  return (
    <>
      {/* ... */}
      <Analytics />
    </>
}
```

## Svelte
Firstly, add the `@withbeacon/svelte` package with npm or any other package manager:
```sh
npm install @withbeacon/svelte
```
and then add the `Analytics` component in your app:
```svelte
<script>
  import { Analytics } from "@withbeacon/react";
</script>

<div>
  <!-- ... -->
  <Analytics />
</div>
```

## VueJS
Firstly, add the `@withbeacon/vue` package with npm or any other package manager:
```sh
npm install @withbeacon/vue
```
and then add the `Analytics` component in your app:
```svelte
<script>
  import Analytics from "@withbeacon/vue/analytics.vue";
</script>

<template>
  <!-- ... -->
  <Analytics />
</template>
```

## Qwik
Firstly, add the `@withbeacon/qwik` package with npm or any other package manager:
```sh
npm install @withbeacon/solid-js
```
and then add the `Analytics` component in your app:
```tsx
import { Analytics } from "@withbeacon/qwik";
import { component$ } from '@builder.io/qwik';

const App = component$(() => {
  return (
    <>
      {/* ... */}
      <Analytics />
    </>
  );
});
```
