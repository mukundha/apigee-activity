$( document ).ready(function() {
    console.log( "ready!" );
    M.AutoInit();

    console.log(model)
    goto("start");
});


function goto(index){
    var s = model[index]
    s.size = function() {
      return s.actions.length == 1 ? "12" : "6";
    };
    s.tabSize = function() {
      return s.actions.length == 1 ? "8" : "4";
    };
    s.phoneSize = function() {
      return s.actions.length == 1 ? "4" : "2";
    };
    $.get('templates/actions.mst', function(template) {
        var rendered = Mustache.render(template, s);
        $('#placeholder').html(rendered);
        console.log(rendered)
    });
}
