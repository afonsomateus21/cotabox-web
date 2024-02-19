import { useForm } from "react-hook-form";
import { UserInput } from "./Input";
import { FormInputProps } from "../types/form-input-props";

export function Header() {
  const { register, handleSubmit } = useForm<FormInputProps>();

  function onSubmit(data: FormInputProps) {
    console.log(data)
  } 

  return (
    <header className="h-60 md:h-48 w-full bg-blue-400 fixed top-0 left-0">
      <form  
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col lg:flex-row items-center justify-evenly">
        <UserInput 
          placeholder="First Name" 
          {...register("firstName")}
        />
        <UserInput 
          placeholder="Last Name" 
          {...register("lastName")}
        />
        <UserInput 
          placeholder="Participation" 
          type="number"
          {...register("participation")}
        />

        <button 
          className="cursor-pointer bg-transparent text-white border-2 border-white h-10 w-1/2 md:w-24"
          type="submit"
        >
          SEND
        </button>
      </form>
    </header>
  );
}