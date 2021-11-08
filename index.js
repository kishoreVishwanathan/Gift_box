
function getGeneratedGiftBoxes() {
    let number = document.getElementById('num');
    let btn = document.getElementById('btn');
    for (let i = 0; i < number.value; i++) {
        let images = new Image(40, 40);
        images.src = "images.jpeg";
        document.getElementById('gift_box').append(images);
    }
}