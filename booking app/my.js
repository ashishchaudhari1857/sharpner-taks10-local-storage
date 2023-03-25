var  form=document.getElementById('myform');
form.addEventListener('submit' ,add);
function add(e){
    e.preventDefault();
    var cname = document.getElementById('name').value;
    var Ccontact = document.getElementById('contact').value;
    var cdate = document.getElementById('date').value;
  console.log(cname ,Ccontact,cdate);
   
  const obj={
  name:cname,
contact:Ccontact,
date:cdate
};
localStorage.setItem(obj.name,JSON.stringify(obj));

   showonscreen(obj);
  
}
function showonscreen(obj){
   var parent=document.getElementById('demo');

   var  li =document.createElement('li');
   var  text=document.createTextNode(`${obj.name} ${obj.contact} ${obj.date}`);
   li.appendChild(text);
   parent.appendChild(li);
   
}
