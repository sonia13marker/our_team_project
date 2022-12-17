import style from './style.module.css';
import { Map } from '../../components/Map/Map';
import { Form } from '../../components/Form/Form';
import { Footer } from '../../components/Footer/Footer';

export function ContactsPage() {
    return (
        <div className={style.wrapper}>
            <Map />
            <Form />
            <Footer />
        </div>
    )
}
