<template>
  <div class="nav">
    <h1>Life List</h1>
    <i class="las la-filter"></i>
  </div>
  <router-view/>
</template>

<script>
export default {
  setup(){
  }
}
</script>


<style>
*{
  margin: 0;
  padding: 0;
  font-family: Calibri;
  overflow: hidden;

  --color-a: rgb(53, 53, 53);
  --color-b: rgb(95, 27, 151); 
  --color-b-a: rgb(95, 27, 151, 0.5); 
  --color-c: rgb(0, 0, 0);
  --color-d: rgb(0, 0, 0);
  --color-e: rgb(0, 0, 0);
}
.nav{
  display: flex;
  align-items: center;
  background: var(--color-b);
  height: 40px;
}
.nav h1{
  color: white;
  font-size: 25px;
  margin-left: 10px;
}
.nav i{
  position: absolute;
  right: 10PX;
  font-size: 25px;
  color: white;
}
</style>
