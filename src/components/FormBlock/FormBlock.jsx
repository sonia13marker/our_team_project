import style from './style.module.css';
import {FormInput} from '../FormInput/FormInput';

import { useTranslation } from "react-i18next";

export const FormBlock = () => {
    const { t } = useTranslation();

    return (
        <div className={style.wrapper__form}>
            <h2 className={style.wrapper__h2}>{t("form_tens")}</h2>
            <p className={style.wrapper__text}>{t("form_tens2")}</p>
            <FormInput />
        </div>
    )
}