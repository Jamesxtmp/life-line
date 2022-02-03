<template>
    <div class="warp-barlocation">
        <div 
            class="bar-left"
            @click="buttonLeft"
        >
            <i
                class="las la-angle-left"
                v-if="arrowLeft"
            >
            </i>
        </div>
        <div class="bar-center">
            <span> {{ title}} </span>
        </div>
        <div class="bar-right"
            @click="buttonRight"
        >
            <i
                class="las la-angle-right"
                v-if="arrowRight"
            >
            </i>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRoute, useRouter } from "vue-router";

export default {
    setup(){
        const route = useRoute()
        const router = useRouter()

        const arrowLeft = ref(false)
        const arrowRight = ref(false)
        const title = ref('Titulo')
        
        const stateBarLocation = () => {
            if( route.fullPath == '/days' ){
                // console.log('days')
                arrowLeft.value = true
                arrowRight.value = false
                title.value = 'Dias'
            }else{
                // console.log('ideas')
                arrowLeft.value = false
                arrowRight.value = true
                title.value = 'Ideas'
            }
        }
        stateBarLocation()

        return{
            arrowLeft,
            arrowRight,
            title,

            buttonLeft: () => {
                router.push( { path: '/ideas' } )
                stateBarLocation()
            },
            buttonRight: () => {
                router.push( { path: '/days' } )
                stateBarLocation()
            },
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
</style>