AFRAME.registerComponent('image-tracker-1', {
    init: function () {
        console.log("image-tracker-1 init");
    },
    tick: function() {
        if (this.el.object3D.visible == true) {
            alert("掃描點1")
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