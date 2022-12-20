import style from './style.module.css';
import { Map } from '../../components/Map/Map';
import { FormBlock } from '../../components/FormBlock/FormBlock';
import { Footer } from '../../components/Footer/Footer';

export function ContactsPage() {
    return (
        <div className={style.wrapper}>
            <Map />
            <FormBlock />
            <Footer />
        </div>
    )
}
