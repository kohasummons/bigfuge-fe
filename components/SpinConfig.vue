<script setup>
const router = useRouter();
const spinStatus = resolveComponent('SpinStatus');
const setSpeed = resolveComponent('SetSpeed');
const setTimer = resolveComponent('SetTimer');

const {activeIndex, back, next, isFirstComponent, isSecondComponent} = useSetSpinner();

const spinnerSettingsComponents = [
    setSpeed,
    setTimer,
    spinStatus
]

const activeComponent = computed(()=> spinnerSettingsComponents[activeIndex.value]);

const handleCancel = () => {
    router.push('/')
}
</script>
<template>
    <component :is="activeComponent" >
        <template #button>
            <div class="flex justify-center gap-2">
                <button v-show="isFirstComponent" @click="handleCancel" type="button" class="hover:bg-[#E5E5E5] transition duration-300 cursor-pointer py-3 bg-[#E0E0E0] text-center text-2xl font-bold tracking-[-3.5] text-[#B3B3B3] px-10 rounded-lg">Cancel</button>
                <button v-show="isSecondComponent" @click="back" type="button" class="hover:bg-[#E5E5E5] transition duration-300 cursor-pointer py-3 bg-[#E0E0E0] text-center text-2xl font-bold tracking-[-3.5] text-[#B3B3B3] px-10 rounded-lg">Back</button>
                <button v-show="!isSecondComponent" @click="next" type="button" class="hover:bg-[#E5E5E5] transition duration-300 cursor-pointer py-3 bg-[#E0E0E0] text-center text-2xl font-bold tracking-[-3.5] text-[#B3B3B3] px-10 rounded-lg">Next</button>
                <button v-show="isSecondComponent " @click="next" type="button" class="hover:bg-[#e64717] hover:text-white transition duration-300 cursor-pointer py-3 bg-[#999999] text-center text-2xl font-bold tracking-[-3.5] text-[#f1f1f1] px-10 rounded-lg">Spin</button>
            </div>
        </template>
    </component>
</template>