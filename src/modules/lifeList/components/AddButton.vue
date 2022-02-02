<template>
    <div class="options-plus">
        <span class="futuro">Futuro</span>
        <span class="hoy">Hoy</span>
        <span class="pasado">Pasado</span>
    </div>

    <button>
        <i class="las la-plus"></i>
    </button>
</template>

<script>
export default {

}
</script>

<style scoped>
button{
    position: absolute;
    bottom: 20px;
    right: 20px;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--color-b);
}
button i{
    font-size: 30px;
    color: white;
}
.options-plus{
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 80px;
    right: 20px;
}
.options-plus span{
    text-align: center;
    background-color: var(--color-b);
    border-radius: 10px;
    padding: 5px 15px;
    margin: 4px 0;
    color: white;
}
.hoy{
    font-size: 20px;
}
</style>