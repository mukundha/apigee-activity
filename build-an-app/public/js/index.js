var model;
$( document ).ready(function() {
    console.log( "ready!" );    
    var m=getParameterByName('model')
    setModel(m)
    console.log(model)
    if(model)
      goto("start");
});

function setModel(m){
  if (m=='build_model')
    model=build_model
  else
    model=migrate_model  
}

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

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}