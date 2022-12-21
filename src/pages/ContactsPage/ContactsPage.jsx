import style from './style.module.css';
import { Map } from '../../components/Map/Map';
import { FormBlock } from '../../components/FormBlock/FormBlock';
import { Footer } from '../../components/Footer/Footer';
import { MenuHamburger } from '../../components/MenuHamburger/MenuHamburger';

export function ContactsPage() {
    return (<>
            <MenuHamburger/>
            <h2 className={style.h2}>Контакты</h2>
            <div className={style.wrapper}>
                <Map />
                <FormBlock />
                <Footer />
            </div>
        </>
    )
}
