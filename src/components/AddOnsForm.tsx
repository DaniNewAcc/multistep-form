import { FormWrapper } from "./FormWrapper";
import { Addons } from "../utils/planOptions";

type UserAddons = {
    isYearly: boolean,
    isOnlineService: boolean,
    isLargerStorage: boolean,
    isCustomizableProfile: boolean,
}

type AddonsFormProps = UserAddons & {
    updateFields: (fields: Partial<UserAddons>) => void;
}

export function AddOnsForm({ isYearly, isOnlineService, isLargerStorage, isCustomizableProfile, updateFields }: AddonsFormProps) {
    return (
        <FormWrapper title="Pick add-ons" description="Add-ons help enhance your gaming experience">
            <div className="flex flex-col gap-4 mt-6 mb-3 lg:mt-10">
                <label className={`${isOnlineService ? "bg-alabaster border border-purple" : 'bg-white border'} relative rounded-lg cursor-pointer transition-all ease-in-out duration-200 hover:border-purple`}>
                    <div className='flex items-center m-3 lg:m-5'>
                    <input value="Online service" checked={isOnlineService} onChange={e => updateFields({ isOnlineService: e.target.checked })} type="checkbox" name="addon" className="w-5 h-5 border border-coolGray rounded-md appearance-none checked:bg-purple checked:border-none focus:outline-none"/>
                        <i className="absolute left-4 lg:left-6"><img src="./images/icon-checkmark.svg" alt="Checkmark" /></i>
                        <div className='flex flex-col ms-6'>
                            <h3 className="font-bold text-marineBlue text-[.895rem] lg:text-[1.1rem]">Online service</h3>
                            <small className="text-coolGray text-[.785rem] lg:text-[.995rem]">Access to multiplayer games</small>
                        </div>
                            <small className='font-medium text-purple ms-auto lg:text-[.925rem]'>{isYearly ? `+$${Addons.onlineService.yearly}/yr` : `+$${Addons.onlineService.monthly}/mo`}</small>
                    </div>
                </label>
                <label className={`${isLargerStorage ? "bg-alabaster border border-purple" : 'bg-white border'} hover:border-purple cursor-pointer transition-all ease-in-out duration-200 rounded-lg relative`}>
                    <div className='m-3 flex items-center lg:mx-5 lg:my-5'>
                    <input value="Larger storage" checked={isLargerStorage} onChange={e => updateFields({ isLargerStorage: e.target.checked })} type="checkbox" name="addon" className="w-5 h-5 border border-coolGray rounded-md appearance-none checked:bg-purple checked:border-none focus:outline-none"/>
                        <i className="absolute left-4 lg:left-6"><img src="./images/icon-checkmark.svg" alt="Checkmark" /></i>
                        <div className='flex flex-col ms-6'>
                            <h3 className="font-bold text-marineBlue text-[.895rem] lg:text-[1.1rem]">Larger storage</h3>
                            <small className="text-coolGray text-[.785rem] lg:text-[.995rem]">Extra 1TB of cloud save</small>
                        </div>
                        <small className='font-medium text-purple ms-auto lg:text-[.925rem]'>{isYearly ? `+$${Addons.largerStorage.yearly}/yr` : `+$${Addons.largerStorage.monthly}/mo`}</small>
                    </div>
                </label>
                <label className={`${isCustomizableProfile ? "bg-alabaster border border-purple" : 'bg-white border'} hover:border-purple cursor-pointer transition-all ease-in-out duration-200 rounded-lg relative`}>
                    <div className='m-3 flex items-center lg:mx-5 lg:my-5'>
                    <input value="Customizable profile" checked={isCustomizableProfile} onChange={e => updateFields({ isCustomizableProfile: e.target.checked })} type="checkbox" name="addon" className="w-5 h-5 border border-coolGray rounded-md appearance-none checked:bg-purple checked:border-none focus:outline-none"/>
                        <i className="absolute left-4 lg:left-6"><img src="./images/icon-checkmark.svg" alt="Checkmark" /></i>
                        <div className='flex flex-col ms-6'>
                            <h3 className="font-bold text-marineBlue text-[.895rem] lg:text-[1.1rem]">Customizable Profile</h3>
                            <small className="text-coolGray text-[.785rem] lg:text-[.995rem]">Custom theme on your profile</small>
                        </div>
                        <small className='font-medium text-purple ms-auto lg:text-[.925rem]'>{isYearly ? `+$${Addons.customizableProfile.yearly}/yr` : `+$${Addons.customizableProfile.monthly}/mo`}</small>
                    </div>
                </label>
            </div>
        </FormWrapper>
    )
}