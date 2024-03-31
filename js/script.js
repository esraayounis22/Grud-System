
var produtNameInput =document.getElementById("productName");
var productPriceInput =document.getElementById("productPrice");
var produtCategoryInput =document.getElementById("productCategory");
var produtDescInput =document.getElementById("productDesc");
var btn=document.getElementById('mainBtn').value='add Product';

//var inputs =document.getElementsByClassName("form-control");

var productsContainer =[];
 if(localStorage.getItem('ourproducts')!=null){
    productsContainer= JSON.parse( localStorage.getItem('ourproducts'));
    display();

 }



    function addProduct(){
      
        var product ={
           name:produtNameInput.value,
           price:productPriceInput.value,
           category:produtCategoryInput.value,
           Desc:produtDescInput.value,
          
         }
         productsContainer.push(product);
       
         localStorage.setItem('ourproducts',JSON.stringify(productsContainer));
         clearForm();
         display();
       
       }

  
    function updateproduct(index) {
        document.getElementById('mainBtn').innerHTML = 'Update'; 
    
       
        produtNameInput.value = productsContainer[index].name;
        productPriceInput.value = productsContainer[index].price;
        produtCategoryInput.value = productsContainer[index].category;
        produtDescInput.value = productsContainer[index].Desc;
    
        document.getElementById('mainBtn').onclick = function() {
            productsContainer[index].name = produtNameInput.value;
            productsContainer[index].price = productPriceInput.value;
            productsContainer[index].category = produtCategoryInput.value;
            productsContainer[index].Desc = produtDescInput.value;
    
            
            localStorage.setItem('ourproducts', JSON.stringify(productsContainer));
            clearForm();
            display();
            
            document.getElementById('mainBtn').innerHTML = 'Add Product';
          
            document.getElementById('mainBtn').onclick = addProduct;
        };
    }
    
    

function clearForm(){
    produtNameInput.value=""; 
    productPriceInput.value="";
    produtCategoryInput.value="";
    produtDescInput.value="";
   // inputs.value="";

}

function display(){
    content=''
    for(i=0;i<productsContainer.length;i++){
        content +=`   <tr>
        <td>${i+1}</td>
        <td>${productsContainer[i].name }</td>
        <td>${productsContainer[i].price }</td>
        <td>${productsContainer[i].category }</td>
        <td>${productsContainer[i].Desc }</td>
        <td> <button onclick="updateproduct(${i})" class="btn btn-warning">Update</button></td>
        <td><button  onclick="deleteProduct(${i})"class="btn btn-danger">Delete</button></td>
       
    </tr>`

    }
    document.getElementById('tableBody').innerHTML= content;
    
}
function deleteProduct(index){
    productsContainer.splice(index,1)
    localStorage.setItem('ourproducts',JSON.stringify(productsContainer));
    display();

}


function searchproduct(term){
   var content='';
   
    for(i=0;i<productsContainer.length;i++){
        if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase())==true){

        content +=`   <tr>
        <td>${i+1}</td>
        <td>${productsContainer[i].name }</td>
        <td>${productsContainer[i].price }</td>
        <td>${productsContainer[i].category }</td>
        <td>${productsContainer[i].Desc }</td>
        <td> <button  onclick="updateproduct(${i})" class="btn btn-warning">Update</button></td>
        <td><button  onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
       
    </tr>`
}

    }
    document.getElementById('tableBody').innerHTML= content;

}




