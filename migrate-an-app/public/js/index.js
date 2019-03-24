$( document ).ready(function() {
    console.log( "ready!" );
    M.AutoInit();
    
    var start = model["start"]
    $.get('templates/actions.mst', function(template) {
        var rendered = Mustache.render(template, start);            
        $('#placeholder').html(rendered);
        console.log(rendered)
      });
});


function goto(index){
    var s = model[index]
    $.get('templates/actions.mst', function(template) {
        var rendered = Mustache.render(template, s);            
        $('#placeholder').html(rendered);
        console.log(rendered)

        var instance = M.Modal.getInstance($('#modal1')[0])
        instance.open()
    });
}