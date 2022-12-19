import style from './style.module.css';

export const FavoritePlace = () => {
    return <div className={style.wrapper}>
        <h2 className={style.wrapper__h2}>Наши любимые места </h2>
        <div className={style.wrapper__place}>
            <span className={style.place__city}>
                <h3 className={style.place__h3}>Краснодар:</h3>
                <ul className={style.place__ul}>
                    <li><a href="https://yandex.ru/maps/org/gorodskoy_sad/1047001189/?ll=39.012985%2C45.038440&z=12.73">ул. Постовая, 34 <br />Парк Горького</a></li>
                    <li><a href="https://yandex.ru/maps/org/botanicheskiy_sad_im_i_s_kosenko/1752979417/?ll=38.927684%2C45.052785&z=15">Ботанический сад имени И. Косенко <br />Ботанический сад</a></li>
                </ul>
            </span>

            <span className={style.place__city}>
                <h3 className={style.place__h3}>Бугульма:</h3>
                <ul className={style.place__ul}>
                    <li><a href="https://yandex.ru/maps/org/dvorets_molodyozhi/160750110958/?ll=52.819923%2C54.533389&z=16">ул. Ленина, 98<br />Дворец молодежи</a></li>
                    <li><a href="https://yandex.ru/maps/11122/bugulma/house/ulitsa_musy_dzhalilya_31/YUsYcQ5jT0cGQFtufXlydH5mZw==/?ll=52.793621%2C54.535253&z=16">ул. Мусы Джалиля, 31<br />Дом техники</a></li>
                </ul>
            </span>

            <span className={style.place__city}>
                <h3 className={style.place__h3}>Москва:</h3>
                <ul className={style.place__ul}>
                    <li><a href="https://yandex.ru/maps/213/moscow/house/khodynskiy_bulvar_10b/Z04YcwVpQUIOQFtvfXt5d3VlZQ==/?ll=37.529879%2C55.786961&z=16">Ходынский бул., 10Б<br />Парк Ходынское Поле</a></li>
                    <li><a href="https://yandex.ru/maps/213/moscow/house/prospekt_mira_119s228/Z04YcARoTkMDQFtvfXRzd3prYQ==/?ll=37.638763%2C55.826685&z=16">просп. Мира, 119, стр. 228<br />ВДНХ</a></li>
                    <li><a href="https://yandex.ru/maps/213/moscow/house/presnenskaya_naberezhnaya_2/Z04YcwRpTkEFQFtvfXt1eH1lZg==/?ll=37.539743%2C55.749162&z=16">Пресненская наб., 2<br />Москва Сити</a></li>
                </ul>
            </span>

            <span className={style.place__city}>
                <h3 className={style.place__h3}>Набережные челны:</h3>
                <ul className={style.place__ul}>
                    <li><a href="/#">ул. Ленина, 38</a></li>
                </ul>
            </span>
        </div>
    <span className={style.wrapper__map}>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ade489f737386677b78e869b07e3317c3cbf4f1a9263fb53c3ab0f7a59383a459&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>
    </span>
    </div>
}