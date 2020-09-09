/*AJAX
    http://restclass.azurewebsites.net/api/points
    http verbs
    POST: create/send data
    GET: get info
    PUT:updates some existing elements
    PATCH: updates part of an existing element
    DELETE: remove an existing element

*/

// object constructor  for item
class Item{
    constructor(code,title,price,category,img){
        this.code=code;
        this.title=title;
        this.price=price;
        this.category=category;
        this.img=img;
        this.user="Ladarius";
    }
}






function register(){
    // get values from the inputs
    var code= $("#form-code").val();
    var title= $("#form-title").val();
    var price= $("#form-price").val();
    var category= $("#form-category").val();
    var img= $("#form-image").val();
    if(code!="" && title!= "" && price!=""){
        var item= new Item(code,title,price,category,img);
        console.log(item);
        console.log(JSON.stringify(item));

         // create ajax request
    $.ajax({
        url:"http://restclass.azurewebsites.net/api/points",
        type:'POST',
        data:JSON.stringify(item),
        contentType:'application/json',
        success:function(response){
            console.log('Yeeiii',response);
            $("#alert-box").removeClass('hidden');
            setTimeout(function(){
                $("#alert-box").addClass('hidden');
            },3000);
        },
        error:function(errorDetails){
            console.log('Ouuch!',errorDetails);
        }


    });

    // if(code===""||price===""||title===""||category===""){
        // alert("You need to enter required information");
    }
    else{
        alert("add a title, price and category");
   
    

    

    }
    clearForm();
    // save them in variables
    // display the values on the console
}

function clearForm(){
    $("#form-code").val("");
    $("#form-title").val("");
    $("#form-price").val("");
    $("#form-category").val("");
    $("#form-image").val("");
}

function init(){
    console.log('Admin page');
    //hook events
    $("#btn-click").on("click",register);
}

window.onload=init;