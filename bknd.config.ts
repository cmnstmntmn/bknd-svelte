import type { SvelteKitBkndConfig } from "bknd/adapter/sveltekit";

export default {
  connection: {
    url: "file:data.db",
  },
  adminOptions: {
    adminBasepath: "/admin",
  },
} satisfies SvelteKitBkndConfig;
