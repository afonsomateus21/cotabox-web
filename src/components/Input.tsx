import { InputProps } from "../types/input-props";

export function Input({ ...rest }: InputProps) {
  return (
    <div className="w-4/5 md:w-64 bg-white h-10 flex items-center p-1">
      <input 
        {...rest}
        className="outline-none border-none w-full" 
      />
    </div>
  );
}