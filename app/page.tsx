import React from "react";
import { DATA } from "@/app/data";
import Timeline from "@/app/components/timeline";

const App = () => {
  return (
    <main className="flex gap-5 max-w-3xl m-auto py-5">
      <aside className="basis-1/4">
        <h2>Timeline</h2>
        <Timeline />
      </aside>
      <section className="basis-3/4">
        <ul className="divide-y">
          {DATA.map((item) => (
            <li key={item.id} className="space-y-3 py-5">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default App;
