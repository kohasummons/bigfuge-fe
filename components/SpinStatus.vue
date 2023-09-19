<script setup>
const router = useRouter();

const statusList = ref([
    {
        type: 'Duration(Min)',
        value: "4.5"
    },
    {
        type: 'Spin Speed (RPM)',
        value: "500"
    },
    {
        type: 'Connectivity',
        value: "10%"
    },
    {
        type: 'Battery',
        value: "70%"
    }
]);

const handleStop = () => {
    router.push('/');
}
</script>

<template>
    <header class="mt-14">
        <h1 class="text-3xl text-center text-[#B3B3B3] tracking-tight font-medium">Spin</h1>
    </header>
    <section class="w-full">
        <div class="flex items-center justify-center md:py-10 py-8">
            <p class="md:text-[200px] text-[150px] leading-tight text-center text-[#B3B3b3]">
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" fill="#888888" />
                    <g>
                        <circle cx="4" cy="12" r="3" fill="#888888" />
                        <circle cx="20" cy="12" r="3" fill="#888888" />
                        <animateTransform attributeName="transform" calcMode="spline" dur="1s"
                            keySplines=".36,.6,.31,1;.36,.6,.31,1" repeatCount="indefinite" type="rotate"
                            values="0 12 12;180 12 12;360 12 12" />
                    </g>
                </svg>
            </p>
        </div>
        <div class="mt-4 flex flex-row items-center justify-center gap-4">
            <p class="text-[#B3B3B3] text-7xl tracking-tight font-medium">30<span class="text-xl">Min</span></p>
            <p class="text-[#B3B3B3] text-7xl tracking-tight font-medium">43<span class="text-xl">Sec</span></p>
        </div>
    </section>
    <section>
        <div class="md:mt-12 mt-4 grid grid-cols-2 gap-x-2 gap-y-2">
            <div v-for="status in statusList" :key="status.type"
                class="bg-[#E0E0E0] opacity-90 rounded-lg h-32 p-2 flex flex-col items-start justify-between">
                <p class="text-base font-normal tracking-[-3.5%] text-[#B3B3B3]">{{ status.type }}</p>
                <p class="text-6xl tracking-[-3.5%] text-[#B3B3B3]">{{ status.value }}</p>
            </div>
        </div>
</section>
<section>
    <div class="mt-2">
        <button type="button" @click="handleStop"
            class="hover:opacity-90 transition select-none duration-300 cursor-pointer py-4 bg-[#e64717] text-center text-2xl font-bold tracking-[-3.5] text-[#f1f1f1] px-6 w-full rounded-lg">Stop</button>
    </div>
</section></template>