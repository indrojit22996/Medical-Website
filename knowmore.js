const seeMore = document.querySelector(".seemore-btn");

const seeLess = document.querySelector(".seeless-btn");
const testiomnialHidden=document.querySelector(".testimonial-hidden-section")
seeMore.addEventListener("click", () => {
 
  testiomnialHidden.classList.remove("hidden-section");
 seeLess.classList.remove("see-hidden");
 seeMore.classList.add("see-hidden");
 
});
seeLess.addEventListener("click",()=>{
  testiomnialHidden.classList.add("hidden-section");
  seeLess.classList.add("see-hidden");
  seeMore.classList.remove("see-hidden");
});

