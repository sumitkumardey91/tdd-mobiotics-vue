<template>
  <div>
    <h1>{{title}}</h1>
    <button type="button" @click="ok" id="iambutton">ok</button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: "vLive"
    }
  },
  methods: {
    ok () {
      this.title = "welcome"
    }
  }
}
</script>

<style>

</style>
