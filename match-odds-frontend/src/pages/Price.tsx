import { title } from "@/utils/primitives";
import AppLayout from "@/layouts/AppLayout";

export default function Price() {
  return (
    <AppLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-0">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "primary" })}> Pricing </span>
        </div>
      </section>
    </AppLayout>
  );
}
