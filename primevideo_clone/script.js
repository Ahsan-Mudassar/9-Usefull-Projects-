const mainnav = document.querySelector(".main-nav");
const menu = document.querySelector(".menu");
const search = document.getElementById("inp-search");
const icon = document.getElementById("icon");
const mainsection = document.querySelector(".main-section");

icon?.addEventListener('click', () => {
    if (search?.style.display === "none") {
        search.style.display = "block";
        search.focus();
    } else {
        search.style.display = "none";
    }
});

mainsection?.addEventListener('click', () => {
    search.style.display = "none";
})
menu?.addEventListener('click', () => {
    if (mainnav?.style.display === "none") {
        mainnav.style.display = "block";
    } else {
        mainnav.style.display = "none";
    }
})

mainsection?.addEventListener('click', () => {
    mainnav.style.display = "none";
})