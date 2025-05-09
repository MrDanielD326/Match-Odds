import { title, subtitle } from "@/utils/primitives";
import AppLayout from "@/layouts/AppLayout";
import { getGreetingAndDate } from "@/utils/utils";

export default function Home() {
  const { greeting, formattedDate } = getGreetingAndDate();

  return (
    <AppLayout>
      <div className="inline-block max-w-lg text-center justify-center">
        <span className={title()}> {greeting} </span>
        <span className={title({ color: "primary" })}> Danny </span>
      </div>
      <span className={subtitle()}> {formattedDate} </span>
    </AppLayout>
  );
}
