import { useForm } from "react-hook-form";
import { UserInput } from "../Input";
import { FormInputProps } from "../../types/form-input-props";
import { userSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

export function Header() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormInputProps>({ resolver: yupResolver(userSchema) });

  function onSubmit(data: FormInputProps) {
    console.log(data)
  } 

  return (
    <header className="h-60 md:h-48 w-full bg-blue-400 fixed top-0 left-0">
      <form  
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col lg:flex-row items-center justify-evenly">
        <div>
          <UserInput 
            placeholder="First Name" 
            {...register("firstName")}
          />
          <p className="text-red-500">{ errors.firstName?.message }</p>
        </div>
        
        <div>
          <UserInput 
            placeholder="Last Name" 
            {...register("lastName")}
          />
          <p className="text-red-500">{ errors.lastName?.message }</p>
        </div>
        
        <div>
          <UserInput 
            placeholder="Participation" 
            type="number"
            {...register("participation")}
          />
          <p className="text-red-500">{ errors.participation?.message }</p>
        </div>

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