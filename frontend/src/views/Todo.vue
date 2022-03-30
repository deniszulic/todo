<template>
  <div class="container">
    <div class="center col-6">
      <div class="shadow p-3 mb-5 bg-white rounded">
        <div class="p-3 mb-2 bg-primary text-white size">Todo</div>
        <div class="form-row">
          <div class="form-group col-md-10">
            <input type="text" class="form-control" placeholder="Add a task" />
          </div>
          <div class="form-group col-md-2">
            <button type="submit" class="btn btn-primary form-control">
              <i class="fa-solid fa-check"></i>
            </button>
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </div>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with checkbox"
          />
        </div>
      </div>
    </div>
  </div>
</template>
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