import { ReactNode } from "react"

type FormWrapperProps = {
  title?: string
  description?: string
  children: ReactNode
}

export function FormWrapper({ title, description, children }: (FormWrapperProps)) {
  return (
    <>
    <main className="bg-white text-start rounded-xl py-6 px-6 lg:py-5 lg:w-[500px]">
      <h1 className="font-bold text-2xl text-marineBlue mb-2 lg:text-[2rem]">{title}</h1>
      <p className="text-base text-coolGray lg:text-[1.015rem]">{description}</p>
      <div className="h-max flex flex-col">{children}</div>
    </main>
    </>
  )
}