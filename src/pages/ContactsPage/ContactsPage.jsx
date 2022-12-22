import style from './style.module.css';
import { Map } from '../../components/Map/Map';
import { FormBlock } from '../../components/FormBlock/FormBlock';
import { Footer } from '../../components/Footer/Footer';
import { MenuHamburger } from '../../components/MenuHamburger/MenuHamburger';

import {useTranslation} from "react-i18next";

export function ContactsPage() {
    const {t} = useTranslation();
    return (<>
            <MenuHamburger/>
            <h2 className={style.h2}>{t("contacts")}</h2>
            <div className={style.wrapper}>
                <Map />
                <FormBlock />
                <Footer />
            </div>
        </>
    )
}
