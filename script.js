function changeSlide(slideId) {

    document.querySelectorAll(".slide").forEach(slide => {

        slide.classList.remove("active");

    });

    document.getElementById(slideId).classList.add("active");

}


function openLetter() {

    changeSlide("slide2");

}


function goToReply() {

    changeSlide("slide3");

}


function sendReply() {

    const message = document
        .getElementById("replyMessage")
        .value
        .trim();


    const status = document
        .getElementById("statusMessage");


    if (message === "") {

        status.innerText =
            "Tulis sesuatu terlebih dahulu 🤍";

        return;

    }


    /*
    ====================================

    FIREBASE AKAN DITAMBAHKAN DI SINI

    ====================================
    */


    console.log("Pesan:", message);


    changeSlide("slide4");

}