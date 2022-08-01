const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch (
        "https://picsum.photos/v2/list?limit=100"
    );
    const images = await res.json();
    console.log(images);
    selectRandomImage(images);
}


const selectRandomImage = function(images) {
    let randomIndex = Math.floor(Math.random() * images.length)
    // console.log(randomIndex);
    let randomImage = images[randomIndex];
    console.log(randomImage);
    displayImage(randomImage);
}

const displayImage = function(randomImage) {
    let author = randomImage.author;
    let imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
}

button.addEventListener("click", function () {
    getImage();
});

