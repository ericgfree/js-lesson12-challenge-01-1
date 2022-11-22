const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch(
        "https://picsum.photos/v2/list?limit=100"
);
        const images = await res.json();
        // console.log(images);
        selectRanomImage(images);
}
const selectRanomImage = function (images) {
        const radomIndex = Math.floor(Math.random() * images.length);
        const radomImage = images[radomIndex];
        // console.log(radomIndex);
        // console.log(radomImage);
        displayImage(radomImage);
};

const displayImage = function (radomImage) {
        const author = radomImage.author;
        const imageAddress = radomImage.download_url;
        authorSpan.innerText = author;
        img.src = imageAddress;
        imgDiv.classList.remove("hide");
}
button.addEventListener("click", function () {
        getImage();
});
