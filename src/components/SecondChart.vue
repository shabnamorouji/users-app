<script>
import { defineComponent } from 'vue'
import { Line } from 'vue3-chart-v2'

export default defineComponent({
  name: 'SecondChart',
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Pull requests',
          backgroundColor: '#198754',
          data: [40, 20, 12, 39, 10, 40, 39, 33, 40, 20, 12, 11]
        }
      ]
    })
  }
})
</script>