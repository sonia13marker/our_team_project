import React, {useState} from 'react';
import { RWebShare } from "react-web-share";
import share_btn_black from '../../images/share_btn_ru.svg';
import share_btn_white from '../../images/share_btn_white.svg';

import copy_btn_black from '../../images/copy_btn_black.svg';
import copy_btn_white from '../../images/copy_btn_white.svg';

import { ColorImg } from '../ColorImg/ColorImg';

import style from './style.module.css';

export const ButtonShare = () => {

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
            <button onClick={copy} className={style.button}>{!copied ? <ColorImg src_white={share_btn_black} src_dark={share_btn_white} alt="share"/>
            
            : <ColorImg src_white={copy_btn_black} src_dark={copy_btn_white} alt="copy"/>}
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