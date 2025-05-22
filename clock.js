const secondHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();
    const secondDegree = ((seconds / 60) * 360); 
    const minsDegree = ((mins / 60) * 360) + ((seconds / 60) * 6); 
    const hourDegree = ((hour % 12) / 12) * 360 + ((mins / 60) * 30); 
secondHand.style.transform = `rotate(${secondDegree + 90}deg)`;
minHand.style.transform = `rotate(${minsDegree + 90}deg)`;
hourHand.style.transform = `rotate(${hourDegree + 90}deg)`;
}
setInterval(setDate, 1000);
setDate();
 function updateClock() {
  const now = new Date();
  let hour = now.getHours().toString();
  const minute = now.getMinutes().toString().padStart(2, '0');
  const second = now.getSeconds().toString().padStart(2, '0');
  let c = "AM";
    if(hour > 12){
     hour = hour -12;
     c = "PM";
    }
    const hours = hour.toString().padStart(2, '0');
  const fullTime = `${hours}:${minute}:${second}  ${c}`;
  document.getElementById('clock').innerHTML = fullTime;
}
  setInterval(updateClock, 1000);
  updateClock(); 