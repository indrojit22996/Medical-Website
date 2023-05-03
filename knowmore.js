const seeMore = document.querySelector(".seemore-btn");

const seeLess = document.querySelector(".seeless-btn");

seeMore.addEventListener("click", () => {

 seeLess.classList.remove("see-hidden");
 seeMore.classList.add("see-hidden");
});
seeLess.addEventListener("click",()=>{
 
  seeLess.classList.add("see-hidden");
  seeMore.classList.remove("see-hidden");
});
