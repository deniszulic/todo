<template>
  <div class="container">
    <div class="center col-6">
      <div class="shadow p-3 mb-5 bg-white rounded">
        <div class="p-3 mb-2 bg-primary text-white size">Todo</div>
        <form @submit.prevent="senddata">
          <div class="form-row">
            <div class="form-group col-md-10">
              <input
                type="text"
                class="form-control"
                placeholder="Add a task"
                v-model="text"
              />
            </div>
            <div class="form-group col-md-2">
              <button type="submit" class="btn btn-primary form-control">
                <i class="fa-solid fa-check"></i>
              </button>
            </div>
          </div>
        </form>
        <notcompleted v-for="data in alldata" :key="data.id" :data="data" />
      </div>
    </div>
  </div>
</template>
<script>
import { getdata } from "@/services";
import { senddata } from "@/services";
import notcompleted from "@/components/notcompleted.vue";
export default {
  data() {
    return {
      text: "",
      alldata: [],
    };
  },
  components: {
    notcompleted,
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    async fetchData() {
      try {
        this.alldata = await getdata.getalldata();
      } catch (e) {
        console.log(e.message);
      }
    },
    async senddata() {
      let data = {
        text: this.text,
        completed: false,
      };
      try {
        let a = await senddata.putdata(data);
        this.alldata.push(a.data);
        this.text = "";
        //console.log(a.data)
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
</script>
<style scoped>
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.size {
  font-size: 30px;
}
</style>