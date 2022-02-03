<template>
  <div class="main-wrap">
    <Barlocation/>
    <ScrollingDays/>
  </div>
</template>

<script>
import Barlocation from "../components/Barlocation"
import ScrollingDays from "../components/ScrollingDays"

export default {
  components: {
    Barlocation,
    ScrollingDays,
  }
}
</script>

<style scoped>
.main-wrap{
  height: calc( 100vh - 40px );
}

</style>