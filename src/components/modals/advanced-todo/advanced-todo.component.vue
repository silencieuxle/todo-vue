<template>
  <b-modal id="advancedTodoModal" title="Advanced Todo" @shown="setData">
    <template slot="modal-header">
      <h5>
        <font-awesome-icon fas icon="list-alt"></font-awesome-icon>
        Advanced Todo
      </h5>
      <b-link class="close" @click="close()">
        <font-awesome-icon fas icon="times" />
      </b-link>
    </template>

    <template slot="default">
      <b-form-group label="Title:">
        <b-textarea required :state="formData.title.length > 0" v-model="formData.title"></b-textarea>
        <b-form-invalid-feedback :state="formData.title.trim() !== ''">
          Please enter title (not blanks or empty title)
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label="Due time:">
        <b-row>
          <b-col cols="6">
            <b-form-input type="date" v-model="formData.dueDate"></b-form-input>
          </b-col>
          <b-col cols="6">
            <b-form-input type="time" v-model="formData.dueTime"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group label="Remind me at:">
        <b-row>
          <b-col cols="6">
            <b-form-input type="date" v-model="formData.remindDate"></b-form-input>
          </b-col>
          <b-col cols="6">
            <b-form-input type="time" v-model="formData.remindTime"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>
    </template>

    <template slot="modal-footer">
      <b-button type="button" @click="create" size="sm" variant="success">
        create
      </b-button>
      <b-button size="sm" variant="danger" @click="close()">
        CANCEL
      </b-button>
    </template>
  </b-modal>
</template>

<script src="./advanced-todo.component.js"></script>
<style scoped src="./advanced-todo.component.css"></style>
