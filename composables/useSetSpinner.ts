const spinRPM = ref({ value: 800, name: '800' });
const spinTime_min = ref({ value: 10, name: '10' });
const spinTime_sec = ref({ value: 10, name: '10' });
const activeIndex = ref(0);

export const useSetSpinner = () => {
    const spinnerSettingsComponentsList = [
        'setSpeed',
        'setTimer',
        'spinStatus'
    ]

    const isFirstComponent = computed(()=>activeIndex.value === 0)
    const isSecondComponent = computed(()=>activeIndex.value === 1)
    const isLastComponent = computed(()=>activeIndex.value === spinnerSettingsComponentsList.length - 1)

    const next = () => {
        if(activeIndex.value >= spinnerSettingsComponentsList.length - 1){
            activeIndex.value = spinnerSettingsComponentsList.length - 1
        }
        activeIndex.value++ 
        console.log(activeIndex.value)
    }

    const back = () => {
        if(activeIndex.value <= 0){
            activeIndex.value
        }
        activeIndex.value--
        console.log(activeIndex.value)
    }

    const setActiveIndex = (index: number) => {
        activeIndex.value = index;
    }

    return {
        spinRPM,
        spinTime_min,
        spinTime_sec,
        activeIndex,
        isFirstComponent,
        isSecondComponent,
        isLastComponent,
        back,
        next,
        setActiveIndex
    }
}