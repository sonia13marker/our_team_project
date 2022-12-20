import React from 'react';
import { RWebShare } from "react-web-share";
import share_btn from '../../images/share_btn.png'

import style from './style.module.css';

export const ButtonShare = () => {

    /*это комментарии для замены кнопки, которая сейчас, на только коипрование ссылки при нажатии
    const [copied, setCopied] = useState(false);

    function copy() {
      const el = document.createElement("input");
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
    }*/
    // const telegram = "https://web.telegram.org/";
    const vk="https://vk.com/";
    return (
        // <div>
        //     <button onClick={copy}>{!copied ? "Поделиться" : "Скопировано!"}</button>
        // </div>
        <div>
      <RWebShare
        data={{
          text: "WebClick - креативное агенство по созданию веб-сайтов",
          url: "http://localhost:3000",
          sites: vk['https://vk.com/'], 
          title: "WebClick",
        }}
        onClick={() => console.log("ссылка была скопирована")}
      >
        <button className={style.button}><img src={share_btn} alt="share" className={style.share}/></button>
      </RWebShare>
    </div>
    )
}