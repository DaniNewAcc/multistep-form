import { FormWrapper } from "./FormWrapper";

type UserInfo = {
    fullName: string,
    emailAddress: string
    phoneNumber: string
    nameError: string
    emailError: string
    phoneError: string
    setNameError: React.Dispatch<React.SetStateAction<string>>
    setEmailError: React.Dispatch<React.SetStateAction<string>>
    setPhoneError: React.Dispatch<React.SetStateAction<string>>
}

type InfoFormProps = UserInfo & {
    updateFields: (fields: Partial<UserInfo>) => void;
}

export function InfoForm({ fullName, emailAddress, phoneNumber, nameError, emailError, phoneError, setNameError, setEmailError, setPhoneError, updateFields }: InfoFormProps) {
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (!value.trim()) {
            setNameError('This field is required')
        } else {
            setNameError('')
        }
        updateFields({ fullName: value})
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (!value.trim()) {
            setEmailError('This field is required')
        } else {
            setEmailError('')
        }
        updateFields({ emailAddress: value})
    }
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (!value.trim()) {
            setPhoneError('This field is required')
        } else {
            setPhoneError('')
        }
        updateFields({ phoneNumber: value})
    }
    
    return (
        <FormWrapper title="Personal info" description="Please provide your name, email address, and phone number.">
            <div className="flex justify-between items-end">
                <label className="font-medium text-marineBlue text-start text-sm mt-4 mb-[.075rem] lg:text-base lg:mt-10 lg:mb-[.5rem]">Name</label>
                {nameError && <small className="font-bold text-red mb-[.075rem] lg:mb-[.5rem]">{nameError}</small>}
            </div>
            <input className={`${nameError ? 'border-red focus:border-red' : 'focus:border-purple'} font-bold text-marineBlue rounded-md border border-lightGray ps-5 py-2 focus:bg-alabaster focus:outline-none focus:ring-0 placeholder:font-medium`} autoFocus type="text" placeholder="e.g. Stephen King" value={fullName} onChange={handleNameChange} />
            <div className="flex justify-between items-end">
                <label className="font-medium text-marineBlue text-start text-sm mt-4 mb-[.075rem] lg:text-[.905rem] lg:mt-6 lg:mb-[.5rem]">Email Address</label>
                {emailError && <small className="font-bold text-red mb-[.075rem] lg:mb-[.5rem]">{emailError}</small>}
            </div>
            <input className={`${emailError ? 'border-red focus:border-red' : 'focus:border-purple'} font-bold text-marineBlue rounded-md border border-lightGray ps-5 py-2 focus:bg-alabaster focus:border-purple focus:outline-none focus:ring-0 placeholder:font-medium`} type="email" placeholder="e.g. stephenking@lorem.com" value={emailAddress} onChange={handleEmailChange} />
            <div className="flex justify-between items-end">
                <label className="font-medium text-marineBlue text-start text-sm mt-4 mb-[.075rem] lg:text-[.905rem] lg:mt-6 lg:mb-[.5rem]">Phone Number</label>
                {phoneError && <small className="font-bold text-red mb-[.075rem] lg:mb-[.5rem]">{phoneError}</small>}
            </div>
            <input className={`${phoneError ? 'border-red focus:border-red' : 'focus:border-purple'} font-bold text-marineBlue rounded-md border border-lightGray mb-2 ps-5 py-2 focus:bg-alabaster focus:border-purple focus:outline-none focus:ring-0 placeholder:font-medium lg:mb-12`} type="tel" placeholder="e.g. +1 234 567 890" value={phoneNumber} onChange={handlePhoneChange}/>
        </FormWrapper>
    )
}
