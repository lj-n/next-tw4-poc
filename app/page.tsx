import { ThemeSwitch } from "./theme.switch";

export default function Home() {
  return (
    <div className="m-auto">
      <h1 className="text-primary text-4xl font-bold">Home</h1>
      <ThemeSwitch />
    </div>
  );
}
