
export default function IndexHero(): JSX.Element {
  return (
    <section className="z-20 mx-auto mt-16 flex h-fit w-4/5 flex-col-reverse items-center justify-center gap-x-20 text-slate-950 xl:flex-row xl:justify-between">
      <div className="mt-10 flex h-full w-full cursor-default flex-col items-center text-justify xl:mt-0 xl:items-start">
        <h2 className="inline text-justify text-xl font-semibold leading-tight md:text-3xl">
          Aku adalah seorang mahasiswi di KAIST
          <br />
          Penasaran sama a day in my life ku di KAIST?
        </h2>
        <button id="jelajahi-sekarang" className="mt-10 h-fit w-fit cursor-pointer rounded-xl bg-slate-950 px-9 py-5 text-lg font-bold text-slate-50 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#bcbcbc] hover:bg-slate-800 xl:hover:scale-105">
          Ikuti aku sekarang&ensp;<i className="fa-solid fa-arrow-right text-base" />
        </button>
      </div>
      <img src="XapieraRemix.jpeg" alt="" className="transition-all duration-300 ease-in-out xl:hover:scale-105" loading="lazy" />
    </section>
  );
}