const Tours = () => {
  const tours = [
    {
      title: "Сноуборд в горах",
      description: "Покори заснеженные склоны Кавказа",
      image: "https://images.unsplash.com/photo-1551524164-6cf64ac26039?w=500",
      price: "от 15 000 ₽",
      duration: "3 дня",
    },
    {
      title: "Рафтинг",
      description: "Сплав по горным рекам Алтая",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500",
      price: "от 8 000 ₽",
      duration: "2 дня",
    },
    {
      title: "Альпинизм",
      description: "Восхождение на вершины Урала",
      image:
        "https://images.unsplash.com/photo-1464822759844-d150baec4439?w=500",
      price: "от 25 000 ₽",
      duration: "5 дней",
    },
  ];

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-5xl font-bold text-ex-black mb-4">
            <span className="text-ex-red">EXTREME</span> TOURS
          </h2>
          <p className="text-ex-gray-600 text-xl font-roboto max-w-2xl mx-auto">
            Выбери свое приключение. Каждый тур — это новый вызов твоим
            возможностям.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-ex-black hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-ex-black/40 group-hover:bg-ex-black/20 transition-all"></div>
              </div>

              <div className="p-6 text-white">
                <h3 className="font-oswald text-2xl font-bold mb-2 text-ex-red">
                  {tour.title}
                </h3>
                <p className="text-ex-gray-200 mb-4 font-roboto">
                  {tour.description}
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-ex-red font-bold text-lg">
                      {tour.price}
                    </div>
                    <div className="text-ex-gray-400 text-sm">
                      {tour.duration}
                    </div>
                  </div>
                  <button className="bg-ex-red text-white px-4 py-2 rounded hover:bg-ex-orange transition-colors font-roboto">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
