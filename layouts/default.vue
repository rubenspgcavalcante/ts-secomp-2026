<script setup lang="ts">
import { computed } from "vue";
import { useSlideContext } from "@slidev/client";
import { List } from "lucide-vue-next";

const { $slidev } = useSlideContext();

const currentRoute = computed(() => {
  return $slidev.nav.currentPath;
});

const backLink = computed(() => {
  const route = currentRoute.value;

  if (
    route === "/" ||
    route === "/1" ||
    route === "/2" ||
    route === "/3" ||
    route === "/home" ||
    route === "/modulo-1" ||
    route === "/modulo-2"
  ) {
    return null;
  }

  if ($slidev.nav.currentPage >= 4 && $slidev.nav.currentPage <= 50) {
    return "/modulo-1";
  }

  if ($slidev.nav.currentPage >= 51) {
    return "/modulo-2";
  }

  return null;
});
</script>

<template>
  <div class="slidev-layout default relative h-full">
    <slot />

    <footer
      class="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-3 text-sm opacity-70"
    >
      <div class="relative group">
        <Link
          v-if="backLink"
          :to="backLink"
          class="!border-none hover:!border-none !no-underline hover:!no-underline"
        >
          <List class="w-5 h-5" />
        </Link>

        <div
          class="absolute bottom-8 left-0 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity pointer-events-none group-hover:opacity-100"
        >
          Voltar ao índice
        </div>
      </div>

      <div>
        <SlideCurrentNo />
        /
        <SlidesTotal />
      </div>
    </footer>
  </div>
</template>
