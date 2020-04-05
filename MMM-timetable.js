Module.register("MMM-timetable", {
  defaults: {
    classes: [
      "5a",
      "5b"
    ]
  },
  start: function () {},
  getDom: function() {
    var element = document.createElement("div");
    element.className = "myContent";
    element.innerHTML = "Ausfälle für " + this.config.classes.join(", ");
    return element;
  },
  notificationReceived: function() {},
  socketNotificationReceived: function() {},
})