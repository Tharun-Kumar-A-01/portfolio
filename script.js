document.addEventListener("scroll",(e)=>{
    if(this.oldScroll > this.scrollY){
        document.getElementById("navbar").style.top = "0px";
    } else {
        document.getElementById("navbar").style.top = "-240px";

    }
    this.oldScroll = this.scrollY;
})

const copy_email_btn = document.getElementById("copy-email");
copy_email_btn.addEventListener("click", (e)=>{
    e.preventDefault();
    
    navigator.clipboard.writeText("tharun.kumar.a.2006@gmail.com").then(() => {});
    copy_email_btn.innerHTML=`<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="var(--primary)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>`
    setTimeout(()=>{
    copy_email_btn.innerHTML=`<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="var(--text)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>`
    }, 2000);
})

const colors = [
    "#16a085",
    "#f39c12",
    "#8e44ad",
    "#3498db",
    "#16a085",
    "#e74c3c",
    "#f39c12"
];

const elements = document.querySelectorAll("p.s3tech");
console.log(elements);
// copy array so original is untouched
const shuffledColors = [...colors];

// Fisher–Yates shuffle
// for (let i = shuffledColors.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i + 1));
//   [shuffledColors[i], shuffledColors[j]] =
//     [shuffledColors[j], shuffledColors[i]];
// }

// apply unique colors
elements.forEach((el, i) => {
    el.style.color = shuffledColors[i % shuffledColors.length];
});