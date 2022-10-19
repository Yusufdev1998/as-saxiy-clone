import BasicLink from "../../components/BasicLink";
import SuggestionCard from "../../components/SuggestionCard";

const Suggestions = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-xl-3">
            <div className="a__aside mb-40">
              <div className="a__aside-header d-flex justify-content-between align-items-center">
                <h3>Книги</h3>
                <a href="/product/knigi">
                  <img
                    data-src="https://assets.asaxiy.uz/uploads//5f46535c8c1c3.png"
                    className="lazyload"
                    loading="lazy"
                    alt="Книги"
                    src="https://assets.asaxiy.uz/uploads//5f46535c8c1c3.png"
                  />
                </a>
              </div>
              <div className="a__aside-body">
                <a
                  href="/product/knigi/asaxiybooks-kitoblari/daron-azhemugli-zheims-a-robinson-mamlakatlar-tanazzuli-sabablari-kudrat-farovonlik-va-kambagallik-manbalari-kattik-mukova"
                  className="a__aside-item d-flex align-items-center"
                >
                  <div className="a__aside-img flex-shrink-0 me-2">
                    <img
                      className="img-fluid lazyload"
                      data-src="https://assets.asaxiy.uz/product/main_image/mobile//62696262ae51d.jpg.webp"
                      loading="lazy"
                      alt="Дарон Ажемўғли, Жеймс А. Робинсон: Мамлакатлар таназзули сабаблари: қудрат, фаровонлик  ва камбағаллик манбалари (қаттиқ муқова)"
                      src="https://assets.asaxiy.uz/product/main_image/mobile//62696262ae51d.jpg.webp"
                    />
                  </div>

                  <div className="a__aside-data">
                    <h6>
                      Дарон Ажемўғли, Жеймс А. Робинсон: Мамлакатлар таназзули
                      сабаблари: қудрат, фаровонлик ва камбағаллик манбалари
                      (қаттиқ муқова)
                    </h6>
                    <p>Asaxiy Books китоблари</p>
                  </div>
                </a>
                <a
                  href="/product/knigi/asaxiybooks-kitoblari/rei-bredberi-farengeit-buiicha-451º-predzakaz"
                  className="a__aside-item d-flex align-items-center"
                >
                  <div className="a__aside-img flex-shrink-0 me-2">
                    <img
                      className="img-fluid lazyload"
                      data-src="https://assets.asaxiy.uz/product/main_image/mobile//6267dd64951ea.jpg.webp"
                      loading="lazy"
                      alt="Рэй Брэдбери: Фаренгейт бўйича 451º"
                      src="https://assets.asaxiy.uz/product/main_image/mobile//6267dd64951ea.jpg.webp"
                    />
                  </div>

                  <div className="a__aside-data">
                    <h6>Рэй Брэдбери: Фаренгейт бўйича 451º</h6>
                    <p>Asaxiy Books китоблари</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-xl-9">
            <div className="mb-40">
              <div className="row custom-gutter">
                <div className="col-12">
                  <h5 className="section__title">Cнова в школу</h5>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                    <SuggestionCard></SuggestionCard>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                    <SuggestionCard></SuggestionCard>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                    <SuggestionCard></SuggestionCard>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                    <SuggestionCard></SuggestionCard>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                    <SuggestionCard></SuggestionCard>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                    <SuggestionCard></SuggestionCard>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                    <SuggestionCard></SuggestionCard>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                    <SuggestionCard></SuggestionCard>
                </div>
              
                
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="conditioner-block mb-40">
              <h1>О компании Asaxiy</h1>
              <p>
                Главное преимущество нашей компании, которая занимается
                поставками бытовой техники и электроники в Узбекистане&nbsp;–
                многолетний опыт работы и заслуженное доброе имя. С момента
                своего развития интернет-магазин Asaxiy и его команда неустанно
                следит за тенденциями спроса потребительского рынка, что дает
                нам возможность всегда быть в курсе самых последних технологий и
                инновационных решений. Специалисты компании внимательно изучают
                желания наших клиентов, поэтому ресурс постоянно обновляется
                качественными новинками, имеющими доступную стоимость.
              </p>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Принцип работы компании
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Каждый покупатель должен в комфортных условиях выбрать{" "}
                        <a href="https://asaxiy.uz/product/telefony-i-gadzhety">
                          телефоны и гаджеты
                        </a>{" "}
                        максимально быстро, поэтому мы создали интуитивно
                        понятное меню, которое легко освоить новым пользователям
                        сети. Для большего удобства мы раздели меню на
                        соответствующие разделы, в которых вы найдете более 15
                        тысяч разновидностей оргтехники и сопутствующих товаров.
                        Выглядят они следующим образом:
                      </p>
                      <p>
                        &nbsp;•{" "}
                        <a href="https://asaxiy.uz/product/posuda">посуда</a> –
                        здесь вы найдете самые необходимые атрибуты домашнего
                        обихода, без которого не обходится наша повседневная
                        жизни. Товары, представленные на сайте нашего магазина,
                        обладают высоким качеством и прочностью;
                        <br />
                        &nbsp;•{" "}
                        <a href="https://asaxiy.uz/product/kondicionery">
                          кондиционеры
                        </a>{" "}
                        и климатическая техника – раздел позволяет сделать
                        полезные покупки в соответствии с вашими потребностями.
                        К каждому товару имеется описание, которое позволит
                        сделать правильный выбор;
                        <br />
                        &nbsp;•{" "}
                        <a href="https://asaxiy.uz/product/televizory-video-i-audio">
                          телевизоры, видео и аудио
                        </a>{" "}
                        находятся в следующем разделе, который достойно
                        позиционируется как бытовая техника. Здесь представлены
                        самые последние новинки и разработки, имеющие
                        полномасштабный перечень функций, идущий в ногу со
                        временем;
                        <br />
                        &nbsp;•{" "}
                        <a href="https://asaxiy.uz/product/%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%82%D0%B0-%D0%B8-%D0%B7%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8C%D0%B5">
                          Техника для красоты и здоровья
                        </a>{" "}
                        – один из любимых отделов наших постоянных
                        покупательниц, которые знают цену здоровья и стремятся к
                        естественной красоте путем правильного питания;
                        <br />
                        &nbsp;•{" "}
                        <a href="https://asaxiy.uz/product/kompyutery-i-orgtehnika">
                          Компьютеры и оргтехника
                        </a>{" "}
                        являются самым большим разделом, так как здесь включены
                        всевозможные аксессуары и вспомогательные комплектующие,
                        призванные облегчить процесс компьютеризации и уменьшить
                        трату рабочего времени.
                      </p>
                      <p>
                        Также наша компания Asaxiy.uz позаботилась про любителей
                        игровых сервисов, о чем может сказать раздел{" "}
                        <a href="https://asaxiy.uz/product/dlya-gejmerov">
                          для геймеров
                        </a>
                        . Здесь предоставлено мощное компьютерное обеспечение,
                        игровые мыши и клавиатуры, которые позволят осуществлять
                        игровой процесс с максимальной точностью и меткостью. А
                        для любителей чтения мы предоставили усовершенствованную
                        литературу в виде аудио{" "}
                        <a href="https://asaxiy.uz/product/knigi">книг</a>,
                        тематика жанра которых достаточно широка.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Наши преимущества
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    <p>Компания Asaxiy.uz стремительно прорабатывает все свои возможности, и сегодня мы предлагаем своим клиентам значительные <a href="https://asaxiy.uz/product?discount=1">скидки</a> и быструю доставку в ряды городов. В зону нашего обслуживания входят такие города как Андижане, Бухаре, Фергане, Джизак, Хорезм, Наманган, Навои, Кашкадарью,&nbsp;Самарканде, Сырдарье, Сурхандарье и всей Ташкентской области, а также Республика Каракалпакстан. И это неполная карта поставок. Уточнить все наши зоны обслуживания вы можете, позвонив специалисту интернет-магазина, который предоставит всю интересующую вас информацию.</p>
                    <p>Каждый покупатель нашего магазина – достойный гость, которому мы предложим приятные скидки и бонусные программы. Мы полностью сопроводим весь процесс подбора товаров согласно требованиям клиентам и произведем&nbsp;доставку любым удобным способом.</p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              "Asaxiy Books" ООО
              <br />
              Регистрация: 646439
              <br />
              ИНН: 305829008
              <br />
              Директор: Allayev Firuz Abdunasimovich<p></p>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suggestions;
