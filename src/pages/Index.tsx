import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "features", "how", "pricing", "portfolio", "faq", "reviews", "cta"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;
      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            observers[id].unobserve(element);
          }
        },
        { threshold: 0.1 }
      );
      observers[id].observe(element);
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  const faqs = [
    { q: "Какие функции входят в готовый интернет-магазин?", a: "Каталог товаров с фильтрами, корзина, оформление заказа, личный кабинет покупателя, система скидок и купонов, интеграция с платёжными системами, управление остатками, SEO-оптимизация и аналитика продаж." },
    { q: "Какие преимущества у готового интернет-магазина?", a: "Быстрый старт — от 2 недель вместо 3–6 месяцев разработки с нуля. Проверенный код без багов. Низкая стоимость. Готовые интеграции с 1С, службами доставки и платёжными системами." },
    { q: "Вы поможете с настройкой сайта?", a: "Да, мы полностью настраиваем магазин под ваш бизнес: загружаем товары, подключаем оплату и доставку, настраиваем дизайн под ваш бренд и обучаем вас работе с системой." },
    { q: "Сколько времени займёт разработка интернет-магазина?", a: "Готовый магазин на базе нашего решения запускается за 2–4 недели. Это включает настройку, загрузку товаров, подключение платёжных систем и тестирование." },
    { q: "Какие характеристики у вашего сервера?", a: "Используем надёжные серверы с гарантированным аптаймом 99,9%, SSD-хранилища, защиту от DDoS-атак и ежедневное резервное копирование. Производительность масштабируется по мере роста вашего магазина." },
    { q: "Мне нужен готовый бизнес в интернете, но я не хочу постоянно заниматься интернет-магазином. Могу я перепоручить это вам?", a: "Да, мы предлагаем услугу полного сопровождения магазина: обновление товаров, обработка заказов, техническая поддержка, SEO-продвижение. Вы просто получаете прибыль." },
    { q: "Какая гарантия на готовый интернет-магазин?", a: "Мы предоставляем 12 месяцев бесплатной технической поддержки, гарантию исправления всех ошибок и бесплатные обновления CMS в течение первого года." },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/90 backdrop-blur-xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
              <Icon name="ShoppingCart" size={16} className="text-white" />
            </div>
            <div className="font-display font-bold text-xl text-white">
              ГОТОВЫЙ<span className="text-accent">МАГ</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-white transition-colors">Возможности</a>
            <a href="#how" className="text-muted-foreground hover:text-white transition-colors">Как работаем</a>
            <a href="#pricing" className="text-muted-foreground hover:text-white transition-colors">Тарифы</a>
            <a href="#faq" className="text-muted-foreground hover:text-white transition-colors">FAQ</a>
            <a href="#cta" className="text-muted-foreground hover:text-white transition-colors">Контакты</a>
          </nav>
          <div className="flex gap-3 items-center">
            <a href="tel:+74954149470" className="hidden md:flex items-center gap-2 text-sm text-white font-medium">
              <Icon name="Phone" size={14} className="text-accent" />
              +7 (495) 414-94-70
            </a>
            <button className="px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent/90 transition-all">
              Личный кабинет
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-28 pb-20 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-background" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="mb-6 inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-xs font-medium text-accent uppercase tracking-widest">Быстрый старт бизнеса</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-black leading-tight mb-6 tracking-tight">
                <span className="text-white">ГОТОВЫЙ</span>
                <br />
                <span className="text-accent">ИНТЕРНЕТ-МАГАЗИН</span>
                <br />
                <span className="text-white">— БЫСТРЫЙ СТАРТ</span>
                <br />
                <span className="text-white/80">ВАШЕГО БИЗНЕСА</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
                Профессиональный интернет-магазин «под ключ» за 2–4 недели. Команда «ГОТОВЫЙ МАГ» проведёт вас от выбора решения до первой продажи.
              </p>
              <p className="text-sm text-white/50 mb-8">
                Здесь вы можете заказать готовый магазин и продавать в интернете уже сегодня — это выгоднее и быстрее самостоятельного запуска.
              </p>
              <div className="flex gap-4 flex-col sm:flex-row">
                <a href="#pricing">
                  <button className="group px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 transition-all font-bold text-base flex items-center gap-3 justify-center">
                    от 155 000 рублей
                    <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition" />
                  </button>
                </a>
                <a href="#cta">
                  <button className="px-8 py-4 border border-white/20 rounded-lg hover:border-accent/50 hover:bg-accent/10 transition-all font-medium text-base text-white">
                    Получить консультацию
                  </button>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">500+</div>
                  <p className="text-sm text-white/50">Запущенных магазинов</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">2–4 нед.</div>
                  <p className="text-sm text-white/50">Срок запуска</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">12 мес.</div>
                  <p className="text-sm text-white/50">Гарантия поддержки</p>
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <div className="relative bg-card/60 border border-accent/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-xl" />
                <div className="relative">
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-4">
                    <div className="text-center">
                      <p className="text-sm text-white/60 mb-2 uppercase tracking-widest">Закажите профессиональный</p>
                      <p className="text-xl font-bold text-white mb-1">ИНТЕРНЕТ-МАГАЗИН «ПОД КЛЮЧ»</p>
                      <p className="text-sm text-white/60 mb-4">прямо сейчас</p>
                      <div className="text-4xl font-black text-accent mb-1">192 000</div>
                      <div className="text-sm text-white/60 mb-6">рублей</div>
                      <button className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-all text-sm uppercase tracking-wide">
                        Купить интернет-магазин
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {["Минцифры России", "Роспатент", "CMS Bitrix"].map((badge) => (
                      <div key={badge} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                        <Icon name="Shield" size={20} className="text-accent mx-auto mb-1" />
                        <p className="text-xs text-white/50">{badge}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections["how"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Процесс</span>
            <h2 className="text-4xl lg:text-5xl font-display font-black tracking-tight mt-4 mb-4 text-white">
              Если вы решили купить готовый интернет-магазин недорого
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Команда «ГОТОВЫЙ МАГ» проведёт раз только настройку и запуск интернет-магазина «под ключ»
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { num: "1", title: "Подберём решение", desc: "Подходящее именно для вашего дела" },
              { num: "2", title: "Создадим дизайн", desc: "В соответствии с вашим брендом" },
              { num: "3", title: "Настроим CMS", desc: "Раз и на целую жизнь вашего сайта" },
              { num: "4", title: "Наполним товарами", desc: "Поможем загрузить весь каталог" },
              { num: "5", title: "Запустим сайт", desc: "И сдадим в продакшн без проблем" },
              { num: "6", title: "Проведём обучение", desc: "Научим работать с системой" },
            ].map((step, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${visibleSections["how"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="bg-card/50 border border-accent/15 hover:border-accent/40 rounded-xl p-5 h-full flex flex-col transition-all">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-black text-lg mb-3">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-sm text-white mb-1">{step.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections["features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Возможности</span>
            <h2 className="text-4xl lg:text-5xl font-display font-black tracking-tight mt-4 text-white">
              Какие функции содержит готовое решение
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "LayoutGrid", title: "Каталог и фильтры", desc: "Удобная навигация по товарам с фильтрацией по любым параметрам" },
              { icon: "CreditCard", title: "Оплата онлайн", desc: "Интеграция с Сбербанком, ЮKassa, Тинькофф и другими платёжными системами" },
              { icon: "Truck", title: "Службы доставки", desc: "СДЭК, Почта России, Boxberry — автоматический расчёт стоимости" },
              { icon: "BarChart2", title: "Аналитика продаж", desc: "Полная статистика по заказам, покупателям и источникам трафика" },
              { icon: "Users", title: "Личный кабинет", desc: "История заказов, избранное, персональные скидки для покупателей" },
              { icon: "Tag", title: "Скидки и купоны", desc: "Гибкая система акций, промокодов и программ лояльности" },
              { icon: "Search", title: "SEO-оптимизация", desc: "Настроенные мета-теги, карта сайта, микроразметка для поисковиков" },
              { icon: "Database", title: "Интеграция с 1С", desc: "Синхронизация остатков и цен с вашей учётной системой" },
            ].map((item, i) => (
              <div
                key={i}
                className={`group p-6 border border-accent/10 hover:border-accent/40 rounded-xl bg-card/50 hover:bg-card/80 transition-all duration-500 ${visibleSections["features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-all">
                  <Icon name={item.icon} fallback="Star" size={20} className="text-accent" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections["pricing"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Тарифы</span>
            <h2 className="text-4xl lg:text-5xl font-display font-black tracking-tight mt-4 text-white">
              Выберите подходящий пакет
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "ПРОСТОЙ",
                price: "155 000 р",
                badge: null,
                highlight: false,
                color: "accent",
                features: [
                  "Установка CMS на хостинг HTML5",
                  "Настройка домена и SSL",
                  "Дизайн из готового шаблона",
                  "Каталог до 500 товаров",
                  "Базовая SEO-настройка",
                  "Подключение 1 способа оплаты",
                  "Обучение работе с сайтом",
                  "Гарантия 6 месяцев",
                ],
              },
              {
                name: "БАЗОВЫЙ",
                price: "192 000 р",
                badge: "Популярный",
                highlight: true,
                color: "accent",
                features: [
                  "Установка CMS на хостинг HTML5",
                  "Настройка домена и SSL",
                  "Дизайн под ваш бренд",
                  "Каталог до 2 000 товаров",
                  "Полная SEO-настройка",
                  "Подключение всех способов оплаты",
                  "Интеграция служб доставки",
                  "Обучение 3 сотрудников",
                  "Гарантия 12 месяцев",
                ],
              },
              {
                name: "НАСТРАИВАЕМЫЙ",
                price: "312 000 р",
                badge: "Максимум",
                highlight: false,
                color: "red",
                features: [
                  "Уникальный дизайн с нуля",
                  "Каталог без ограничений",
                  "Интеграция с 1С",
                  "Мобильное приложение",
                  "Личный менеджер",
                  "Продвинутая аналитика",
                  "Программа лояльности",
                  "Поддержка 24/7",
                  "Гарантия 24 месяца",
                  "10 часов доработок",
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative transition-all duration-700 ${visibleSections["pricing"] ? "opacity-100 scale-100" : "opacity-0 scale-95"} ${plan.highlight ? "md:-translate-y-2" : ""}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white ${plan.highlight ? "bg-accent" : "bg-red-600"}`}>
                    {plan.badge}
                  </div>
                )}
                <div className={`relative p-8 border rounded-2xl h-full flex flex-col justify-between transition-all ${plan.highlight ? "border-accent/50 bg-accent/10" : "border-white/10 bg-card/50 hover:bg-card/80"}`}>
                  {plan.highlight && <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-xl" />}
                  <div className="relative">
                    <h3 className="font-display font-black text-lg mb-3 text-white/60">{plan.name}</h3>
                    <p className={`text-3xl font-black mb-6 ${plan.color === "red" ? "text-red-400" : "text-accent"}`}>{plan.price}</p>
                    <ul className="space-y-2.5 mb-8">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex gap-2.5 text-sm items-start">
                          <Icon name="Check" size={14} className="text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-white/70">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className={`relative w-full px-6 py-3.5 rounded-xl font-bold text-sm transition-all ${plan.highlight ? "bg-accent text-white hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30" : plan.color === "red" ? "bg-red-600 text-white hover:bg-red-500" : "border border-accent/30 text-white hover:border-accent/60 hover:bg-accent/10"}`}>
                    Заказать
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Individual approach */}
          <div className={`mt-8 p-8 bg-gradient-to-r from-red-900/40 to-accent/20 border border-red-600/30 rounded-2xl transition-all duration-1000 ${visibleSections["pricing"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-white mb-2">ИНДИВИДУАЛЬНЫЙ ПОДХОД</h3>
              <p className="text-white/60 text-sm">Любой функционал — под заказ</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                ["Уникальная CMS с нуля", "Интеграция с ERP/CRM", "Маркетплейс-функционал"],
                ["Мобильное приложение", "API для партнёров", "Многоязычность"],
                ["AR-просмотр товаров", "Рекомендательная система", "B2B-кабинет"],
              ].map((col, ci) => (
                <ul key={ci} className="space-y-2">
                  {col.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <Icon name="ArrowRight" size={12} className="text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <div className="text-center mt-6">
              <button className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-all text-sm">
                Обсудить проект
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections["portfolio"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Портфолио</span>
            <h2 className="text-4xl lg:text-5xl font-display font-black tracking-tight mt-4 text-white">
              Созданные интернет-магазины и порталы
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { category: "Электроника", items: "1 200 товаров", color: "from-blue-600/20 to-accent/10" },
              { category: "Одежда и мода", items: "3 400 товаров", color: "from-purple-600/20 to-accent/10" },
              { category: "Строительство", items: "5 800 товаров", color: "from-orange-600/20 to-red-600/10" },
              { category: "Продукты питания", items: "800 товаров", color: "from-green-600/20 to-accent/10" },
              { category: "Мебель и декор", items: "2 100 товаров", color: "from-amber-600/20 to-red-600/10" },
              { category: "Авто-товары", items: "4 300 товаров", color: "from-red-600/20 to-accent/10" },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-xl border border-white/10 hover:border-accent/40 transition-all duration-500 cursor-pointer ${visibleSections["portfolio"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`bg-gradient-to-br ${item.color} h-48 flex items-center justify-center`}>
                  <Icon name="ShoppingBag" size={48} className="text-white/20 group-hover:text-white/40 transition-all group-hover:scale-110" />
                </div>
                <div className="p-4 bg-card/80">
                  <h3 className="font-bold text-white text-sm mb-1">{item.category}</h3>
                  <p className="text-xs text-white/50">{item.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-accent/5">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections["faq"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-display font-black tracking-tight mt-4 text-white">
              Ответы на часто задаваемые вопросы
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border border-white/10 hover:border-accent/30 rounded-xl overflow-hidden transition-all ${visibleSections["faq"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left bg-card/50 hover:bg-card/80 transition-all"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-white text-sm pr-4">{i + 1}. {faq.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={16} className="text-accent flex-shrink-0" />
                </button>
                {openFaq === i && (
                  <div className="p-5 pt-0 bg-card/50 border-t border-white/5">
                    <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Отзывы</span>
            <h2 className="text-4xl lg:text-5xl font-display font-black tracking-tight mt-4 text-white">Отзывы</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Максим Сергеев", role: "Владелец магазина электроники", text: "Заказал магазин для продажи электроники — всё сделали в срок. Хотел изменить разработчикам платформу, они мне объяснили преимущества CMS и я остался очень доволен. Уже 3 года работаем без проблем. Команда — профессионалы!" },
              { name: "Ольга Петрова", role: "Основатель бренда одежды", text: "Очень довольна результатом! Магазин работает стабильно, клиенты легко оформляют заказы. Настроили интеграцию с 1С — теперь остатки обновляются автоматически. Рекомендую всем, кто хочет быстро войти в онлайн-торговлю." },
              { name: "Дмитрий Козлов", role: "Директор строительной компании", text: "Скептически относился к готовым решениям, но команда убедила попробовать. Запустили магазин за 3 недели, сразу пошли заказы. Функционала хватает с запасом, поддержка отвечает быстро. Вложения окупились за 4 месяца." },
            ].map((review, i) => (
              <div key={i} className="bg-card/60 border border-white/10 hover:border-accent/30 rounded-2xl p-6 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Icon key={j} name="Star" size={14} className="text-accent" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <div>
                  <p className="font-bold text-white text-sm">{review.name}</p>
                  <p className="text-white/40 text-xs">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact form */}
      <section id="cta" className="py-24 px-6 bg-gradient-to-br from-accent/10 to-background">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${visibleSections["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-4xl lg:text-5xl font-display font-black tracking-tight mb-4 text-white">
              Закажите консультацию по телефону
            </h2>
            <p className="text-white/60">Или оставьте заявку — мы перезвоним в течение 15 минут</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-white/50 text-xs mb-0.5">Звоните</p>
                  <a href="tel:+74954149470" className="text-white font-bold text-lg hover:text-accent transition-colors">+7 (495) 414-94-70</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-white/50 text-xs mb-0.5">Пишите</p>
                  <a href="mailto:info@gotoviy.ru" className="text-white font-bold hover:text-accent transition-colors">info@gotoviy.ru</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-white/50 text-xs mb-0.5">Офис</p>
                  <p className="text-white font-medium">г. Тула, ул. Тула д. 50</p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Shield" size={16} className="text-white/30" />
                    <span className="text-xs text-white/40">Минцифры России</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Award" size={16} className="text-white/30" />
                    <span className="text-xs text-white/40">Роспатент</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/60 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-5">Оставить заявку</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background/60 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-background/60 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-all"
                />
                <button className="w-full py-3.5 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg transition-all text-sm uppercase tracking-wide hover:shadow-lg hover:shadow-accent/30">
                  Отправить
                </button>
                <p className="text-xs text-white/30 text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
              <Icon name="ShoppingCart" size={12} className="text-white" />
            </div>
            <p>© 2025 ГОТОВЫЙ МАГ — Интернет-магазины под ключ</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-white transition-colors">Условия</a>
            <a href="#" className="hover:text-white transition-colors">Портфолио</a>
            <a href="#cta" className="hover:text-white transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;