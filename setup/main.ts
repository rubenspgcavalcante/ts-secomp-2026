import { defineAppSetup } from "@slidev/types";
import * as icons from "lucide-vue-next";

export default defineAppSetup(({ app }) => {
  for (const [name, component] of Object.entries(icons)) {
    if (typeof component === "object" || typeof component === "function") {
      app.component(name, component as any);
    }
  }
});
