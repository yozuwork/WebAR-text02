

AFRAME.registerComponent('image-tracker-1', {
    init: function () {
        alert("image-tracker-1 init");
    },
    tick: function() {
        if (this.el.object3D.visible == true) {
            alert("掃描點2")
        }
    }
});
