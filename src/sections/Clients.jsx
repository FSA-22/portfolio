import { clientReviews } from "../constants";

const Clients = () => {
  return (
    <section className="sm:px-10 px-5 my-20">
      <h3 className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
        Imaginary Clients
      </h3>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        {clientReviews.map(({ id, name, review, img, position }) => (
          <div
            key={id}
            className="rounded-lg md:p-10 p-5 col-span-1 bg-neutral-950 bg-opacity-50">
            <div>
              <p className="text-white font-light"> {review} </p>

              <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 mt-7">
                <div className="flex gap-3">
                  <img
                    src={img}
                    alt={name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white">{name}</p>
                    <p className="text-white md:text-base text-sm font-light">
                      {position}
                    </p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({length: 5}).map((_, index) => (
                    <img key={index} src="/assets/star.png" alt="star-ratings" className="w-4 h-4" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
