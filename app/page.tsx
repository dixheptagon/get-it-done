import { Infobar } from "@/components/infobar";
import { TodoPanel } from "@/components/todoPanel";

export default async function Home() {
  return (
    <main className="min-h-screen px-4 py-2 md:bg-neutral-100">
      <Infobar />
      <TodoPanel />
    </main>
  );
}
