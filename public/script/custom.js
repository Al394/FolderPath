var myui = null;
$(function () {
  $("#sortable_path").sortable({
    items: "li:not(.disabled)",
    connectWith: "ul",
    cancel: ".disabled",
    receive: function (e, ui) {
      console.log("changed");
      console.log("ui", ui);
    },
  });
  $("ul.paths").sortable({
    connectWith: "ul",
    opacity: 0.6,
    cursor: "move",
    stop: function (e, ui) {
      var item = ui.item;
      item.addClass("breadcrumb-item");
    },
  });

  $("#sortable_path, #paths, #sortable3").disableSelection();
});
console.log("ciao");
$("#sortable_path").sortable("toArray", { attribute: "value" });
