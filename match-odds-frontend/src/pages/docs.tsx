import { title } from "@/components/primitives";
import AppLayout from "@/layouts/AppLayout";

export default function Docs() {
  return (
    <AppLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-0">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "primary" })}> Docs </span>
        </div>
      </section>
    </AppLayout>
  );
}
