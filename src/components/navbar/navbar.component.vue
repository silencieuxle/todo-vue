<template>
  <b-navbar toggleable="lg" type="dark" id="mainNav" fixed="top" class="navbar-custom">
    <b-container>
      <b-navbar-brand to="/">Todo</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" class="text-uppercase bg-primary text-white">
        <font-awesome-icon fas icon="bars" />
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-for="item in menus" :key="item.id" :to="item.route">{{ item.title }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script src="./navbar.component.js"></script>
<style scoped src="./navbar.component.css"></style>
