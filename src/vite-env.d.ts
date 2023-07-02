/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
/// <reference types="vite-svg-loader" />

declare module 'virtual:vite-auto-plugins' {
  import type { Plugin } from './main';
  const plugins: Plugin[];
  export default plugins;
}

declare module 'virtual:vite-auto-layouts' {
  import type { Component } from 'vue';
  const layouts: Record<string, Component>;
  export default layouts;
}

declare module 'virtual:vite-auto-middleware' {
  import type { RouteMiddleware } from './main';
  const middlewareEntries: RouteMiddleware[];
  export default middlewareEntries;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
