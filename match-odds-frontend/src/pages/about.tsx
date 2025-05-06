import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  const { name, creator, description } = siteConfig;

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}> {name} - </span>
          <span className={title({ color: "primary" })}> {creator} </span>
          <br />
          <div className={subtitle({ class: "mt-4" })}> {description} </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
