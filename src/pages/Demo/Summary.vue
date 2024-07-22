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
            slot="header"
            :class="`icon-${stats.type}`"
          >
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{ stats.title }}</p>
            {{ stats.value }}
          </div>
        </stats-card>
      </div>
    </div>

    <!--Charts-->
    <div class="row">
      <div class="col-md-6 col-12">
        <chart-card
          title="Warehouse Statistics"
          sub-title="Stock distribution"
          :chart-data="preferencesChart.data"
          chart-type="Pie"
        >
          <span slot="footer">
            <i class="ti-timer"></i> Updated 1 hour ago
          </span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Warehouse A
            <i class="fa fa-circle text-danger"></i> Warehouse B
            <i class="fa fa-circle text-warning"></i> Warehouse C
          </div>
        </chart-card>
      </div>

      <div class="col-md-6 col-12">
        <chart-card
          title="Products turnonver"
          sub-title="Top 5 Products In/Out"
          :chart-data="activityChart.data"
          :chart-options="activityChart.options"
        >
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Item A
            <i class="fa fa-circle text-warning"></i> Item B
            <i class="fa fa-circle text-success"></i> Item C
            <i class="fa fa-circle text-danger"></i> Item D
            <i class="fa fa-circle"></i> Item E
          </div>
        </chart-card>
      </div>
    </div>

    <!-- Table -->
    <div class="row">
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table1.data" :columns="table1.columns">
            </paper-table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import { StatsCard, ChartCard } from "@/components/index";
import { PaperTable } from "@/components";
const tableColumns = ["Date", "Reference", "Vendor", "Subtotal", "Total"];
const tableData = [
  {
    date: "22 July 2024",
    reference: "INV1001",
    vendor: "AAA",
    subtotal: "$136.78",
    total: "$142.38",
  },
  {
    date: "20 July 2024",
    reference: "INV0201",
    vendor: "XYZ",
    subtotal: "$136.78",
    total: "$142.38",
  },
  {
    date: "19 July 2024",
    reference: "INV0301",
    vendor: "POP",
    subtotal: "$136.78",
    total: "$142.38",
  },
];

export default {
  components: {
    StatsCard,
    ChartCard,
    PaperTable,
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
      statsCards: [
        {
          type: "info",
          icon: "ti-dropbox-alt",
          title: "Total Products",
          value: "12",
        },
        {
          type: "warning",
          icon: "ti-dropbox-alt",
          title: "Low Stock Products",
          value: "2",
        },
        {
          type: "danger",
          icon: "ti-dropbox-alt",
          title: "Out of Stock Products",
          value: "1",
        },
        {
          type: "success",
          icon: "ti-dropbox-alt",
          title: "Sufficient Stock Products",
          value: "9",
        },
      ],
      activityChart: {
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          series: [
            [487, 459, 443, 599, 458, 506, 581, 509, 553, 634, 453, 444],
            [437, 319, 455, 410, 288, 473, 381, 296, 389, 295, 299, 413],
            [40, 17, 58, 115, 45, 69, 26, 14, 93, 74, 140, 5],
            [777, 873, 914, 810, 845, 888, 854, 914, 957, 855, 808, 776],
            [546, 551, 621, 557, 596, 531, 558, 543, 641, 511, 597, 613],
          ],
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false,
          },
          height: "245px",
        },
      },
      preferencesChart: {
        data: {
          labels: ["42%", "32%", "26%"],
          series: [42, 32, 26],
        },
        options: {},
      },
      table1: {
        title: "Recent Purchase Invoice",
        subTitle: "",
        columns: [...tableColumns],
        data: [...tableData],
      },
    };
  },
};
</script>
<style></style>
