import React, { useState } from "react";
import "./App.css";
alert("سلام محمد باغانی  برنامه نویس هستم این  یه مینی شاپ هست که با ریداکس زدم !")
export default function App({ counter, onIncrement, onDecrement, onRestart }) {
  let A =
    [




      '/images/coueses of english/ts (1).jpg',
      '/images/coueses of english/ts(6).png',

      '/images/coueses of english/ts (5).png',

      '/images/coueses of english/ts (3).jpg',
    ]

  let B =
    [
      'مشکی',



      'سفید',
      'سبز ',
      'سفید',


    ]
  let C =
    [
      'تیشرت اسپرت  دخترانه ',

      'تیشرت خنک  جوان پسند ',

      'تیشرت اصل ترکیه',

      'تیشرت خنک تابستانه ',

    ]

  let D =
    [
      '350 ',
      '600 ',

      '800 ',

      '900 ',

    ]
  return (
    <div className="container">

      <h1 id="num" className=" titr" fontsize={"32px"} width={"100%"} height={"100%"}>{C[`${counter}`]}</h1>

      <h1 id="num" className=" text " fontsize={"32px"} width={"100%"} height={"100%"}>{B[`${counter}`]}</h1>
      <h1 id="num" className=" color " fontsize={"32px"} width={"100%"} height={"100%"}>: رنگ</h1>
      <h1 id="num" className="text-price "
        fontsize={"32px"} width={"100%"} height={"100%"}>
        : قیمت</h1>
      <h1 id="num" className=" price " fontsize={"32px"} width={"100%"} height={"100%"}>

        <>   {D[`${counter}`]}
        </>
        <>  هزار تومان
        </>
      </h1>
      <img className=" picture " src={A[`${counter}`]}height={"300px"}></img>
      <div className="btns">
        <button className="dec" onClick={onDecrement}>
          قبلی
        </button>
        <button className="reset" onClick={onRestart}>
          اولین
        </button>
        <button className="inc" onClick={onIncrement}>
          بعدی
        </button>
      </div>
    </div>
  );
}






