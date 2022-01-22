import React from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Link from 'react-router-dom';

const north ={
  titlename:["Haryana","Punjab","Jammu and Kashmir","Himachal Pradesh","Delhi","Chandigarh","Uttarakhand","Ladakh","Uttar Pradesh","Rajasthan"],
  titleimage:["https://digitltravel.com/wp-content/uploads/2021/04/places-to-visit-in-haryana-10.jpg","https://cdn.britannica.com/53/176353-050-5B854179/Harmandir-Sahib-Amritsar-Punjab-India.jpg","https://i1.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/03/Sonmarg-Baltal-Valley.jpg?fit=800%2C532&ssl=1","https://www.mihuru.com/blog/wp-content/uploads/2021/02/HIMACHAL-PRADESH.jpg","https://www.akshartours.com/wp-content/uploads/2020/08/Things-to-Do-in-Delhi.jpg","https://4.imimg.com/data4/VW/SU/GLADMIN-9258212/chandigarh-2-500x500.jpg","https://english.cdn.zeenews.com/sites/default/files/2021/03/12/922416-kedarnath-temple.jpg","https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/ladakh-landscape-1549352206-785X440.jpg","http://www.capertravelindia.com/images/up-2.jpg","https://www.revv.co.in/blogs/wp-content/uploads/2020/03/night-out-places-in-jaipur.jpg"],
  titlepara:["Haryana is a North Indian state surrounding New Delhi on 3 sides. The Yamuna River runs along its ...","Punjab is a state in northwest region of India and is one of the most prosperous ...","Jammu and Kashmir is home to several valleys such as the Kashmir Valley, Sind Valley and Lidder ...","Himachal Pradesh is a northern Indian state in the Himalayas. It's home to scenic mountain towns and resorts ...","Delhi, India’s capital territory, is a massive metropolitan area in the country’s north.Delhi officially the National Capital Territory ...","Chandigarh, the capital of the northern Indian states of Punjab and Haryana, was designed by the ...","Uttarakhand, a state in northern India crossed by the Himalayas, is known for its Hindu ...","Ladakh is a region administered by India as a union territory, and constitutes ...","Uttar Pradesh is a state in northern India. With over 200 million inhabitants, it is the most ...","Rajasthan is a state in northern India. It covers 342,239 square kilometres or 10.4 percent ..."]
}
const head ={pagename : "North India"};

function Table(){
    return<>
        <Heading title={head.pagename}></Heading>
        <div class="row row-cols-1 row-cols-md-4 g-4 m-5">
        <NorthImages 
image = {north.titleimage[0]}
iname = {north.titlename[0]}
ipara ={north.titlepara[0]}></NorthImages>
<NorthImages 
image = {north.titleimage[1]}
iname = {north.titlename[1]}
ipara ={north.titlepara[1]}></NorthImages>
<NorthImages 
image = {north.titleimage[2]}
iname = {north.titlename[2]}
ipara ={north.titlepara[2]}></NorthImages>
<NorthImages 
image = {north.titleimage[3]}
iname = {north.titlename[3]}
ipara ={north.titlepara[3]}></NorthImages>
<NorthImages 
image = {north.titleimage[4]}
iname = {north.titlename[4]}
ipara ={north.titlepara[4]}></NorthImages>
<NorthImages 
image = {north.titleimage[5]}
iname = {north.titlename[5]}
ipara ={north.titlepara[5]}></NorthImages>
<NorthImages 
image = {north.titleimage[6]}
iname = {north.titlename[6]}
ipara ={north.titlepara[6]}></NorthImages>
<NorthImages 
image = {north.titleimage[7]}
iname = {north.titlename[7]}
ipara ={north.titlepara[7]}></NorthImages>
<NorthImages 
image = {north.titleimage[8]}
iname = {north.titlename[8]}
ipara ={north.titlepara[8]}></NorthImages>
<NorthImages 
image = {north.titleimage[9]}
iname = {north.titlename[9]}
ipara ={north.titlepara[9]}></NorthImages>
        </div>
<Footer></Footer>

    </>
}
function Heading(props){
  return<> <div className="nav-box w-75">
  {props.title}   
</div>
</>
}

function NorthImages(props){
  return<>
 
  <div class="col">
    <div class="card border-dark h-100">
      <img src={props.image} class="card-img-top h-50" alt={"North Images"}/>
      <div class="card-body">
        <h5 class="card-title ">{props.iname}</h5>
        <p class="card-text">{props.ipara}</p>
        <button class="btn btn-primary">View more...</button>
      </div>
    </div>
  </div>  
  </>
}

function Footer(){
  return<>
    <div className="container-fluid foot">
    <div className="row mx-5">
    <div class="col-sm-4" >
      <h4>
        India Tour
        </h4><br></br>
        <p> Awarded with the prestigious National Tourism Award as the Best India Tour Operator for excellence in India Tourism Industry, we have been providing top of the line professional india travel services since the year 1998. </p>
      </div>
      <div class="col-sm-4">

        <h4>
        Contact Details
        </h4><br></br>
        <p>
        Under Secretary (IT)<br></br>
Ministry of Tourism,<br></br>
126 Transport Bhawan<br></br>
Sansad Marg,<br></br>
New Delhi<br></br>
<table>
  <tr><td><svg xmlns="http://www.w3.org/2000/svg" width="16 " height="16" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
  <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
</svg></td>
<td>+91-011 23311237</td></tr>
</table>
        </p>
      </div>
    
      
      <div class="col-sm-4">
        <img style={{width:"200px",height:"60px"}} src={"https://www.seekpng.com/png/detail/423-4230537_search-for-incredible-india-atulya-bharat.png"}></img>
        <br></br>
        <table>
  <tr><td colspan="2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg></td>
<td colSpan="3">info@incredibleindia-tourism.org,info@caper.in</td></tr>
<tr>
  <td colspan="2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
</svg></td>
  <td colspan="3">http://www.incredibleindia-tourism.org/</td>
</tr>
</table>
<ul className="social_media">
  <li><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg></li>
  <li><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
</svg></li>
  <li><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg></li>
  <li><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
</svg></li>
  <li><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg></li>
</ul>

      </div>
     
    </div>
    <div class="row mx-5">
      <div class="col ">
      <p>India has a myriad of landscapes, great heritage and culture, varied flora and fauna. The country is the most preferred tourist destinations for tourists from all across the world for its picturesque landscapes, spectacular waterfalls, habitat of the country's largest tiger reserve and home to the warmest people on earth.</p>
      <hr style={{height:"2px",color:"white",opacity:"inherit"}}></hr>
      <p style = {{textAlign:"center"}} >&#169; Ministry of Tourism, Government of India,2021</p>
      </div>

    </div>
  </div>
  </>
  
}
export default Table;

