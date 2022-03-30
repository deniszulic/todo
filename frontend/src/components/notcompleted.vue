<template>
  <!-- <div class="d-flex justify-content-between"> -->
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <div class="input-group-text">
        <input
          type="checkbox"
          aria-label="Checkbox for following text input"
          v-model="data.completed"
        />
      </div>
    </div>
    <input
      type="text"
      class="form-control"
      aria-label="Text input with checkbox"
      v-model="data.text"
    />
    <div class="d-flex justify-content-end">
      <button
        type="submit"
        class="btn btn-primary form-control"
        @click="$emit('delete', data.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>