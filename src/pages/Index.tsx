import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tours from "@/components/Tours";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Tours />

      {/* About Section */}
      <section id="about" className="py-20 bg-ex-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-oswald text-4xl font-bold text-ex-black mb-6">
                О компании <span className="text-ex-red">EX</span>
              </h2>
              <p className="text-ex-gray-700 text-lg mb-6 font-roboto">
                Мы создаем незабываемые приключения для тех, кто не боится
                вызовов. Наша команда профессионалов знает, как превратить ваш
                отдых в настоящий адреналин.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-oswald font-bold text-ex-red">
                    500+
                  </div>
                  <div className="text-ex-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-oswald font-bold text-ex-red">
                    15
                  </div>
                  <div className="text-ex-gray-600">Регионов России</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600"
                alt="Mountain Adventure"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ex-red ex-diagonal opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-ex-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-oswald text-4xl font-bold mb-8">
            Готов к <span className="text-ex-red">приключению</span>?
          </h2>
          <p className="text-ex-gray-200 text-lg mb-8 font-roboto">
            Свяжись с нами и начни планировать свой экстремальный тур уже
            сегодня!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="text-center">
              <div className="text-ex-red text-xl font-bold">Телефон</div>
              <div className="text-ex-gray-200">+7 (800) 123-45-67</div>
            </div>
            <div className="text-center">
              <div className="text-ex-red text-xl font-bold">Email</div>
              <div className="text-ex-gray-200">info@ex-tours.ru</div>
            </div>
          </div>

          <button className="mt-8 bg-ex-red text-white px-8 py-4 rounded-lg hover:bg-ex-orange transition-all font-roboto font-medium transform hover:scale-105">
            Связаться с нами
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
