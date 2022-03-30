<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <div class="input-group-text">
        <input
          type="checkbox"
          aria-label="Checkbox for following text input"
          v-model="data.completed"
          @change="changecheckbox"
        />
      </div>
    </div>
    <input
      v-if="data.completed == true"
      style="text-decoration: line-through"
      type="text"
      class="form-control bg-success"
      aria-label="Text input with checkbox"
      id="inputtext"
      v-model="data.text"
      @change="onChange"
    />
    <input
      v-else
      type="text"
      class="form-control"
      aria-label="Text input with checkbox"
      id="inputtext"
      v-model="data.text"
      @change="onChange"
    />
    <div class="d-flex justify-content-end">
      <button
        type="submit"
        class="btn btn-warning form-control"
        @click="$emit('delete', data.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>
<script>
import { updatedata } from "@/services";
export default {
  props: ["data"],
  methods: {
    async onChange() {
      let update = {
        text: this.data.text,
      };
      try {
        await updatedata.updatetxt(this.data.id, update);
      } catch (e) {
        console.log(e);
      }
    },
    async changecheckbox() {
      if (this.data.completed == true) {
        let update = {
          completed: this.data.completed,
        };
        try {
          await updatedata.update(this.data.id, update);
        } catch (e) {
          console.log(e);
        }
      } else {
        let update = {
          completed: this.data.completed,
        };
        try {
          await updatedata.update(this.data.id, update);
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
};
</script>