import style from './style.module.css';
import {FormInput} from '../FormInput/FormInput';


export const FormBlock = () => {
  

    return <div className={style.wrapper__form}>
    <h2 className={style.wrapper__h2}>Давайте сделаем что-нибудь вместе ?</h2>
    <p className={style.wrapper__text}>Оставьте нам свои контактные данные и мы с вами свяжемся</p>
    <FormInput />


</div>
}