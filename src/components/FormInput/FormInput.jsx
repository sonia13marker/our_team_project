import { useForm } from 'react-hook-form';
import style from './style.module.css';
import classnames from 'classnames';

import { useTranslation } from "react-i18next";

export const FormInput = () => {
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
      } = useForm({
        mode: "onBlur"
      });
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
      }


      return <div>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <label className={style.label}>
            {t("name_surname")} <span className={style.red}>*</span><br />
            <input className={style.input_1} placeholder={t("placeholder1")} {...register("firstName", {
                required: t("required1"),
                minLength: {
                    value: 2,
                    message: t("message1")
                },
            })} 
            />
        </label>
        <span className={style.errors}>
            {errors?.firstName && <p>{errors?.firstName?.message || t("error")}</p>}
        </span>

            <div className={style.two_form}>

                <label className={style.label}>
                E-mail: <span className={style.red}>*</span> <br />
                <input className={style.input_2} type="email" placeholder="hello123@mail.ru" {...register("eMail", {
                    required: t("required1"),
                   
                        //доделать!
                        pattern: "@",
                        message: t("message2"),
                })} 
                />
                </label>
            <div className={style.errors}>
                {errors?.eMail && <p>{errors?.eMail?.message || t("error")}</p>}
            </div>


            <label className={style.label}>
                {t("phone_number")} <span className={style.red}>*</span><br />
                <input className={style.input_2} type="tel" placeholder="+7 (***) *** - ** - **" {...register("phoneNumber", {
                    required: t("required1"),
                        max: 22,
                        min: {
                            value: 11,
                            message: t("message3")
                        },
                        
                })} 
                />
                </label>
            <div className={style.errors}>
                {errors?.phoneNumber && <p>{errors?.phoneNumber?.message || t("error")}</p>}
            </div>
            </div>

            <label className={style.label}>
                {t("message_message")} <br />
                <input className={style.input_1} type="text" placeholder={t("placeholder2")} {...register("messages", {
                    maxLength: {
                        value: 300,
                        message: t("message4")
                    },
                })} 
                />
                </label>
            <div className={style.errors}>
                {errors?.messages && <p>{errors?.messages?.message || t("error")}</p>}
            </div>


            <label className={style.check_text}>
                <input className={style.input_3} type="checkbox" name="accept" value="yes" {...register("agree", {
                       required: t("required1"),
                       message: t("message5"), 
                })} 
                /> {t("agree")}
                </label>
            <div className={style.errors}>
                {errors?.agree && <p>{errors?.agree?.message || t("error")}</p>}
            </div>

        <div className={style.btnWrapper}>
            <input type="submit" disabled={!isValid} className={classnames(style.btnInner, style.submit)}/>
        </div>
    </form>

      </div>
}
