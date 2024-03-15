$(document).ready(function () {
  var alignment = "left";
  var originalColor = true;

  $("#btn-change-align").click(function () {
    switch (alignment) {
      case "left":
        alignment = "center";
        $("p").css("text-align", alignment);
        break;
      case "center":
        alignment = "right";
        $("p").css("text-align", alignment);
        break;
      case "right":
        alignment = "center";
        $("p").css("text-align", alignment);
        break;
    }
  });

  $("#btn-change-color").click(function () {
    if (originalColor) {
      $("#btn-rocket").css("background-color", "#FB48C4");
    } else {
      $("#btn-rocket").css("background-color", "#00c100");
    }

    originalColor = !originalColor;
  });
});
