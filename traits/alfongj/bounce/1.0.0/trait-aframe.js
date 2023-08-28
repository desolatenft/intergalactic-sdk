export const traitName = "bounce";

export const traitEventHandlers = {
  init: function () {
    this.bounceTicker = 0;
  },

  tick: function () {
    const currentPosition = this.el.object3D.position;
    this.bounceTicker++;

    // Translate the entity in the direction towards the target.
    this.el.setAttribute("position", {
      x: currentPosition.x,
      y: currentPosition.y + Math.sin(this.bounceTicker * 0.05) * 0.03,
      z: currentPosition.z,
    });
  },
};
