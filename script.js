var arr=[];
function Events(id,name,price){
    this.id=id;
    this.name=name;
    this.price=price;
    this.val=1;
}

function addPrice(){
    var id=document.getElementById("eventId").value;
     var name=document.getElementById("eventName").value;
    var price=document.getElementById("price").value;
    var a= new Events(id,name,price);
    arr.push(a);//{id name price}
    display();
    cost();
}

function display(){
    var sum=0;

    if(arr.length=="")
    {
             document.getElementById("result").innerHTML="your cart is enmpty";
    }
    else
    {
     var table="<table><tr><th>ID</th><th>Product Name</th><th>Price</th><th>Quantity</th><th>Remove from cart</th></tr>";
     console.log('arr',arr);
     for(i=0;i < arr.length;i++){
         var r = "link"+i;
         var s = "select"+i;
         table += "<tr><td>"+arr[i].id+"</td><td>"+arr[i].name+"</td><td>"+arr[i].price+"</td><td><select id = "+s+" onchange = 'cost("+i+")'><option value = '1'>1</option><option value ='2'>2</option><option value = '3'>3</option><option value = '4'>4</option><option value = '5'>5</option></select></td>"+"<td><a href = '#' id = "+r+" onclick = 'Cut("+i+")'>Remove</a></td></tr>";
         table+="</table>";
          sum+=(parseInt(arr[i].price) * parseInt(arr[i].val));      
     }
     document.getElementById("result").innerHTML=table;
      document.getElementById("total").innerHTML = "The total cost is "+sum;

}}

function cost(id)
{
var sum=0;
for(i=0;i<arr.length;i++)
{
var val = document.getElementById("select"+id).value;
console.log('sekekraekr',val);
arr[id].val =val;
 for(i=0;i<arr.length;i++){       
       sum+=(parseInt(arr[i].price) * parseInt(arr[i].val));       
 
    }
    console.log('sum',sum);
}
 document.getElementById("total").innerHTML = "The total cost is "+sum;
}

function Cut(i)
{
   arr.splice(i,1);    
   
    display();
    cost();
    
}