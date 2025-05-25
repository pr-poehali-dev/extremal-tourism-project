const Hero = () => {
  return (
    <section className="relative min-h-screen bg-ex-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/files/608dc616-310b-4062-89db-c9b9e04e300c.png"
          alt="Extreme Tourism"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ex-black via-transparent to-ex-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <div className="animate-fade-in">
            <h1 className="font-oswald text-6xl md:text-8xl font-bold text-white leading-tight mb-8">
              your <span className="text-ex-red">drive</span>
              <br />
              your <span className="text-ex-red">life</span>
              <br />
              your <span className="text-ex-red">rules</span>
            </h1>

            <p className="text-ex-gray-200 text-xl mb-8 font-roboto tracking-wide">
              fokus on yourself
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-ex-red text-white px-8 py-4 rounded font-roboto font-medium hover:bg-ex-orange transition-all transform hover:scale-105">
                Выбрать приключение
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded font-roboto font-medium hover:bg-white hover:text-ex-black transition-all">
                Узнать больше
              </button>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-ex-red ex-diagonal opacity-20"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 border-4 border-ex-orange ex-diagonal-reverse opacity-30"></div>

            <div className="bg-ex-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-ex-red/20">
              <h3 className="font-oswald text-2xl text-white mb-4">
                focus on yourself
              </h3>
              <p className="text-ex-gray-200 font-roboto">
                Преодолей свои границы. Почувствуй адреналин. Живи на полную.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Geometric Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-ex-black to-transparent"></div>
    </section>
  );
};

export default Hero;
