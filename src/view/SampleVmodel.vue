<template>

  <input v-model="name">

  <h2>Hello {{ name }}</h2>

</template>

 

<script>

export default {

  data() {

    return {

      name: ""

    }

  }

}

</script>