import { InfoForm } from './components/InfoForm'
import { AddOnsForm } from './components/AddOnsForm'
import { PlanForm } from './components/PlanForm'
import { useMultiStepForm } from './hooks/useMultiStepForm'
import { SummaryForm } from './components/SummaryForm'
import { FormEvent, useLayoutEffect, useState } from 'react'
import ConfirmMsg from './components/ConfirmMsg'


type FormData = {
  fullName: string,
  emailAddress: string,
  phoneNumber: string,
  plan: "Arcade" | "Advanced" | "Pro"
  isYearly: boolean,
  isOnlineService: boolean,
  isLargerStorage: boolean,
  isCustomizableProfile: boolean,
}


const INITIAL_DATA: FormData = {
  fullName: "",
  emailAddress: "",
  phoneNumber: "",
  plan: "Arcade",
  isYearly: false,
  isOnlineService: false,
  isLargerStorage: false,
  isCustomizableProfile: false,
}

const stepInfo = ["your info", "select plan", "add-ons", "summary"]


function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [largerScreen, setIsLargerScreen] = useState(window.innerWidth > 1024);
  const [showThankYouMsg, setShowThankYouMsg] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const { currentStepIndex, step, isFirstStep, isLastStep, nextStep, prevStep } = 
  useMultiStepForm([<InfoForm {...data} nameError={nameError} emailError={emailError} phoneError={phoneError} setNameError={setNameError} setEmailError={setEmailError} setPhoneError={setPhoneError} updateFields={updateFields} />, <PlanForm {...data} updateFields={updateFields} />, <AddOnsForm {...data} updateFields={updateFields} />, <SummaryForm {...data} updateFields={updateFields} /> ])


  useLayoutEffect(() => {
    const resizeHandler = () => {
      setIsLargerScreen(window.innerWidth > 1024);
    }
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, [])

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  function validateName(fullName: string) {
    let isNameValid = true;
    const fullNameRegex = /^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01FF]+([ \-']{0,1}[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01FF]+){0,2}[.]{0,1}$/
    setNameError('');
    if (fullName === '') {
      setNameError('This field is required');
      isNameValid = false;
      return isNameValid;
    }
    if (!fullNameRegex.test(fullName)) {
      setNameError('Name is not valid');
      isNameValid = false;
      return isNameValid;
    }
    return isNameValid;
  }

  function validateEmail(emailAddress: string) {
    let isEmailValid = true;
    const emailRegex = (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    setEmailError('');
    if (emailAddress === '') {
      setEmailError('This field is required');
      isEmailValid = false;
      return isEmailValid;
    }

    if (!emailRegex.test(emailAddress)) {
      setEmailError('Email is incorrect');
      isEmailValid = false;
      return isEmailValid;
    }
    return isEmailValid;
  }


  function validateNumber(phoneNumber: string) {
    let isPhoneValid = true;
    const phoneRegex = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/
    // /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ optional regex
    setPhoneError('');
    if (phoneNumber === '') {
      setPhoneError('This field is required');
      isPhoneValid = false;
      return isPhoneValid;
    }
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError('Phone number is not valid');
      isPhoneValid = false;
      return isPhoneValid;
    }
    return isPhoneValid;
  }

  


  function onSubmit(e: FormEvent) {
    e.preventDefault();
    
    const isNameValid = validateName(data.fullName);
    const isEmailValid = validateEmail(data.emailAddress);
    const isPhoneValid = validateNumber(data.phoneNumber);
    if (isNameValid && isEmailValid && isPhoneValid && !isLastStep) {
      return nextStep()
    }
    if (isLastStep) {
      setShowThankYouMsg(true);
      setIsBtnDisabled(true);
    }
  }

  const prevStepHandler = () => {
    prevStep();
  }

  return (
    <div className='bg-white mx-4 px-0 lg:flex lg:gap-12 lg:rounded-xl lg:p-4'>
      <div className='bg-sidebar-mobile bg-no-repeat bg-cover bg-center h-[172px] absolute top-0 right-0 left-0 lg:bg-sidebar-desktop lg:w-[290px] lg:h-[625px] lg:relative lg:top-0 lg:right-0 lg:left-0 lg:z-0 lg:rounded-xl'>
        <div className='flex justify-center gap-[.875rem] lg:flex-col lg:mt-6 lg:ms-4'>
          {stepInfo.map((stp, idx) => {
            return (
              <div key={stp} className='flex items-center lg:gap-4 lg:mt-4 lg:ms-3'>
                <div className={`${currentStepIndex === idx ? 'bg-light-blue text-black' : 'bg-transparent text-white' } font-medium w-8 h-8 my-10 py-[.095rem] border rounded-full lg:w-9 lg:h-9 lg:my-0 lg:py-1`}>{idx + 1}</div>
                {largerScreen && <div className="flex flex-col text-start">
                  <small className='text-lightGray'>STEP {idx + 1}</small>
                  <p className=' font-bold text-white text-sm tracking-[1px]'>{stp.toUpperCase()}</p>
                </div>}
              </div>
          )})}
        </div>
      </div>
      <form className='absolute top-[6.2rem] right-4 left-4 lg:mx-12 lg:py-6 lg:relative lg:top-0 lg:right-4 lg:left-0' onSubmit={onSubmit}>
      {showThankYouMsg 
        ? <ConfirmMsg />
        : <> {step}
            <footer className='bg-white w-screen fixed bottom-0 right-0 flex px-4 lg:bg-transparent lg:w-full lg:absolute lg:right-2'>
              {!isFirstStep && <button className='bg-transparent text-coolGray text-[.925rem] transition-all ease-in-out duration-200 hover:text-marineBlue lg:px-[1.1rem] lg:text-base' type='button' onClick={prevStepHandler}>Go Back</button>}
              {!isLastStep 
              ? <button className='bg-marineBlue font-medium text-white text-[.875rem] tracking-wide rounded-[.235rem] ms-auto my-4 me-[.1rem] px-4 py-[.6rem] transition-colors ease-in-out duration-200 hover:bg-marineBlueHover lg:rounded-[.435rem] lg:px-[1.6rem] lg:py-[.8rem]' type='submit'>Next Step</button> 
              : <button disabled={isBtnDisabled} className='bg-purple font-medium text-white text-[.875rem] tracking-wide rounded-[.235rem] ms-auto me-[.1rem] my-4 px-[1.4rem] py-[.6rem] transition-colors ease-in-out duration-200 disabled:opacity-75 lg:rounded-[.435rem] lg:px-8 lg:py-[.8rem]' type='submit'>Confirm</button>
              }
            </footer>
          </>
      }
      </form>
    </div>
  )
}

export default App
