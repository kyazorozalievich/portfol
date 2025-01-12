import React, { useState } from "react";
import scss from "./Contact.module.scss";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineDescription } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  function submitTelegram() {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      description.trim() === ""
    ) {
      toast.error("Заполните пустые поля!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success("Отправлено", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      let my_id = `-1002155692436`;
      let token = `7379926721:AAGdHk5RpkeAFr5TOZApxisySaGqta-Lws4`;
      let api_key = ` https://api.telegram.org/bot${token}/sendMessage`;

      let newProduct = {
        chat_id: my_id,
        parse_model: "html",
        text: `
        Portfolio:
        Имя: ${name}
        E-mail: ${email}
        Комментарий: ${description}
        `,
      };

      axios.post(api_key, newProduct);
      setDescription("");
      setName("");
      setEmail("");
    }
  }

  return (
    <div className={scss.contact}>
      <div className='container'>
        <ToastContainer />
        <div className={scss.contactAll}>
          <div className={scss.contactMe}>
            <h5>04.</h5>
            <h1>Контакты</h1>
            <hr />
          </div>
          <div className={scss.contactInputs}>
            <div className={scss.contactInputDiv}>
              <h1>Свяжитесь с нами</h1>
              <p>
                Хотя сейчас я не ищу новых возможностей, мой почтовый ящик
                всегда открыт. Если у вас есть вопрос или вы просто хотите
                поздороваться, я постараюсь ответить вам!
              </p>
              <form>
                <div className={scss.contactInputAll}>
                  <input
                    type="text"
                    placeholder="Имя"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <a>
                    <FaRegUser />
                  </a>
                </div>
                <div className={scss.contactInputAll}>
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <a> 
                    <HiOutlineMail />
                  </a>
                </div>
                <div className={scss.contactInputAll}>
                  <textarea
                    placeholder="Сообщение"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  ></textarea>
                  <a>
                    <MdOutlineDescription />
                  </a>
                </div>
                <button onClick={() => submitTelegram()}>Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
