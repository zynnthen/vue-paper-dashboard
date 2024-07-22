<template>
  <div>
    <!--Stats cards-->
    <div class="row">
      <div
        class="col-md-6 col-xl-3"
        v-for="stats in statsCards"
        :key="stats.title"
      >
        <stats-card>
          <div
            class="icon-big text-center"
            :class="`icon-${stats.type}`"
            slot="header"
          >
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{ stats.title }}</p>
            {{ stats.value }}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{ stats.footerText }}
          </div>
        </stats-card>
      </div>
      <span>Hint: Press Enter</span>
    </div>
  </div>
</template>

<script>
import { StatsCard } from "@/components/index";

export default {
  components: {
    StatsCard,
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
      statsCards: [
        {
          type: "warning",
          icon: "ti-direction",
          title: "Scanner 1",
          value: 0,
          footerText: "Updated now",
          footerIcon: "ti-reload",
        },
        {
          type: "success",
          icon: "ti-direction",
          title: "Scanner 2",
          value: "0",
          footerText: "Last day",
          footerIcon: "ti-calendar",
        },
        {
          type: "danger",
          icon: "ti-direction",
          title: "Scanner 3",
          value: "0",
          footerText: "1 hour ago",
          footerIcon: "ti-timer",
        },
        {
          type: "info",
          icon: "ti-direction",
          title: "Scanner 4",
          value: "0",
          footerText: "2 hours ago",
          footerIcon: "ti-timer",
        },
      ],
    };
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    handleKeydown(event) {
      if (event.key === "Enter") {
        this.incrementScanner1();
      }
    },
    incrementScanner1() {
      const scanner1 = this.statsCards.find(
        (stats) => stats.title === "Scanner 1",
      );
      if (scanner1 && scanner1.value == 0) {
        scanner1.footerText = "AVUV Screw Driver";
      }
      if (scanner1) {
        scanner1.value += 1;
      }
    },
  },
};
</script>
<style></style>
