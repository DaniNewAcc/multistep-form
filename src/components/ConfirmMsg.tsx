import { FormWrapper } from "./FormWrapper"


export function ConfirmMsg() {
  return (
    <FormWrapper>
        <i className="mx-auto mt-14 mb-6 lg:mt-28 lg:mb-8"><img className="w-16 lg:w-20" src="./images/icon-thank-you.svg" alt="Thank You Icon"/></i>
        <h1 className="font-bold text-marineBlue text-2xl text-center mb-2 lg:text-3xl lg:mb-4">Thank you!</h1>
        <p className="text-coolGray text-center pb-14">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
    </FormWrapper>
  )
}

export default ConfirmMsg