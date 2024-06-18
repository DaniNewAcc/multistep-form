import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function nextStep() {
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) {
                return i
            } else {
                return i + 1
            }
        })
        
    }


    function prevStep() {
        setCurrentStepIndex(i => {
            if (i <= 0) {
                return i
            } else {
                return i - 1;
            }
        })
        
    }


    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        prevStep,
        nextStep,
    }
}