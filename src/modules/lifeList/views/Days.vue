<template>
  <div class="main-wrap">
    <Barlocation/>
    <ScrollinDays/>
  </div>
</template>

<script>
import Barlocation from "../components/Barlocation"
import ScrollinDays from "../components/ScrollinDays"

export default {
  components: {
    Barlocation,
    ScrollinDays,
  }
}
</script>

<style scoped>
.main-wrap{
  height: calc( 100vh - 40px );
}

</style>