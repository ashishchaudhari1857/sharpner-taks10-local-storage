var  form=document.getElementById('myform');
form.addEventListener('submit' ,add);
function add(e){
    e.preventDefault();
    var cname = document.getElementById('name').value;
    var Ccontact = document.getElementById('contact').value;
    var cdate = document.getElementById('date').value;
 console.log(cname ,Ccontact,cdate);
    localStorage.setItem('name' ,cname);
 localStorage.setItem('contact',Ccontact);
 localStorage.setItem('date' ,cdate);


}