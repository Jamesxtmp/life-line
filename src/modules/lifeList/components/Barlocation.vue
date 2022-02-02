<template>
    <div class="warp-barlocation">
        <div 
            class="bar-left"
            @click="buttonLeft"
        >
            <i class="las la-angle-left"></i>
        </div>
        <div class="bar-center">
            <span> {{ 'Titulo' }} </span>
        </div>
        <div class="bar-right"
            @click="buttonRight"
        >
            <i class="las la-angle-right"></i>
        </div>
    </div>
</template>

<script>

export default {
    setup(){

        return{
            
        }
    }
}
</script>

<style scopued>
.warp-barlocation{
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    background-color: var(--color-b-a);
    color: rgba(255, 255, 255, 0.5);
    align-items: center;
    height: 25px;
}
.bar-left, .bar-center, .bar-right{
    width: calc(100% / 3);
    text-align: center;
}
.bar-center{
    font-weight: bold;
}
.bar-right i{
    display: none;
}
</style>