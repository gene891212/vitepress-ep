
# Hello World

<HelloWorld />




<el-row class="mb-4">
  <el-button disabled>Default</el-button>
  <el-button red type="primary" disabled>Primary</el-button>
  <el-button type="success" disabled>Success</el-button>
  <el-button type="info" disabled>Info</el-button>
  <el-button type="warning" disabled>Warning</el-button>
  <el-button type="danger" disabled>Danger</el-button>
</el-row>

<el-row>
  <el-button  >Plain</el-button>
  <el-button type="primary"  >Primary</el-button>
  <el-button type="success"  >Success</el-button>
  <el-button type="info"  >Info</el-button>
  <el-button type="warning"  >Warning</el-button>
  <el-button type="danger"  >Danger</el-button>
</el-row>
<el-table :data="tableData" style="width: 100%">
  <el-table-column prop="date" label="Date" width="180" />
  <el-table-column prop="name" label="Name" width="180" />
  <el-table-column prop="address" label="Address" />
</el-table>

<Player />

<script lang="ts" setup>
import Player from "./components/songLyrics/Player.vue"

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>


