import { Ref, forwardRef } from "react";
import { InputProps } from "../types/input-props";

function Input({ ...rest }: InputProps, ref: Ref<HTMLInputElement>) {
  return (
    <div className="w-4/5 md:w-64 bg-white h-10 flex items-center p-1">
      <input 
        {...rest}
        className="outline-none border-none w-full" 
        ref={ref}
      />
    </div>
  );
}

export const UserInput = forwardRef(Input);

