import { useForm } from 'react-hook-form';
import style from './style.module.css';
import classnames from 'classnames';

export const FormInput = () => {
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
            Имя, фамилия: <span className={style.red}>*</span><br />
            <input className={style.input_1} placeholder="Введите имя" {...register("firstName", {
                required: 'Поле обязательно к заполнению',
                minLength: {
                    value: 2,
                    message: "Неправильно введено имя!"
                },
            })} 
            />
        </label>
        <span className={style.errors}>
            {errors?.firstName && <p>{errors?.firstName?.message || "Ошибка!"}</p>}
        </span>

            <div className={style.two_form}>

                <label className={style.label}>
                E-mail: <span className={style.red}>*</span> <br />
                <input className={style.input_2} placeholder="hello123@mail.ru" {...register("eMail", {
                    required: 'Поле обязательно к заполнению',
                   
                        //доделать!
                        pattern: "@",
                        message: "Неправильно введен e-mail!",
                })} 
                />
                </label>
            <div className={style.errors}>
                {errors?.eMail && <p>{errors?.eMail?.message || "Ошибка!"}</p>}
            </div>


            <label className={style.label}>
                Телефон: <span className={style.red}>*</span><br />
                <input className={style.input_2} placeholder="+7 (***) *** - ** - **" {...register("phoneNumber", {
                    required: 'Поле обязательно к заполнению',
                        max: 22,
                        min: {
                            value: 11,
                            message: "Неправильно введен номер телефона!"
                        },
                        
                })} 
                />
                </label>
            <div className={style.errors}>
                {errors?.phoneNumber && <p>{errors?.phoneNumber?.message || "Ошибка!"}</p>}
            </div>
            </div>

            <label className={style.label}>
                Сообщение: <br />
                <input className={style.input_1} placeholder="Введите ваше сообщение" {...register("messages", {
                    maxLength: {
                        value: 300,
                        message: "Вы привысили размер сообщения (максимум - 300 символов)"
                    },
                })} 
                />
                </label>
            <div className={style.errors}>
                {errors?.messages && <p>{errors?.messages?.message || "Ошибка!"}</p>}
            </div>


            <label className={style.radio_text}>
                <input className={style.input_3} type="radio" name="accept" value="yes" {...register("radio", {
                       required: "Обязательно для заполнения",
                       message: "Вы не дали согласие на обработку данных ", 
                })} 
                /> Я даю свое согласие на обработку персональных данных
                </label>
            <div className={style.errors}>
                {errors?.radio && <p>{errors?.radio?.message || "Ошибка!"}</p>}
            </div>

        <div className={style.btnWrapper}>
            <input type="submit"  disabled={!isValid} className={classnames(style.btnInner, style.submit)}/>
        </div>
    </form>

      </div>
}
