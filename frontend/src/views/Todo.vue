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
        <select
          class="form-select form-select-sm w-100 p-3"
          aria-label=".form-select-sm example"
          v-model="choose"
        >
          <option value="true">Completed</option>
          <option value="false">Uncompleted</option>
        </select>
        <notcompleted
          v-for="data in filtered"
          :key="data.id"
          :data="data"
          @delete="deletetodo"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { getdata } from "@/services";
import { senddata } from "@/services";
import { deletedata } from "@/services";
import notcompleted from "@/components/notcompleted.vue";
export default {
  data() {
    return {
      text: "",
      alldata: [],
      choose: "",
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
        if (a.status == 200) {
          this.alldata.push(a.data);
          this.text = "";
        }
      } catch (e) {
        console.log(e.message);
      }
    },
    async deletetodo(id) {
      try {
        await deletedata.deletetodo(id).then(() => {
          for (let [i, x] of this.alldata.entries()) {
            if (x.id == id) {
              this.alldata.splice(i, 1);
              break;
            }
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  computed: {
    filtered() {
      if (this.choose == "false") this.choose = false;
      if (this.choose == "true") this.choose = true;
      return this.alldata.filter((word) => word.completed == this.choose);
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
select {
  margin-bottom: 10px;
}
</style>