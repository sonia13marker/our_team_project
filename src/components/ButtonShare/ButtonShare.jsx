import React, {useState} from 'react';
import { RWebShare } from "react-web-share";
import share_btn_black from '../../images/share_btn_ru.svg';
import share_btn_white from '../../images/share_btn_white.svg';

import share_en_btn from '../../images/share_en_btn.png'
import share_en_btn_black from '../../images/share_en_btn_black.png'

import copy_btn_black from '../../images/copy_btn_black.svg';
import copy_btn_white from '../../images/copy_btn_white.svg';

import copy_en_btn from '../../images/copied_en_btn.png';
import copy_en_btn_black from '../../images/copied_en_btn_black.png';

import { useTranslation } from "react-i18next";

import { ColorImg } from '../ColorImg/ColorImg';

import style from './style.module.css';

export const ButtonShare = () => {
    const { t, i18n } = useTranslation();

    const share_black = i18n.language === "ru" ?  share_btn_black : share_en_btn
    const share_white = i18n.language === "ru" ?  share_btn_white : share_en_btn_black
    const copied_black = i18n.language === "ru" ?  copy_btn_black : copy_en_btn
    const copied_white = i18n.language === "ru" ?  copy_btn_white : copy_en_btn_black

    /*это комментарии для замены кнопки, которая сейчас, на только коипрование ссылки при нажатии*/
    const [copied, setCopied] = useState(false);

    function copy() {
      const el = document.createElement("input");
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
    }
    // const telegram = "https://web.telegram.org/";
    // const vk="https://vk.com/";
    return (
        <div>
            <button onClick={copy} className={style.button}>{!copied ? <ColorImg src_white={share_black} src_dark={share_white} alt="share"/>

            : <ColorImg src_white={copied_black} src_dark={copied_white} alt="copy"/>}
        </button>
        </div>
    //     <div>
    //   <RWebShare
    //     data={{
    //       text: "WebClick - креативное агенство по созданию веб-сайтов",
    //       url: "http://localhost:3000",
    //       sites: vk['https://vk.com/'], 
    //       title: "WebClick",
    //     }}
    //     onClick={() => console.log("ссылка была скопирована")}
    //   >
    //     <button className={style.button}>
    //     <ColorImg src_white={share_btn_black} src_dark={share_btn_white} alt="share"/>
    //       </button>
    //   </RWebShare>
    // </div>
    )
}