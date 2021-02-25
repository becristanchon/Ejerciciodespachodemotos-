
$(document).ready(function() {
    poblartabla();
});

function  poblartabla() {

        let frutas = ["8:30am ","09:00 am","09:30 am ","10:00 am","10:30am"]
    
    var count =  0;
        frutas.forEach(element => {
            $('#mytable').append('<tr><td>'+element+'</td> <td><input id="moto'+count+'" type="number" disabled value="8" max="8"  min="1"></td>'
            +'<td><button id="'+count+'" onclick="tomarmoto(this)" type="button" class="btn btn-success">tomar</button></td></tr>');
       count++;
        });
       
    }


    function   tomarmoto(element) {
        var id = $(element).attr("id");
    
        var valoractual = $("#moto"+id).val();
        var valoractualizado = valoractual - 1;
        $("#moto"+id).val(valoractualizado);



     }