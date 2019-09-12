<template>
  <b-form @submit.prevent="searchTodo" class="mt-4">
    <b-input-group>
      <b-form-input
        type="text"
        v-model="title"
        @input="searchTodo"
        required
        placeholder="Type to search, use advanced syntax for more accurated result."
      ></b-form-input>
      <b-input-group-append>
        <b-button type="submit" variant="info" v-b-tooltip.hover title="Search Todo">
          <font-awesome-icon fas icon="search" />
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </b-form>
</template>

<script>
export default {
  name: 'SearchTodo',
  data() {
    return {
      title: '',
    };
  },
  methods: {
    searchTodo() {
      this.$emit('search', this.title);
    },
  },
};
</script>
