import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="mx-auto flex h-28 w-4/5 justify-between text-slate-50 lg:h-36">
      <section className="flex h-full w-1/5 items-center lg:w-1/6">
        <Link
          to={"/"}
          className="grid h-full w-full place-items-center font-semibold"
        >
          <img src="Xapiera.PNG" alt="Logo" className="object-contain rounded-full" loading="lazy" />
        </Link>
      </section>
      <section className="hidden h-full w-4/5 text-lg font-semibold lg:flex lg:w-5/6 lg:items-center lg:justify-end">
        {["Blog", "More About Me", "Achievment", "DM Me"].map(
          (menu, i: number) => (
            <Link
              to={`/${menu.toLowerCase().replace(/ /g, "-")}`}
              key={i}
              className="mr-14 transition-all duration-300 text-slate-950 ease-in-out last:mr-0 last:rounded-lg last:bg-slate-950 last:px-6 last:py-3 last:text-slate-50 hover:text-slate-800 hover:underline last:hover:bg-slate-800 last:hover:text-slate-50 last:hover:no-underline"
            >
              {menu}
            </Link>
          )
        )}
      </section>
      <section></section>
    </header>
  );
}