<template>
  <div>
    <header class="masthead text-center text-white">
      <div class="masthead-content">
        <div class="container">
          <h1 class="masthead-heading mb-0">Features</h1>
        </div>
      </div>
      <div class="bg-circle-1 bg-circle"></div>
      <div class="bg-circle-2 bg-circle"></div>
      <div class="bg-circle-3 bg-circle"></div>
      <div class="bg-circle-4 bg-circle"></div>
    </header>
    <section class="after-loop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-8 mb-5 mb-lg-0 mx-auto">
            <a href="https://vuejs.org" class="after-loop-item card border-0 card-templates shadow-lg">
              <div class="card-body d-flex align-items-end flex-column text-right">
                <h4>VueJS</h4>
                <p class="w-75">The Progressive JavaScript Framework</p>
                <font-awesome-icon fas icon="pencil-ruler"></font-awesome-icon>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-md-8 mx-auto">
            <a href="https://bootstrap-vue.js.org" class="after-loop-item card border-0 card-guides shadow-lg">
              <div class="card-body d-flex align-items-end flex-column text-right">
                <h4>Bootstrap</h4>
                <p class="w-75">Designed with Bootstrap 4 and BootstrapVue.</p>
                <font-awesome-icon fas icon="book"></font-awesome-icon>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-md-8 mb-5 mb-lg-0 mx-auto">
            <a href="https://github.com/silencieuxle/todo-vue" class="after-loop-item card border-0 card-snippets shadow-lg">
              <div class="card-body d-flex align-items-end flex-column text-right">
                <h4>Download</h4>
                <p class="w-75">Download Source on GitHub. It's free!</p>
                <font-awesome-icon fas icon="code"></font-awesome-icon>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<style scoped src="./download.view.css"></style>
