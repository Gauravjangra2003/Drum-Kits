// Adding all sounds and images in kits
const kits = ["crash", "kick", "snare", "tom"];

const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    // Gets all images by using Kit
    btnEl.style.backgroundImage = "url(images/" + kit + ".png)";
    containerEl.appendChild(btnEl);
    const audioEl = document.createElement("audio");
    // Gets all sounds by using Kit
    audioEl.src = "sounds/" + kit + ".mp3";
    containerEl.appendChild(audioEl);
    // Event listners for playing all audio
    btnEl.addEventListener("click", () => {
        audioEl.play();
    });
    // Adding Text on Images
    window.addEventListener("keydown", (event) => {
        if (event.key === kit.slice(0, 1)) {
            audioEl.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout(() => {
                btnEl.style.transform = "scale(1)";
            }, 100);
        }
    });
});