<template>
  <div class="bg-secondary">
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div
          class="col-xl-4 col-bg-4 col-md-4 col-sm-12 pbelow"
          style="color: white;"
        >
          <span>{{ new Date().getFullYear() }} / Jose Duarte</span>
        </div>

        <div id="text" class="col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center" style="color: white">
          <p class="m-0">Desarrollado con &#x2764;&#xFE0F; & con <img :src="logo" style="width: 15px"> </p>
        </div>

        <div class="col-xl-4 col-bg-4 col-md-4 col-sm-12">
          <div class="text-center">
            <button
              class="btn btn-outline-secondary mx-2 "
              @click="open('linkedin')"
            >
              <i class="fab fa-linkedin"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('github')"
            >
              <i class="fab fa-github"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('resume')"
            >
              <i class="fa fa-file"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Footer",
  data() {
    return {
      linkedin: info.links.linkedin,
      github: info.links.github,
      resume: info.links.resume,
      logo: info.logo_vue
    };
  },
  methods: {
    open(link) {
      switch (link) {
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>
span {
  font-weight: 500;
}

.btn {
  border-color: white;
  color: white;
}

.btn:hover {
  background-color: white;
  border-color: white;
  color: gray;
}

.btn:focus {
  background-color: white;
  border-color: white;
  color: gray;
}

@media screen and (max-width: 580px) {
  .pbelow {
    padding-bottom: 20px;
    text-align: center;
  }
  #text{
    margin-bottom: 18px
  }

}
</style>
