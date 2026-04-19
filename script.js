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
    copy_email_btn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--background)" viewBox="0 0 256 256"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>`
    setTimeout(()=>{
		copy_email_btn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--background)" viewBox="0 0 256 256"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>`
    }, 2000);
})

const colors = [
    "var(--error)",
    "var(--primary)",
    "var(--yellow)",
    "var(--accent)",
    "var(--blue)",
    "var(--yellow)",
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
	el.addEventListener("mouseenter", ()=>{
		el.style.backgroundColor = shuffledColors[i % shuffledColors.length];
		el.style.color = "var(--background)";
		el.style.borderColor = shuffledColors[i % shuffledColors.length];
	})
	el.addEventListener("mouseleave", ()=>{
		setTimeout(()=>{
			el.style.backgroundColor = "var(--background)";
			el.style.color = shuffledColors[i % shuffledColors.length];
			el.style.borderColor = "var(--background-300)";
		},500)
	})
});

// --- CONFIG ---
const SELECTOR = ".project";
const LINK_SELECTOR = "a"; // child element containing repo URL

// Minimal GitHub Linguist colors (extend as needed)
const COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  C: "#555555",
  "C++": "#f34b7d",
  Java: "#b07219",
  Shell: "#89e051",
  Go: "#00ADD8",
  Rust: "#dea584"
};

// --- UTIL: extract owner/repo from URL ---
function parseRepo(url) {
  const parts = new URL(url).pathname.split("/").filter(Boolean);
  return { owner: parts[0], repo: parts[1] };
}

// --- API CALL ---
async function fetchLanguages(owner, repo) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
  if (!res.ok) throw new Error("API error");
  return res.json();
}

// --- RENDER LOADING ---
function renderLoading(container) {
  container.innerHTML = `
    <div style="">
      <div style=""></div>
    </div>
  `;
}

function renderLanguages(container, legendEl, data) {
	const total = Object.values(data).reduce((a, b) => a + b, 0);

	container.innerHTML = "";
	legendEl.innerHTML = "";

	container.style.display = "flex";
	container.style.height = "10px";
	container.style.borderRadius = "2px";
	container.style.overflow = "hidden";

	// --- STEP 1: normalize + group ---
	const THRESHOLD = 0.9; // percent cutoff
	let grouped = {};
	let othersBytes = 0;

	for (const [lang, bytes] of Object.entries(data)) {
		const percent = (bytes / total) * 100;

		const isUnknown = !COLORS[lang];
		const isSmall = percent < THRESHOLD;

		if (isUnknown || isSmall) {
			othersBytes += bytes;
		} else {
			grouped[lang] = bytes;
		}
	}

	if (othersBytes > 0) {
		grouped["Others"] = othersBytes;
	}

	// --- STEP 2: render ---
	for (const [lang, bytes] of Object.entries(grouped)) {
		let percent = (bytes / total) * 100;
		let approx = false;
		if (percent < 1) {
			percent = 1;
			approx = true;
		}
		const color =
			lang === "Others"
				? "var(--text)"
				: COLORS[lang] || "var(--text)";

		// segment
		const seg = document.createElement("div");
		seg.classList.add("language-seg");
		seg.style.width = percent.toFixed(2) + "%";
		seg.style.backgroundColor = color;
		container.appendChild(seg);

		// legend
		const item = document.createElement("span");
		item.style.marginRight = "10px";
		item.style.fontSize = "12px";

		const dot = document.createElement("span");
		dot.style.display = "inline-block";
		dot.style.width = "8px";
		dot.style.height = "8px";
		dot.style.borderRadius = "50%";
		dot.style.backgroundColor = color;
		dot.style.marginRight = "4px";

		item.appendChild(dot);
		item.append(`${lang} (${ approx ? "~1" : percent.toFixed(2)}%)`);
		legendEl.appendChild(item);
	}
}

// --- MAIN PIPELINE ---
async function processRepoCard(card) {
  const link = card.querySelector(LINK_SELECTOR);
  if (!link) return;

  const { owner, repo } = parseRepo(link.href);

  const bar = card.querySelector(".lang-bar");
  const legend = card.querySelector(".lang-legend");

  renderLoading(bar);

  try {
    const data = await fetchLanguages(owner, repo);
    renderLanguages(bar, legend, data);
  } catch (err) {
    bar.innerHTML = "Failed to load";
  }
}

// --- INIT ---
function initRepoBars() {
  const cards = document.querySelectorAll(SELECTOR);
  cards.forEach(processRepoCard);
}

// run after DOM ready
initRepoBars();