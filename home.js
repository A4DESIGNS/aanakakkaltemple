const firebaseConfig = {
  apiKey: "AIzaSyADc46VtFNooYIJEIQs2YNGFQR27Ro5fYU",
  authDomain: "aanakkakil.firebaseapp.com",
  databaseURL: "https://aanakkakil-default-rtdb.firebaseio.com",
  projectId: "aanakkakil",
  storageBucket: "aanakkakil.appspot.com",
  messagingSenderId: "382603137090",
  appId: "1:382603137090:web:dea6c06fba01c701e99ddb"
};
firebase.initializeApp(firebaseConfig);

function pre(){
const preloader = document.querySelector('#preloader');
  
    preloader.style.display = "none"
}
setTimeout(pre,2000)



window.onload= get()
   
  function get(){

var ref = firebase.database().ref("welcome");

ref.once("value")

  .then(function(snapshot) {

    let number = snapshot.numChildren();

    console.log(number)    

    

    

            

    for (let i = 1; i <=4; i++) {

 firebase.database().ref("welcome/"+i).on('value', function(snapshot){ 

 var datas = snapshot.val() 

var title = datas.heading;

console.log(i)

var link= datas.url;

             

 console.log(i)
 console.log(link)

 var disc= datas.imgHead;

 console.log(i)

    
var htttml ="<div class='swiper-slide'><a href='single-post.html?typee=img&id="+i+"' class='img-bg d-flex align-items-end' id='imHold"+i+"'style='background-image: ;'><div class='img-bg-inner'><h2>"+title+"</h2><p></p></div></a></div>"
          
document.getElementById("imgSh").innerHTML += htttml;

document.getElementById("imHold"+i+"").style.backgroundImage = "url("+link+")"

 }
 )}
 })
 }
 
function postsR(){
 var ref = firebase.database().ref("posts");

ref.once("value")

  .then(function(snapshot) {

    var idss = snapshot.numChildren();

    console.log("hey"+idss)    
    
    
           firebase.database().ref("posts/"+idss).on('value', function(snapshot){ 
console.log(idss)
 var datas = snapshot.val() 
 var head = datas.heading;
 var discs = datas.disc;
 var date = datas.date;
 var linkp1= datas.url;
    
    
    var htmll =  "<div class='post-entry-1 lg'><a href='single-post.html?typee=img&id="+idss+"'><img src="+linkp1+"  class='img-fluid'></a><div class='post-meta'><span class='date'>Uploaded on</span> <span class='mx-1'>&bullet;</span> <span>"+date+"</span></div><h2><a href='single-post.html?id="+idss+"'>"+head+"</a></h2><p class='mb-4 d-block'>"+discs+"</p> </div>"

     document.getElementById("posts1").innerHTML = htmll
    otrPosts(idss)
    console.log("loda"+idss)
})})

}

postsR()

function otrPosts(idss){
         console.log("kooi"+idss)
         idssm = idss -10
    for(var i = idss;i>idssm ; i--){
        firebase.database().ref("posts/"+i).on('value', function(snapshot){ 
console.log(i)
 var datas = snapshot.val() 
 var heads = datas.heading;
 var discs = datas.disc;
 var date = datas.date;
 var linkp2= datas.url;
    
    
    var htmlls = "<div class='post-entry-1'><a href='single-post.html?typee=img&id="+i+"'><img src='"+linkp2+"' class='img-fluid'></a><div class='post-meta'><span class='date'>Uploaded On</span> <span class='mx-1'>&bullet;</span> <span>"+date+"</span></div><h2><a href='single-post.html'>"+heads+"</a></h2></div>"

     document.getElementById("posts2").innerHTML += htmlls
    
})}
    


    }
function postPost(){
console.log("hey")
    var ref = firebase.database().ref("potext");

ref.once("value")

  .then(function(snapshot) {

    var idsst = snapshot.numChildren();

    console.log("hey"+idsst)    
    
    console.log(idsst+"hmmm")
    idsstm = idsst-15
    for(var n = idsst;n>idsstm ; n--){
        firebase.database().ref("potext/"+n).on('value', function(snapshot){ 
 var datas = snapshot.val() 
 var headse = datas.heading;
 var discse = datas.disc;
 var dates = datas.date;
 
    
    var htmlsss = "<div class='post-entry-1 border-bottom'><div class='post-meta'><span class='date'>Uploaded</span> <span class='mx-1'>&bullet;</span> <span>"+dates+"</span></div><h2 class='mb-2'><a href='single-post.html?typee=post&id="+n+"'>"+headse+"</a></h2></div>"
    
    document.getElementById("postPost").innerHTML += htmlsss
})

}})
}
postPost()
