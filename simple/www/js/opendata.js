
(function($, document) {
var url;
//Crime Daily Data
url = 'http://data.raleighnc.gov/resource/guyh-emm5.json?$order=inc_datetime desc'; 
//Building Permit Data
//url = 'http://data.raleighnc.gov/resource/b9nv-68kk.json';
var dataid = '#data-list';    
$(document).ready(fetchdata(url));

function fetchdata(url){
   $.ajax(url)
        .done(function (data, textStatus, jqXHR) {
            renderlist(data);
        })
        .fail(function (jqXHR, textStatus, errorThrown){
             alert('Network error has occurred please try again!');
        });
}
function renderlist(result){
    $.each(result, function(i, row) {
        renderitem(row,dataid);
    });
}
function renderitem (item, list, cb){
    var li;
    console.log(JSON.stringify(item));
    li = document.createElement('li');
    $.map(item,function(v, i){
        $(li).append('<p>'+i+'='+JSON.stringify(v)+'</p>');
    });
    $(list).append(li);
}

})(jQuery, document);