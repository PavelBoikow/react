import './App.css';
import Pinalt from "./jpg/🦆 icon _pin alt_.svg";
import phone from "./jpg/🦆 icon _phone_.svg";
import mail from "./jpg/🦆 icon _mail_.svg";
import fast from "./jpg/u6Lg.png";
import img from "./jpg/🦆 icon _hamburger menu_.svg";
import left from "./jpg/Group 3.svg";
import reght from "./jpg/Group 4.svg";
import img1 from "./jpg/Iqve7ZyrKeU.jpg";
import img2 from "./jpg/eEnx4YUgLhI.jpg";
import img3 from "./jpg/_386_pb4bp4.jpg";
import home_right from "./jpg/DXKuaXBRUpk.jpg";
import grupp from "./jpg/Group 20.svg";
import ellepse from "./jpg/Ellipse 3.svg";

function App() {
  return (
      <div className="App">
          <div className="main">
              <div className="header_top">
                  <div className="header_top_adres">
                      <img src={Pinalt} className="header_top_img"/>
                      ул. Дзержинского, 17/11, ауд. 236, Кострома
                  </div>
                  <div>
                      <ul className="header_top_list">
                          <li className="header_top_list_items">
                              <img src={phone} className="header_top_img"/>
                              +7 (4942) 63-49-00
                          </li>
                          <li className="header_top_list_items" >
                              <img src={mail} className="header_top_img"/>
                              fast@ksu.edu.ru
                          </li>
                      </ul>
                  </div>
              </div>

              <div className="header_bottom">
                  <div className="header_bottom_list_div_img">
                      <img src={fast} className="header_bottom_img"/>
                  </div>
                  <div className="header_bottom_list_div">
                      <button id="menu_button" className="header_bottom_list_div_mob">
                          <img src={img}/>
                      </button>
                      <ul id="header_menu" className="header_bottom_list">
                          <li name="header_ul" className="header_bottom_list_items"><h4>Главная</h4></li>
                          <li className="header_bottom_list_items"><h4>Мероприятия</h4></li>
                          <li className="header_bottom_list_items"><h4>Студенчиские объединения</h4></li>
                          <li className="header_bottom_list_items"><h4>Стипендиаты</h4></li>
                          <li className="header_bottom_list_items"><h4>Документы</h4></li>
                          <li className="header_bottom_list_items"><h4>Контакты</h4></li>
                      </ul>
                  </div>
              </div>
              <div className="home_back">
                  <div className="home_backgraund"></div>
                  <div className="home">
                      <div className="home_left">
                          <div></div>
                          <div><h1 className="home_left_t2">Воспитательная работа</h1></div>
                          <div><p className="home_left_t3">На этом сайте вы сможите ознакомиться с воспитательой работой на факультете ИАСТ.</p></div>
                          <div className="home_left_div">
                              <div className="home_click_left"> 
                                  <button id="home_click_left" className="home_bottom_cl"><img src={left}/></button>          
                              </div>
                              <div className="home_click_right"> 
                                  <button id="home_click_right" className="home_bottom_cl"><img src={reght}/></button>
                              </div>
                              <img id="home_left_img_1" className="home_left_img " src={img1}/>
                              <img id="home_left_img_2" className="home_left_img display_none" src={img2}/>
                              <img id="home_left_img_3" className="home_left_img display_none" src={img3}/>
                          </div>
                          <div className="home_left_div_panl">
                              <div id="home_left_div_panl_1" className="home_left_div_panl_box home_left_div_panl_box_akt"></div>
                              <div id="home_left_div_panl_2" className="home_left_div_panl_box"></div>
                              <div id="home_left_div_panl_3" className="home_left_div_panl_box"></div>
                          </div>
                      </div>
                      <div className="home_right">
                          <div className="home_right_text"><h3>Ближайшие мероприятия:</h3></div>
                          <div>
                              <div className="home_right_box">
                                  <div className="home_right_box_up">
                                      <div className="home_right_box_up_text"><h4 className="pading">Студенческая весна 2024</h4></div>
                                      <div className="home_right_box_up_text">15 Января</div>
                                  </div>
                                  <div className="home_right_box_down">
                                      <div><img className="home_right_box_down_img" src={home_right}/></div>
                                      <div className="home_right_box_down_text">Ежегодное творческое мероприятие, на котором студенты пробуют себя с творческой стороны.</div>
                                  </div>
                              </div>
                              <div className="home_right_box">
                                  <div className="home_right_box_up">
                                      <div className="home_right_box_up_text"><h4 className="pading">Студенческая весна 2024</h4></div>
                                      <div className="home_right_box_up_text">15 Января</div>
                                  </div>
                                  <div className="home_right_box_down">
                                      <div><img className="home_right_box_down_img" src={home_right}/></div>
                                      <div className="home_right_box_down_text">Ежегодное творческое мероприятие, на котором студенты пробуют себя с творческой стороны.</div>
                                  </div>
                              </div>
                              <div className="home_right_box">
                                  <div className="home_right_box_up">
                                      <div className="home_right_box_up_text"><h4 className="pading">Студенческая весна 2024</h4></div>
                                      <div className="home_right_box_up_text">15 Января</div>
                                  </div>
                                  <div className="home_right_box_down">
                                      <div><img className="home_right_box_down_img" src={home_right}/></div>
                                      <div className="home_right_box_down_text">Ежегодное творческое мероприятие, на котором студенты пробуют себя с творческой стороны.</div>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
                  <div className="bottom_mob">
                      <div className="home_bottom">
                          <div className="home_bottom_oval">
                              <img src={grupp}/>
                              <div>
                              <p className="home_bottom_oval_p">100+ Студентов</p> 
                              <p className="home_bottom_oval_p">Учавствуют</p>
                              </div>
                          </div>
                          <div className="home_bottom_oval">
                              <img src={ellepse}/>
                              <div>
                              <p className="home_bottom_oval_p">5+</p> 
                              <p className="home_bottom_oval_p">Студенческих объеденений!</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>                                
          </div>
      </div>
  );
}

export default App;
