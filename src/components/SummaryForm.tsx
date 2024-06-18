import { FormWrapper } from "./FormWrapper";
import { Addons, planOptions } from "../utils/planOptions";

type UserSummary = {
  plan: "Arcade" | "Advanced" | "Pro"
  isYearly: boolean,
  isOnlineService: boolean,
  isLargerStorage: boolean,
  isCustomizableProfile: boolean,
}

type SummaryFormProps = UserSummary & {
  updateFields: (fields: Partial<UserSummary>) => void;
}


export function SummaryForm({ plan, isYearly, isOnlineService, isLargerStorage, isCustomizableProfile, updateFields }: SummaryFormProps) {
  const planCost = !isYearly ? planOptions[plan].monthly : planOptions[plan].yearly;
  

  const addonsCost = [isCustomizableProfile, isLargerStorage, isOnlineService].reduce((acc, addOn, idx) => {
    if (!addOn) return acc;
    const selectableAddons = ["customizableProfile", "largerStorage", "onlineService"][idx] as "customizableProfile" | "largerStorage" | "onlineService";
    const selectedPlan = !isYearly ? "monthly" : "yearly";
    const selectedAddons = Addons[selectableAddons][selectedPlan];
    return acc + selectedAddons;
  }, 0)

  
  return (
    <FormWrapper title="Finishing up" description="Double-check everything looks OK before confirming">
      <div className="bg-alabaster rounded-xl flex flex-col gap-4 mt-6 mb-4 pb-4 lg:mt-10">
        <div className="flex justify-between items-center border-b mx-4 py-4">
          <div className="lg:mb-2">
            <p className="font-bold text-marineBlue text-lg">{`${plan} ${isYearly ? '(Yearly)' : '(Monthly)'}`}</p>
            <button className="text-coolGray underline hover:text-purple" type="button" onClick={() => updateFields({ isYearly: !isYearly})}>Change</button>
          </div>
          <p className="font-bold text-marineBlue lg:text-lg">{isYearly ? `$${planOptions[plan].yearly}/yr` : `$${planOptions[plan].monthly}/mo`}</p>
        </div>
        <div className="flex flex-col gap-4 mx-4">
          {isOnlineService && 
            <div className="flex justify-between">
              <p className="text-coolGray">Online service</p>
              <p className="font-medium text-marineBlue">{isYearly ? `+$${Addons.onlineService.yearly}/yr` : `+$${Addons.onlineService.monthly}/mo`}</p>
            </div>
          }
          {isLargerStorage && 
            <div className="flex justify-between">
              <p className="text-coolGray">Larger storage</p>
              <p className="font-medium text-marineBlue">{isYearly ? `+$${Addons.largerStorage.yearly}/yr` : `+$${Addons.largerStorage.monthly}/mo`}</p>
            </div>
          } 
          {isCustomizableProfile &&
            <div className="flex justify-between">
              <p className="text-coolGray">Customizable profile</p>
              <p className="font-medium text-marineBlue">{isYearly ? `+$${Addons.customizableProfile.yearly}/yr` : `+$${Addons.customizableProfile.monthly}/mo`}</p>
            </div>
          }
        </div>
      </div>
      <div className="flex justify-between mx-4 lg:mt-4">
        <p className="text-coolGray">{`Total (per ${isYearly ? 'year' : 'month'})`}</p>
        <p className="font-bold text-purple lg:text-xl">{isYearly ? `+$${planCost + addonsCost}/yr` : `+$${planCost + addonsCost}/mo`}</p>
      </div>
    </FormWrapper>
  )
}

