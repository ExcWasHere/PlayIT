

export default function IndexIntro() {
  return (
    <div className="h-screen bg-white mx-auto">
      <div className="col-start-8 mx-auto text-center text-black">
        <p className="text-3xl py-20">My Sponsorship</p>
      </div>

      <div className="row-start-5">
        <div className="columns-lg">
          <div className="flex">
              <img
                src="https://www.bhinneka.com/web/image/product.template/35420/image_1024?unique=1a22b54"
                alt="Dicoding"
                className="shadow-lg shadow-red-600 ml-10 w-96 h-56"
              />
              <img
                src="https://asset.indosport.com/article/image/q/80/313724/logo_rrq-169.jpg?w=750&h=423"
                alt="RRQ"
                className="shadow-lg shadow-blue-600 ml-10 w-80 h-56"
              />
              <img
                src="https://www.matahari.com/media/amasty/shopby/option_images/LP_EMINA-DESK.jpg"
                alt="Emina"
                className="shadow-lg shadow-green-600 ml-10 pr-px w-96 h-56"
              />
              <img
                src="https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/1%20Homepage%20RG/logo%20ruangguru.png"
                alt="RG"
                className="shadow-lg shadow-yellow-600 ml-10 w-96 h-56 bg-slate-600"
              />
          </div>
        </div>
      </div>
    </div>
  );
}
