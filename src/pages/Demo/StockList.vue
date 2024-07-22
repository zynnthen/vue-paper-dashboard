<template>
  <div class="row">
    <div class="col-12">
      <card class="col-2">
        <button @click="exportExcel" class="btn btn-primary">
          Export Excel
        </button>
      </card>
      <card :title="table1.title" :subTitle="table1.subTitle">
        <div slot="raw-content" class="table-responsive">
          <paper-table
            :data="table1.data"
            :columns="table1.columns"
          ></paper-table>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import { PaperTable } from "@/components";

const tableColumns = ["Id", "Description", "IN", "Out", "Balance"];

// Function to get current month and year
function getCurrentMonthYear() {
  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
}

export default {
  components: {
    PaperTable,
  },
  data() {
    return {
      tableData: [],
      descriptions: [],
      table1: {
        title: "Stock List",
        subTitle: getCurrentMonthYear(),
        columns: [...tableColumns],
        data: [],
      },
    };
  },
  mounted() {
    this.fetchDescriptions();
  },
  methods: {
    async fetchDescriptions() {
      try {
        const response = await fetch("/assets/stocks.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.descriptions = data;
        this.generateRandomData();
      } catch (error) {
        console.error("Failed to load descriptions:", error);
      }
    },
    generateRandomData() {
      const randomData = [];

      for (let i = 0; i < 10; i++) {
        const randomDescription =
          this.descriptions[
            Math.floor(Math.random() * this.descriptions.length)
          ];
        const inValue = Math.floor(Math.random() * 100) + 1; // Random in value between 1 and 100
        const outValue = Math.floor(Math.random() * inValue); // Random out value less than inValue
        const balance = inValue - outValue;

        randomData.push({
          id: i + 1,
          description: this.descriptions[i],
          in: inValue,
          out: outValue,
          balance: balance,
        });
      }

      this.tableData = randomData;
      this.table1.data = randomData; // Ensure table1 data is updated after generating random data
    },
    exportExcel() {
      alert("Demo function");
    },
  },
};
</script>
