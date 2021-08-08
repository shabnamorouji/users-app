<template>
  <Header title="Chart" />
  <div class="chart1">
      <FirstChart />
  </div>
  <Header title="Chart" />
  <div class="chart2">
      <SecondChart />
  </div>

</template>

<script>
import Header from "./Header.vue";
import FirstChart from "./FirstChart.vue";
import SecondChart from "./SecondChart.vue";
    

export default {
    name :"Chart",
    components: {
            Header,
            FirstChart,
            SecondChart
    },
    emits: ["loading"],
    created() {
        this.$emit("loading", false);
    }
}
</script>

<style scoped>
    @media only screen and (min-width: 900px) {
        .chart1{
            margin-left: 200px;
            margin-right: 200px;
            padding-left: 85px;
        }
        .chart2{
            margin-left: 200px;
            margin-right: 200px;
            padding-left: 85px;
        }           
        .title{
             margin-left: 200px !important;
            margin-right: 200px !important;
        }
    }
    .chart1{
        font-size: 18px;
        text-align: center;
        background-color: white;
        /* margin-left: 300px; */
        /* margin-right: 300px; */
        min-height: 400px;
        /* padding-left:84px; */
        /* max-width: 840px; */
        margin-bottom: 0px;
        /* padding: 0px 10px; */
    }
    .chart2{
         font-size: 18px;
        text-align: center;
        background-color: white;
        /* margin-left: 300px; */
        /* margin-right: 300px; */
        min-height: 400px;
        /* padding-left:84px; */
        /* max-width: 840px; */
        margin-bottom: 50px;
        /* padding: 0px 10px; */

    }

</style>