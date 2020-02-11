import React from "react";
import '../styles/App.css';
import { Carousel } from 'antd';
import ReactDOM from 'react-dom';



class Home extends React.Component {
    render() {
        return (

            <div>
                <h1>Home page</h1>
            <Carousel autoplay>
                <div>
                    <img className="img" src="https://lh3.googleusercontent.com/xBp7SUa8ERpmdyOpW6q1Q65iZO0zzTO5_N4cdm_tvDxQtTENFFEqLkvzQavN-rle_WAgGM57CgovOVfrhJKbJVArmJTzvx56-xZcxxI09lmm3VfFPVFRhkFiLBbI5rQeHfKt-TCo0P75N2ijGh-ONYDbeUqPPwmdVwBqvo6EAbQ3NaD3PRJFrOv_p9cxsAeCeKTG3l6hI7TuKdjUKMTBN7t-HETtv57LIe86ZVsaL1H8lxgMmfeXBGfbUUk_heaGqI7Np_TBxHQVlUYDxiw4aIZLQ0x56naODNrJl9zkxraSzSVspWG0ThktPRQ6ZfiVnTWrtsiOGjlCbQuue8I_2T9CU7QgbFfTl9b5H1s0402xCnbkBUCr87DtbyoCpyQa9UHACY3ZDitmsU-o519qbq2r4EbVd4q3g7YzF9T_Xr0dNq5WZSHZUct5SSzT18XVAqioAd55z4XW7osUUwZWFiYiORpGoApZB354x_WIF6TTnmLlDaRucUqtJ1pahnUtIfJ8poe0MGCT9iLnWmSBRirEzTgE-1KsuxrcrJI6YVZ3xqzL3zOla75P89sGqufJbwjjRAp0WpNCW7JLa1xKFDh83x9D5iyRcJTM6Q8z2qtnefNYEvkKQ4Vrjw9NOnXmCs-C1hBsDXY29rgs4Kvqx8RxN838y6ZEC73lbT2ziqPkR0RJhmOcUlg_=w718-h404-no"/>
                </div>
                <div>
                    <img className="img" src="https://lh3.googleusercontent.com/e5jN-CYhE8YPigPld_hWyxsDYDIpacqEql64aoAanChyaAyXueIx6V_e_TsjxXyTEiAr6Blw-_mt9-ygcUgIvn7VGrMZk1PMYmlLkdYgxkv6B233TvUJ0WWvdVCkgsr43OSysmf3TfKN-qqQ-xYDqSfCbCfZYlXaSmvKONV0CXg-1BRdDfyQaqcWJ-AgWCHVOrVnNSqI-lSxbyvmg2gxmQjmuhv4DYDndlnQyOSLM4c_IVMqNFjimEHwEEjSqUpDH4FkyubbCSbBTVXKDkRxRi6R0eqwCHhtneHI6iteENUGaKFAozz56z4tSyybVxJ8wuWVbvkkkpGam_E6THL6yv5Q00GAwCYduCdGM29-HsZltjJOMrriGlsYjBvpr87CMkA_B0DHyNvY1h7RU1e0TRN4oF83HB2HGeOAp-oyLIj5pwRaqJQVHm4BPk9AUgTI-1u6ST7L9xvOQvAhSk9jIQFjC3q9PZhn2ZBwzL4pGiEtKgBRx9DjttIh-AlSyy_8y2h7qwGZBiiswHaxo4i4gidJ115qcEWPf9_0n8b6epRbc9qWEWRk9p4DzCDMcEOMYQrLc93x4ygP6WnOo02xzGnk3TZsBekdmGLUJolYliAPGntStoTu0ZJbW51Q0OxrQbaNVTku_bmmkuddc-XgpHyKvVwg5y7aY25D7Yd6q1o0d-wP-WjFdMLa=w952-h536-no"/>
                </div>
                <div>
                    <img className="img" src="https://lh3.googleusercontent.com/x7Okz-YKj-kZ7UZs05wO3pMZ4dW-ma7394s0IlzLbVriFy9nfzzIOq1A2yhO1Mr55Dq9djh_YaMaYU7Wd-2QUWiU_EDrUZeUOIeotPFY069r44V-qLICG8Di4P9xrLWIplOH6n9VNKVgtZY5sdJGA34NEdCM5SUTui4LrofLuKJp86sTnA5hBJd83r-6YWxTmFZiVumdWvb4PQBc8KGb_Y_5nvgtsfeqqLk2nUY9WvBHEohaDuUiQHGxMMPa7gOEVcdycg_UH7kcF5s_YzVAuIvfvg5ccxT3PSVwR8DPkluk86iWU7xTP4kafN9QIu_AZcqObGSvNXL-kCC_T-hLMyOsJRGxENErHn_9h894LZNQI9MMxidwcEqbXGJ2kJ0LY2RZBvTmqhXORZp2JmSdOiiLQAT5RYOw-X4iLBrokFNy9gGHwl6XDqhrKLf6wnaHp4OX4xV66h3l1aWFAQGG0vEIGNohHiJkTIkNOzsOQyQmgbiRAR4nsahUA8i3DS8SgMvOdJDZftBeQOYh-XPvIojOjuOOptryR37bfG8-jR7nk7EbpUUynLg44TNdGh7iP2fwJuU5T5LgfKXiLFW2s13sn_kRpq6imdjV_Y9iUnjQHjzaJ8AOwYgWpngtJNReOatcALw-sBwcDxfcL43vYZuJReb9CXv7ME79XoXOysgxocKl3950dCLc=w952-h536-no"/>
                </div>
            </Carousel>
            </div>
        );
    }
}
ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;