import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { getGreetingAndDate } from "@/utils/utils";

export default function Home() {
  const { greeting, formattedDate } = getGreetingAndDate();

  return (
    <DefaultLayout>
      <div className="inline-block max-w-lg text-center justify-center">
        <span className={title()}> {greeting} </span>
        <span className={title({ color: "primary" })}> Danny </span>
      </div>
      <span className={subtitle()}> {formattedDate} </span>
    </DefaultLayout>
  );
}
