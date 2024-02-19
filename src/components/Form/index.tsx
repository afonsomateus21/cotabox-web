import { useForm } from "react-hook-form";
import { UserInput } from "../Input";
import { FormInputProps } from "../../types/form-input-props";
import { userSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

export function UserForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormInputProps>({ resolver: yupResolver(userSchema) });

  function onSubmit(data: FormInputProps) {
    console.log(data)
  } 

  return (
    <form  
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col lg:flex-row items-center justify-evenly">
        <UserInput 
          placeholder="First Name" 
          {...register("firstName")}
          errors={errors.firstName?.message}
        />
        
        <UserInput 
          placeholder="Last Name" 
          {...register("lastName")}
          errors={errors.lastName?.message}
        />
        
        <UserInput 
          placeholder="Participation" 
          type="number"
          {...register("participation")}
          errors={errors.participation?.message}
        />

        <button 
          className="cursor-pointer bg-transparent text-white border-2 border-white h-10 w-1/2 md:w-24"
          type="submit"
        >
          SEND
        </button>
      </form>
  );
}