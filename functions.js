const bannerArr = document.getElementsByClassName('d-block');
for (let i = 0; i < bannerArr.length; i++) {
    // bannerArr[i].title = "ss"
    console.log(bannerArr[i])
    if (bannerArr[i].src == "unknown") {
        bannerArr[i].style.backgroundColor = "yellow";
        console.log("eee")
    }
}