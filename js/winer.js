("use strict");

document.addEventListener("DOMContentLoaded", function () {
  const openPopupVideo = document.querySelectorAll(".winer__video");
  const popupVideo = document.getElementById("popupVideo");
  const popupVideoClose = document.getElementById("popupVideoClose");

  if (popupVideo) {
    openPopupVideo.forEach((button) => {
      button.addEventListener("click", function () {
        const buttonTime = button.getAttribute("data-time");
        const buttonPrize = button.getAttribute("data-prize");

        // Show the popup
        popupVideo.style.display = "flex";

        // Find and display the matching video
        const videos = popupVideo.querySelectorAll("video");
        videos.forEach((video) => {
          const videoTime = video.getAttribute("data-time");
          const videoPrize = video.getAttribute("data-prize");

          if (videoTime === buttonTime && videoPrize === buttonPrize) {
            video.style.display = "block";
            video.play();
          } else {
            video.style.display = "none";
            video.pause();
            video.currentTime = 0; // Reset video playback
          }
        });
      });
    });

    // Close popup logic
    popupVideoClose.addEventListener("click", function () {
      popupVideo.style.display = "none";

      // Stop all videos when popup is closed
      const videos = popupVideo.querySelectorAll("video");
      videos.forEach((video) => {
        video.pause();
        video.currentTime = 0; // Reset video playback
        video.style.display = "none"; // Hide the video
      });
    });
  }


  const winersBlock = document.querySelectorAll(".winers__block");
  const showAllButtons = document.querySelectorAll(".winers__all");


  for (i = 0; i < showAllButtons.length; i++) {
    showAllButtons[i].addEventListener("click", toggleItem, false);
  }

  function toggleItem() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < winersBlock.length; i++) {
      winersBlock[i].className = "winers__block close";
    }
    if (itemClass == "winers__block close") {
      this.parentNode.className = "winers__block open";
    }
  }
});
