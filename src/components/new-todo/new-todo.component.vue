<template>
  <div>
    <b-form @submit.prevent="create" class="mt-4">
      <b-input-group>
        <b-form-input
          aria-describedby="input-feedback"
          type="text"
          v-model.trim="title"
          :state="title.trim() !== ''"
          required
          placeholder="Enter Todo title, or click Advanced Todo for more options."
        ></b-form-input>
        <b-input-group-append>
          <b-button type="submit" variant="primary" v-b-tooltip.hover.left title="Create">
            <font-awesome-icon fas icon="plus" />
          </b-button>
          <b-button type="button" @click="openAdvancedModal" variant="info" v-b-tooltip.hover.left title="Open Advanced Todo Dialog">
            <font-awesome-icon fas icon="external-link-alt" />
          </b-button>
        </b-input-group-append>
      </b-input-group>
      <b-form-invalid-feedback :state="title.trim() !== ''">
        Please enter title (not blanks or empty title)
      </b-form-invalid-feedback>
    </b-form>
    <AdvancedTodoModal :newTitle="title" />
  </div>
</template>

<script src="./new-todo.component.js"></script>
<style scoped src="./new-todo.component.css"></style>
