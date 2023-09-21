<script setup>
const router = useRouter();

const statusList = ref([
    {
        type: 'Battery',
        value: "100%"
    },
    {
        type: 'Connectivity',
        value: "50%"
    },
    {
        type: 'Min Speed (RPM)',
        value: "500"
    },
    {
        type: 'Max Speed (RPM)',
        value: "5500"
    },
]);

const handleSpin = () => {
    router.push('/spin');
}
</script>

<template>
    <main class="bg-[#ECECEC] px-3 max-w-md mx-auto lg:py-10 py-3 relative h-[90vh]">
        <header class="flex justify-between items-center">
            <div>
                <h1 class="text-['SF Pro Display'] text-xl font-medium text-[#B3B3B3]">BigFuge</h1>
            </div>
            <div class="w-10 h-10 bg-[#D9D9D9] rounded-full flex items-center justify-center">
                <span class="inline-block text-[#B3B3B3]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21" opacity="0"><animate id="svgSpinnersWifi0" fill="freeze" attributeName="opacity" begin="0;svgSpinnersWifi1.end+0.2s" calcMode="discrete" dur="0.25s" values="0;1"/><animate id="svgSpinnersWifi1" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s" dur="0.001s" values="1;0"/></path><path fill="currentColor" d="M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z" opacity="0"><animate id="svgSpinnersWifi2" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi0.end" calcMode="discrete" dur="0.25s" values="0;1"/><animate fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s" dur="0.001s" values="1;0"/></path><path fill="currentColor" d="M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3" opacity="0"><animate id="svgSpinnersWifi3" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi2.end" calcMode="discrete" dur="0.25s" values="0;1"/><animate fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s" dur="0.001s" values="1;0"/></path></svg>
                </span>
            </div>
        </header>
        <section>
            <div class="mt-5">
                <h2 class="text-[#BDBDBD] font-['SF Pro Display'] text-2xl font-bold tracking-[-3.5] leading-[104.1%]">Good
                    Morning, <br /> James 💫</h2>
            </div>
        </section>
        <section>
            <div class="md:mt-14 mt-10">
                <h4 class="text-2xl text-[#D0D0D0] font-medium">Status</h4>
                <div class="mt-2 grid grid-cols-2 gap-x-2 gap-y-2">
                    <div v-for="status in statusList" :key="status.type"
                        class="bg-[#E0E0E0] rounded-lg md:h-32 h-28 p-2 flex flex-col items-start justify-between">
                        <p class="text-base font-normal tracking-[-3.5%] text-[#B3B3B3]">{{ status.type }}</p>
                        <p class="md:text-6xl text-5xl font-bold tracking-[-3.5%] text-[#B3B3B3]">{{ status.value }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="mt-14">
                <h4 class="text-2xl text-[#D0D0D0] font-medium">Actions</h4>
                <div class="mt-2 flex flex-col gap-y-2">
                    <div class="flex gap-x-2">
                        <div
                            class="bg-[#E0E0E0] text-center text-2xl font-bold tracking-[-3.5] text-[#B3B3B3] px-6 py-4 w-full rounded-lg">
                            Turbo</div>
                        <div
                            class="bg-[#E0E0E0] text-center text-2xl font-bold tracking-[-3.5] text-[#B3B3B3] px-6 py-4 w-full rounded-lg">
                            Presets</div>
                    </div>
                    <div>
                        <button type="button" @click="handleSpin"
                            class="hover:bg-[#e64717] transition duration-300 cursor-pointer py-5 bg-[#e64717] text-center text-2xl font-bold tracking-[-3.5] text-white/90 px-6 w-full rounded-lg">
                            Spin
                            <span class="inline-block align-middle opacity-90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M10.6 22q-1.275 0-1.937-.763T8 19.5q0-.65.288-1.263t.887-1.012q.55-.35.888-.9t.462-1.175l-.3-.15q-.15-.075-.275-.175l-2.3.825q-.425.15-.825.25T6 16q-1.575 0-2.788-1.375T2 10.6q0-1.275.763-1.937T4.474 8q.65 0 1.275.288t1.025.887q.35.55.9.887t1.175.463l.15-.3q.075-.15.175-.275l-.825-2.3q-.15-.425-.25-.825t-.1-.8q0-1.6 1.375-2.813T13.4 2q1.275 0 1.938.763T16 4.474q0 .65-.288 1.275t-.887 1.025q-.55.35-.887.9t-.463 1.175l.3.15q.15.075.275.175l2.3-.85q.425-.15.813-.237T17.975 8Q20 8 21 9.675t1 3.725q0 1.275-.8 1.938T19.425 16q-.625 0-1.213-.288t-.987-.887q-.35-.55-.9-.887t-1.175-.463l-.15.3q-.075.15-.175.275l.825 2.3q.15.4.25.763t.1.762q.025 1.625-1.35 2.875T10.6 22Zm1.4-8.5q.625 0 1.063-.438T13.5 12q0-.625-.438-1.063T12 10.5q-.625 0-1.063.438T10.5 12q0 .625.438 1.063T12 13.5Z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <section class="absolute bottom-5 left-1/2 -translate-x-1/2">
            <p class="text-center text-sm text-[#b3b3b3] opacity-50">BigBiomedical</p>
    </section>
</main></template>