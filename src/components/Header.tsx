import { UserForm } from "./Form";

export function Header() {
  return (
    <header className="h-80 lg:h-48 w-full bg-blue-400 fixed top-0 left-0">
      <UserForm />
    </header>
  );
}