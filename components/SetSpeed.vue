<script setup lang="ts">
const {spinRPM} = useSetSpinner();
const getRPMRange = () => {
    const range = [];

    for(let i = 500; i <= 6000; i+= 50){
        range.push({
            value: i,
            name: i.toString()
        })
    }

    return range
}

const defaultOptions = computed(() => getRPMRange());

</script>

<template>
    <div class="h-[90vh] flex flex-col justify-between">
        <div>
            <header class="md:mt-14 mt-8">
                <h1 class="text-3xl text-center text-[#B3B3B3] tracking-tight font-medium">Set Speed (RPM)</h1>
            </header>
            <div>
                <VueScrollPicker :options="defaultOptions" v-model="spinRPM" />
            </div>
        </div>
        <slot name="button"/>
    </div>
</template>

<style>
.vue-scroll-picker{
    @apply h-[450px]
}

/*  Itmems */
.vue-scroll-picker-item{
    @apply text-[#b3b3b3] text-5xl
}


@media (min-width: 768px) {
    .vue-scroll-picker{
        @apply h-[550px]
    }

    .vue-scroll-picker-item{
        @apply text-8xl
    }

    .vue-scroll-picker-layer-top{
        height: calc(50% - 3em)!important;
    }

    .vue-scroll-picker-layer-bottom{
        height: calc(50% - 3em)!important;
    }    
 }


.vue-scroll-picker-item-selected{
    transform: scale(1.15);
    transition: all;
    transition-duration: 700ms;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

/* Items before selected */
.vue-scroll-picker-item:has(+ .vue-scroll-picker-item-selected){
    color: #b6b6b6;
    opacity: .8;
    transition: all;
    transition-duration: 700ms;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

/* Items after selected */
.vue-scroll-picker-item-selected + .vue-scroll-picker-item {
    color: #b6b6b6;
    opacity: .8;
    transition: all;
    transition-duration: 700ms;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

/* Layers */
.vue-scroll-picker-layer-top{
    border: none;
    height: calc(50% - 2.5em) !important;
    background: linear-gradient(180deg, #ECECEC 50%,#efececbb);
    backdrop-filter: blur(15);
    -webkit-backdrop-filter: blur(15);
}
.vue-scroll-picker-layer-selection{
    border: none;
}

.vue-scroll-picker-layer-bottom{
    border: none;
    height: calc(50% - 2.5em)!important;
    background: linear-gradient(0, #ECECEC 10%,#efececbb);
    backdrop-filter: blur(15);
    -webkit-backdrop-filter: blur(15);
}
</style>