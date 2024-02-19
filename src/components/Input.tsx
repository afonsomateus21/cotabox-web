import { Ref, forwardRef } from "react";
import { InputProps } from "../types/input-props";

function Input({ errors, ...rest }: InputProps, ref: Ref<HTMLInputElement>) {
  return (
    <div>
      <div className="w-full md:w-64 bg-white h-10 flex items-center p-1">
        <input 
          {...rest}
          className="outline-none border-none w-full" 
          ref={ref}
        />
      </div>

      <p className="text-red-500"> {errors} </p>
    </div>
  );
}

export const UserInput = forwardRef(Input);

