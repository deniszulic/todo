<template>
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
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>