import { FormWrapper } from "./FormWrapper";
import { planOptions } from "../utils/planOptions";

type UserPlan = {
    plan: "Arcade" | "Advanced" | "Pro"
    isYearly: boolean,
}

type PlanFormProps = UserPlan & {
    updateFields: (fields: Partial<UserPlan>) => void;
}

export function PlanForm({ plan, isYearly, updateFields }: PlanFormProps) {
    
    return (
        <FormWrapper title="Select your plan" description="You have the option of monthly or yearly billing.">
                <div className="h-[290px] flex flex-col justify-around gap-2 mt-3 lg:h-max lg:flex-row lg:gap-4 lg:mt-10">
                    <label htmlFor="Arcade">
                        <div className={`${plan === 'Arcade' ? "bg-alabaster border border-purple" : 'border'} ${isYearly ? 'h-24 py-4 lg:h-44' : 'h-20 py-3 lg:h-44 lg:py-4'} bg-white flex items-center gap-4 px-4 rounded-md cursor-pointer transition-colors ease-in-out duration-200 lg:w-36 lg:flex-col lg:items-start lg:justify-between`}>
                            <input hidden value="Arcade" checked={plan === "Arcade"} onChange={() => updateFields({ plan: "Arcade" })} type="radio" name="plan" id="Arcade" />
                            <img className={`${isYearly ? 'mb-auto' : ''}`} src="./images/icon-arcade.svg" alt="Arcade" />
                            <div className="flex flex-col">
                                <h3 className="font-bold text-marineBlue text-lg">Arcade</h3>
                                {!isYearly ? <p className="text-coolGray text-sm lg:text-base">{`$${planOptions.Arcade.monthly}/mo`}</p> : <p className="text-coolGray text-sm">{`$${planOptions.Arcade.yearly}/yr`}</p>}
                                {isYearly && <p className="font-medium text-marineBlue text-sm">2 months free</p>}
                            </div>
                        </div>
                    </label>
                    <label htmlFor="Advanced">
                        <div className={`${plan === 'Advanced' ? "bg-alabaster border border-purple" : 'border'} ${isYearly ? 'h-24 py-4 lg:h-44' : 'h-20 py-3 lg:h-44 lg:py-4'} bg-white flex items-center gap-4 px-4 rounded-md cursor-pointer transition-colors ease-in-out duration-200 lg:w-36 lg:flex-col lg:items-start lg:justify-between`}>
                            <input hidden value="Advanced" checked={plan === "Advanced"} onChange={() => updateFields({ plan: "Advanced" })} type="radio" name="plan" id="Advanced" />
                            <img className={`${isYearly ? 'mb-auto' : ''}`} src="./images/icon-advanced.svg" alt="Advanced" />
                            <div className="flex flex-col">
                                <h3 className="font-bold text-marineBlue text-lg">Advanced</h3>
                                {!isYearly ? <p className="text-coolGray text-sm lg:text-base">{`$${planOptions.Advanced.monthly}/mo`}</p> : <p className="text-coolGray text-sm">{`$${planOptions.Advanced.yearly}/yr`}</p>}
                                {isYearly && <p className="font-medium text-marineBlue text-sm">2 months free</p>}
                            </div>
                        </div>
                    </label>
                    <label htmlFor="Pro">
                        <div className={`${plan === 'Pro' ? "bg-alabaster border border-purple" : 'border'} ${isYearly ? 'h-24 py-4 lg:h-44' : 'h-20 py-3 lg:h-44 lg:py-4'} bg-white flex items-center gap-4 px-4 rounded-md cursor-pointer transition-colors ease-in-out duration-200 lg:w-36 lg:flex-col lg:items-start lg:justify-between`}>
                            <input hidden value="Pro" checked={plan === "Pro"} onChange={() => updateFields({ plan: "Pro" })} type="radio" name="plan" id="Pro" />
                            <img className={`${isYearly ? 'mb-auto' : ''}`} src="./images/icon-pro.svg" alt="Pro" />
                            <div className="flex flex-col">
                                <h3 className="font-bold text-marineBlue text-lg">Pro</h3>
                                {!isYearly ? <p className="text-coolGray text-sm lg:text-base">{`$${planOptions.Pro.monthly}/mo`}</p> : <p className="text-coolGray text-sm">{`$${planOptions.Pro.yearly}/yr`}</p>}
                                {isYearly && <p className="font-medium text-marineBlue text-sm">2 months free</p>}
                            </div>
                        </div>
                    </label>
                </div>
                <div className="bg-alabaster flex justify-center rounded-lg mt-6 py-3 lg:mt-8">
                    <p className={`${!isYearly ? 'text-marineBlue' : 'text-coolGray'} font-bold`}>Monthly</p>
                    <label>
                        <input className="sr-only" type="checkbox" checked={isYearly} onChange={e => updateFields({ isYearly: e.target.checked })}></input>
                        <span className="bg-marineBlue w-[42px] h-[23px] flex items-center rounded-full mx-5 my-[.045rem] p-1 cursor-pointer duration-200">
                            <span className={`bg-white w-[14px] h-[14px] rounded-full mb-[.045rem] ${isYearly ? 'translate-x-5' : ''} duration-200`}></span>
                        </span>
                    </label>
                    <p className={`${!isYearly ? 'text-coolGray' : 'text-marineBlue'} font-bold`}>Yearly</p>
                </div>
        </FormWrapper>
    )
}