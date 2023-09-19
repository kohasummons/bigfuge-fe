<script setup lang="ts">
const {spinTime_min, spinTime_sec} = useSetSpinner();

const getTimerRange = () => {
    const range = [];

    for(let i = 0; i <= 59; i++ ){
        range.push({
            value: i,
            name: i.toString().padStart(2, '0')
        })
    }

    return range
}

const defaultOptions = computed(() => getTimerRange());
</script>

<template>
    <div class="h-[90vh] flex flex-col justify-between">
        <div>
            <header class="mt-14">
                <h1 class="text-3xl text-center text-[#B3B3B3] tracking-tight font-medium">Set Timer (min, sec)</h1>
            </header>
            <div class="flex flex-row">
                <VueScrollPicker :options="defaultOptions" v-model="spinTime_min" />
                <VueScrollPicker :options="defaultOptions" v-model="spinTime_sec" />
            </div>
        </div>
        <slot name="button"/>
    </div>
</template>

<style>
.vue-scroll-picker{
    @apply h-[350px]
}

/*  Itmems */
.vue-scroll-picker-item{
    @apply text-[#b3b3b3] text-6xl
}


@media (min-width: 768px) {
    .vue-scroll-picker{
        @apply h-[550px]
    }

    .vue-scroll-picker-item{
        @apply text-8xl
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
    opacity: .9;
    transition: all;
    transition-duration: 700ms;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

/* Items after selected */
.vue-scroll-picker-item-selected + .vue-scroll-picker-item {
    color: #b6b6b6;
    opacity: .9;
    transition: all;
    transition-duration: 700ms;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

/* Layers */
.vue-scroll-picker-layer-top{
    border: none;
    height: calc(50% - 3em);
    background: linear-gradient(180deg, #ECECEC 50%,#efececbb);
    backdrop-filter: blur(15);
    -webkit-backdrop-filter: blur(15);
}
.vue-scroll-picker-layer-selection{
    border: none;
}

.vue-scroll-picker-layer-bottom{
    border: none;
    height: calc(50% - 3em);
    background: linear-gradient(0, #ECECEC 10%,#efececbb);
    backdrop-filter: blur(15);
    -webkit-backdrop-filter: blur(15);
}
</style>