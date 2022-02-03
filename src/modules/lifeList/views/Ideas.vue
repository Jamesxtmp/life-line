<template>
  <div class="main-wrap">
    <Barlocation/>
    <ScollingIdeas/>
  </div>
</template>

<script>
import Barlocation from "../components/Barlocation"
import ScollingIdeas from "../components/ScollingIdeas"

export default {
  components: {
    Barlocation,
    ScollingIdeas,
  }
}
</script>

<style scoped>
.main-wrap{
  height: calc( 100vh - 40px );
}

</style>