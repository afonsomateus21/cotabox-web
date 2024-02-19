import { Input } from "./Input";

export function Header() {
  return (
    <header className="h-60 md:h-48 w-full bg-blue-400 fixed top-0 left-0">
      <form className="w-full h-full flex flex-col lg:flex-row items-center justify-evenly">
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Participation" />
      </form>
    </header>
  );
}