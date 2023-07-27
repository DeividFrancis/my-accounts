import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="h-screen w-screen flex justify-center items-center bg-gray-950">
      <SignUp />
    </main>
  );
}
