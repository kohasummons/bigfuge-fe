<script setup>
import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();
const confettiConfig = {
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
}


onMounted(() => {
    jsConfetti.addConfetti(confettiConfig);
})

useHead({
  link: [
    { rel: "preload", as: "image", href: "/spin-completed-image.png" }
  ]
})

const router = useRouter();
const { spinRPM, spinTime_min, spinTime_sec, setActiveIndex } = useSetSpinner();

const handleGoHome = () => {
    setActiveIndex(0);
    router.push('/');
}

const handleNavigatetoSpin = () => {
    setActiveIndex(0);
    router.push('/spin');
}
</script>

<template>
    <main class="bg-[#ECECEC] px-3 max-w-md mx-auto lg:py-10 py-3 h-[95vh] relative">
        <div class="relative h-[80vh] flex flex-col justify-between">
        <header class="flex justify-between items-center">
            <div>
                <h1 class="text-['SF Pro Display'] text-xl font-medium text-[#B3B3B3]"></h1>
            </div>
        </header>
        <section>
            <div class="select-none">
                <div class="mb-16"><img src="/spin-completed-image.png" alt="Spin Completed"></div>
                <h2 class=" text-4xl font-bold text-[#f55f45] text-center">Spin Completed.</h2>
                <p class="text-base mt-2 text-center text-[#b3b3b3dc]">Woohoo! BigFuge spun your sample at <br /> {{ spinRPM.value }} RPM for {{ spinTime_min.value }} Min {{ spinTime_sec.value }} seconds.</p>
            </div>
        </section>
        <section>
            <div class="pt-30">
                <div class="mt-2 flex flex-col gap-y-2">
                    <div>
                        <button type="button" @click="handleNavigatetoSpin"
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
                    <div class="flex gap-x-2">
                        <div
                            @click="handleGoHome"
                            class="cursor-pointer text-center underline text-xl font-base tracking-[-3.5] text-[#B3B3B3] px-6 py-4 w-full rounded-lg">
                            Go Home</div>
                    </div>
                </div>
            </div>
        </section>
        
</div>
<section class="absolute bottom-0 left-1/2 -translate-x-1/2">
            <p class="text-center text-sm text-[#b3b3b3] opacity-50">BigBiomedical</p>
    </section>
</main>
</template>