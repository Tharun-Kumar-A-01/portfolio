const menuIcon = document.getElementById("menu-icon");
const smMenu = document.getElementById("nav-sm");
const copy_email_btn = document.getElementById("copy-email");

menuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (menuIcon.getAttribute("src") === "./assets/menu-close.svg") {
    menuIcon.setAttribute("src", "./assets/menu-open.svg");
    smMenu.style.transform = "translateX(-105%)";
        
    } else {
    menuIcon.setAttribute("src", "./assets/menu-close.svg");
    smMenu.style.transform = "translateX(0)";
        
    }
});

// Close menu when clicking outside (Accessibility improvement)
menuIcon.addEventListener("click", (e) => {
    e.preventDefault();

    if (!smMenu.contains(e.target) && e.target !== menuIcon) {
        menuIcon.setAttribute("src", "./assets/menu-open.svg");
        smMenu.style.transform = "translateX(-105%)";
    }
});

// Keyboard Accessibility: Toggle menu with "Enter" key
menuIcon.addEventListener("keydown", (e) => {
    e.preventDefault();

    if (e.key === "Enter") {
        menuIcon.click();
    }
});

copy_email_btn.addEventListener("click", (e)=>{
    e.preventDefault();
    
    navigator.clipboard.writeText("tharun.kumar.a.2006@gmail.com");
    copy_email_btn.innerHTML=`<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="#00ff00"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>`
    setTimeout(()=>{
    copy_email_btn.innerHTML=`<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="#aaaaaa"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>`
    }, 2000);
})