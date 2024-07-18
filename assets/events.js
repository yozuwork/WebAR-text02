alert("hi");
AFRAME.registerComponent('fixed-video-1', {
    init: function () {
        this.fixed_video_container = document.querySelector("#fixed-video-container-1");
        this.fixed_video = document.querySelector("#fixed-video-1");
        this.close_btn = document.querySelector("#fixed-video-container-1 .close-btn");
        this.el.addEventListener("click", this.onClick.bind(this));
        this.close_btn.addEventListener("click", e => {
            this.toggle = false;
            this.fixed_video_container.classList.remove("active");
            this.fixed_video.pause();
        });
    },
    onClick: function() {
        console.log("Clicked 1");
        if (!this.toggle) {
            this.toggle = true;
            this.fixed_video_container.classList.add("active");
            this.fixed_video.play();
        } else {
            this.toggle = false;
            this.fixed_video_container.classList.remove("active");
            this.fixed_video.pause();
        }
    }
});

// AFRAME.registerComponent('image-tracker-2', {
//     init: function () {
//         console.log("image-tracker-2 init");
//     },
//     tick: function() {
//         if (this.el.object3D.visible == true) {
//             alert("掃描點2")
//         }
//     }
// });
// AFRAME.registerComponent('image-tracker-3', {
//     init: function () {
//         console.log("image-tracker-3 init");
//     },
//     tick: function() {
//         if (this.el.object3D.visible == true) {
//             alert("掃描點3")
//         }
//     }
// });
// AFRAME.registerComponent('image-tracker-4', {
//     init: function () {
//         console.log("image-tracker-4 init");
//     },
//     tick: function() {
//         if (this.el.object3D.visible == true) {
//             alert("掃描點4")
//         }
//     }
// });