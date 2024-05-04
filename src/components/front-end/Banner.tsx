const Banner = () => {
  return (
    <div className="container mt-32">
      <div className="grid lg:grid-cols-[66%,34%] gap-4 pr-[15px]">
        <div className="bg-cover bg-center rounded-xl p-8 md:p-16 h-[200px] md:h-[260px] bg-[url(/banner1.jpeg)]">
          <p className="text-black text-xl font-medium">
            Sales 20% off on all stores
          </p>
          <h2 className="text-white font-bold text-xl sm:text-3xl max-w-[240px]">
            Deluxe Suit Wears
          </h2>
          <a href="#" className="inline-block mt-6 text-white font-medium">
            Shop Now
          </a>
        </div>
        <div className="h-[260px]  bg-[url(/banner2.jpeg)] bg-right rounded-xl hidden lg:block"></div>
      </div>
    </div>
  );
};

export default Banner;
