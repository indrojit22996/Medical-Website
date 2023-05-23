// Inisilize The Variable
const requestCallBackBtn = document.querySelector(".request-btn");
const requestContainer = document.querySelector(".request-call-cont");
const requestCloseBtn = document.querySelector(".request-call-close");
// Function Declirition

// Request btn Function
requestCallBackBtn.addEventListener("click", () => {
  requestContainer.classList.remove("request-hidden");
});
// Request btn Function closeing the window
requestCloseBtn.addEventListener("click", () => {
  requestContainer.classList.add("request-hidden");
});
// Blur Event add
window.addEventListener(
  "blur",
  () => {
    requestContainer.classList.add("request-hidden");
    // knowMoreContainer.classList.add("know-hidden");
    readMoreContainer.classList.add("readmore-hidden");
    dataContainer.classList.add("database-hidden");
  },
  true
);
const knowMoreBtn = document.querySelector(".konwmore-btn");
const knowMoreContainer = document.querySelector(".knowmore-cont");
const KnowMoreCloseBtn = document.querySelector(".knowmore-close");
// Knowmore btn Function
knowMoreBtn.addEventListener("click", () => {
  knowMoreContainer.classList.remove("know-hidden");
});
// Knowmore btn Popup Closeing Function
KnowMoreCloseBtn.addEventListener("click", () => {
  knowMoreContainer.classList.add("know-hidden");
});

let readMore = document.querySelector(".read-btn");
let readMoreContainer = document.querySelector(".read-more-popup");
readMore.addEventListener("click", () => {
  readMoreContainer.classList.remove("readmore-hidden");
});
let readMoreCloseBtn = document.querySelector(".readmore-close");
readMoreCloseBtn.addEventListener("click", () => {
  readMoreContainer.classList.add("readmore-hidden");
});
// our Service section See all button function
let doctorSeeAll = document.querySelector(".depermentSeeall");
let doctorSeeLess = document.querySelector(".depermentSeeless");
let seeAllcont = document.querySelector(".deperment-seeall");
doctorSeeAll.addEventListener("click", seeallFunction);
function seeallFunction() {
  console.log("Buttom Clicked");
  seeAllcont.classList.remove("deperment-hidden");
  doctorSeeAll.remove();
}
doctorSeeLess.addEventListener("click", seeLessFunction);
function seeLessFunction() {
  seeAllcont.classList.add("deperment-hidden");
  document.querySelector(".seeallBtn-cont").appendChild(doctorSeeAll);
}
// function nothing() {
//   let person = prompt("Please enter your name");
//   if (person != null) {
//     alert(`Hi ${person} Wellcome in Doctor World`);
//     alert(`Please ${person} Explore our website and feetback us.`);
//     alert(`Thank You ${person}`);
//   }
// }
// nothing();
//
// creating Data Popup
let dataDetailsBtn = document.querySelector(".details-btn");
let dataContainer= document.querySelector(".database-popup");
dataDetailsBtn.addEventListener("click", () => {
  dataContainer.classList.remove("database-hidden");
});
document.querySelector(".database-close").addEventListener("click", () => {
  dataContainer.classList.add("database-hidden");
});

// Network Call
let appointmentBtn = document.querySelector(".appoinment-btn");
let url = "db15ba33edd84652a483cd58805ea80c";
// show data function for Final list


// Show Data to A page Function
function showData(userDetail) {
  let display = document.querySelector(".display-list");
  let liEliment = document.createElement("li");
  liEliment.classList = "container";
  liEliment.style.marginTop = "2%";
  liEliment.id=userDetail._id;
  liEliment.textContent = JSON.stringify(
    `Name = ${userDetail.firstName} ${userDetail.lastName}, PhoneNo = ${userDetail.phoneNumber}, Date = ${userDetail.date}, Time = ${userDetail.time}, Address = ${userDetail.addressOne} and ${userDetail.addressTwo}, Depertment Name = ${userDetail.deperment}, Doctor Name = ${userDetail.doctor} `
  );
  // creating Accpet Button
  let accpetBtn=document.createElement("button");
  accpetBtn.className="btn";
  accpetBtn.classList.add("btn-success");
  accpetBtn.textContent="Accpet";
  accpetBtn.style.marginLeft="2%";
    // creating Reject Button
    let rejectBtn=document.createElement("button");
    rejectBtn.className="btn";
    rejectBtn.classList.add("btn-danger");
    rejectBtn.textContent="Reject";
    rejectBtn.style.marginLeft="2%";
    // Append Child
    // liEliment.innerHTML="<hr/>"
  liEliment.appendChild(accpetBtn);
  liEliment.appendChild(rejectBtn);
  display.appendChild(liEliment);
 
}
// Page Loading Content Function
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(`https://crudcrud.com/api/${url}/ApointmentDetail`)
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        showData(response.data[i]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

// Book appointment Btn function

appointmentBtn.addEventListener("click", () => {
  console.log("clicked");
  const firstName = document.querySelector(".firstname-js").value;
  const lastName = document.querySelector(".lastname-js").value;
  const phoneNumber = document.querySelector(".phoneno-js").value;
  const date = document.querySelector(".date-js").value;
  const time = document.querySelector(".time-js").value;
  const addressOne = document.querySelector(".addresone-js").value;
  const addressTwo = document.querySelector(".addrestwo-js").value;
  const deperment = document.querySelector(".deperment-js");
  let devermentValue = deperment.options[deperment.selectedIndex].text;
  const doctor = document.querySelector(".doctor-js");
  let doctorValue = doctor.options[doctor.selectedIndex].text;
  // console.log(firstName)
  // console.log(lastName)
  // console.log(phoneNumber)
  // console.log(date)
  // console.log(time)
  // console.log(addressOne)
  // console.log(addressTwo)
  // console.log(devermentValue)
  // console.log(doctorValue)
  // Creating a Object
  let userDetail = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    date: date,
    time: time,
    addressOne: addressOne,
    addressTwo: addressTwo,
    deperment: devermentValue,
    doctor: doctorValue,
  };

  axios
    .post(`https://crudcrud.com/api/${url}/ApointmentDetail`, userDetail)
    .then((res) => {
      alert(
        `Hi ${res.data.firstName} ${res.data.lastName} your Appioment request will send ${res.data.date} at ${res.data.time} with Dr. ${res.data.doctor}`
      );
      alert(`Plese wait Mr. ${res.data.firstName} ${res.data.lastName}  `)
    })
    .catch((err) => {
      console.log(err);
    });

  // After click button input are empty
  document.querySelector(".firstname-js").value = "";
  document.querySelector(".lastname-js").value = "";
  document.querySelector(".phoneno-js").value = "";
  document.querySelector(".date-js").value = "";
  document.querySelector(".time-js").value = "";
  document.querySelector(".addresone-js").value = "";
  document.querySelector(".addrestwo-js").value = "";
  document.querySelector(".deperment-js").value = "Decreationg apartment";
  document.querySelector(".doctor-js").value = "Doctor";
});
