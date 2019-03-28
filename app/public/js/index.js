var baseModel;
$( document ).ready(function() {
    console.log( "ready!" );
    var m = getParameterByName('model')
    setModel(m);
    console.log(baseModel);
    if(baseModel)
      goto("start");
});

function setModel(m){
  if (m == 'build_model')
    baseModel = build_model;
  else
    baseModel = migrate_model;
}

function getScreenSize(){
  var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    return({"width":width, "height": height});
}

function goto(index){
    var s = baseModel.model[index];

    if( !s ){
      window.location.href = "index.html";
    }
    s.size = function() {
      return s.actions.length == 1 ? "12" : "6";
    };
    s.tabSize = function() {
      return s.actions.length == 1 ? "8" : "4";
    };
    s.phoneSize = function() {
      return s.actions.length == 1 ? "4" : "2";
    };
    s.title = function() {
      return baseModel.name;
    }

    s.sides = function() {
      var size = getScreenSize();
      var diff = size.width - size.height;
      console.log(diff);
      if(diff > 600) {
        return "3";
      } else {
        return "2";
      }
    }

    s.mid = function() {
      var size = getScreenSize();
      var diff = size.width - size.height;
      if(diff > 600) {
        return "6";
      } else {
        return "8";
      }
    }

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
