// global vars (array)
var catalog =[];
var categories =[];


function fetchData(){
    // get data from the server
    // use object literal
   /* catalog=[
        {code:'001',
        title:'PS5',
        price:500.00,
        category:'Console',
        img:"img/ps5.png"
        },
        {
        code:'002',
        title:'Samsung TV',
        price:2000.00,
        category:'Electronics',
        img: "img/stv.png"
        },
        {
        code:'003',
        title:'Speakers',
        price:100.00,
        category:'Sound',
        img: "img/speak.png"
        }
    ]*/
    $.ajax({
        url:'http://restclass.azurewebsites.net/api/points',
        type:'GET',
        success:function(allitems){
            console.log(allitems);
            // travel the array
            // check my user
            // push my items into the array
            for(var i=0;i<allitems.length;i++){
                var item=allitems[i];
                if(item.user==="Ladarius"){
                    catalog.push(item);
                    //push the categories
                    categories.push(item.category);
                    // item.category
                }
            }
            displayCatalog();
            displayCategories();
        },
        error:function(details){
            console.log('Error getting data',details);
        }
    });
    // other instructions
}

function displayCategories(){
    // travel the array
    // get each category from array
    // create syntax for li
    // append the syntax to the #category
    for(var j=0;j<categories.length;j++){
        var cats=categories[j];
        var syntax2=`<li> ${cats} </li>`;
        $('#categories').append(syntax2);
    }
    
}


function displayCatalog(){
    // travel the array of items with for loop
    // get each item 
    // display the item on the HTML
    for(var i=0;i<catalog.length;i++){
        var item=catalog[i]; //this will give us the item from the catalog
        // display on the HTML
       drawItem(item);
    }
}
function drawItem(item){
    var syntax=`
    <div class="item" id="${item.code}"> 
        <img src="${item.img}">
        <h3> ${item.title} </h3>
        <h6 class="itemPrice"> $ ${item.price}</h6>
        <p>${item.category}</p>
        <button class="btn btn-primary"> Add to Cart </button>
    </div>
    `;
    $("#catalog").append(syntax);
}
function search(text){
    console.log(text);
    // clear the previous results
    // travel the array
    // get each item
    // if the item title contains the text
    // display the item
    $('#catalog').html("");
    for(var i=0; i<catalog.length;i++){
        var item = catalog[i];
        if(item.title.toLowerCase().includes(text.toLowerCase())|| item.category.toLowerCase().includes(text.toLowerCase()) || item.code.toLowerCase().includes(text.toLowerCase())){
            drawItem(item);
        }
    }
}

function init(){
    console.log('catalog page');
    // hook events
    $('#btn-search').click(function(){
        var text = $('#txt-search').val();
        search(text);
    })
    fetchData();
    displayCatalog();
    $('#categories').on('click', 'li', function(){
        search();
    });
}
// add a search
// filtered search


window.onload=init;