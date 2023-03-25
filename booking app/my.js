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
   var btn =document.createElement('button');
   var ebtn=document.createElement('button');
   
   btn.appendChild(document.createTextNode("delete"));
   ebtn.appendChild(document.createTextNode("edit"));
   var  li =document.createElement('li');
   var  text=document.createTextNode(`${obj.name} ${obj.contact} ${obj.date}`);
   li.appendChild(text);
   li.appendChild(btn);
   li.appendChild(ebtn);
   parent.appendChild(li);
   btn.addEventListener('click' ,del);
   ebtn.addEventListener('click' ,edit);
   function  del(e){
      localStorage.removeItem(obj.name);
      parent.removeChild(li);
   }
   function edit(e){
      localStorage.removeItem(obj.name);
      parent.removeChild(li);
      document.getElementById('name').value=obj.name
     document.getElementById('contact').value=obj.contact;
     document.getElementById('date').value=obj.date;
   }

   
}
   
}
