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



function params(){
     
    var queryString = window.location.search;
    
    
var urlParams = new URLSearchParams(queryString);


var page_type = urlParams.get('typee')
var page_id = urlParams.get('id')
page_id = Math.abs(page_id)


  
   sigPo(page_type,page_id)
   
   
   
}

params()


function sigPo(page_type,page_id){

if(page_type == "img"){

////alert(page_type)
//alert(page_id)
firebase.database().ref("posts/"+page_id).on('value', function(snapshot){ 

 var datas = snapshot.val() 
 var cap = datas.heading;
 var discs = datas.disc;
 var date = datas.date;
 var linksi= datas.url;
 var fstCar = discs.charAt(0)
 
 

var htmls = "<div class='post-meta'><span class='date'>Uploaded</span> <span class='mx-1'>&bullet;</span> <span>"+date+"</span></div><h1 class='mb-5'>"+cap+"</h1><p><span class='firstcharacter'></span>"+discs+"</p><figure class='my-4'><img src='"+linksi+"' class='img-fluid'></figure><p></p>"

document.getElementById("sigPo").innerHTML = htmls

})
}else{

 firebase.database().ref("potext/"+page_id).on('value', function(snapshot){ 

 var datas = snapshot.val() 
 var cap = datas.heading;
 var discs = datas.disc;
 var date = datas.date;
 
 
 var htmls = "<div class='post-meta'><span class='date'>Uploaded</span> <span class='mx-1'>&bullet;</span> <span>"+date+"</span></div><h1 class='mb-5'>"+cap+"</h1><p><span class='firstcharacter'></span>"+discs+"</p><p></p>"

document.getElementById("sigPo").innerHTML = htmls
     })
}
postPostR()
}
function postPostR(){
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
 
    
    var htmlt = "<div class='post-entry-1 border-bottom'><div class='post-meta'><span class='date'>Posted On</span> <span class='mx-1'>&bullet;</span> <span>"+dates+"</span></div><h2 class='mb-2'><a href='single-post.html?typee=post&id="+n+"'>"+headse+"</a></h2></div>"
    
    document.getElementById("pills-popular").innerHTML += htmlt
})

}})
postPostRs()
}

function postPostRs(){
console.log("hey")
    var ref = firebase.database().ref("potext");

ref.once("value")

  .then(function(snapshot) {

    var idsst = snapshot.numChildren();

    console.log("hey"+idsst)    
    
    console.log(idsst+"hmmm")
    idsstm = idsst
    for(var n = idsst;n>idsstm ; n--){
        firebase.database().ref("posts/"+n).on('value', function(snapshot){ 
 var datas = snapshot.val() 
 var headse = datas.heading;
 var discse = datas.disc;
 var dates = datas.date;
 
    
    var htmlt = "<div class='post-entry-1 border-bottom'><div class='post-meta'><span class='date'>Posted On</span> <span class='mx-1'>&bullet;</span> <span>"+dates+"</span></div><h2 class='mb-2'><a href='single-post.html?typee=post&id="+n+"'>"+headse+"</a></h2></div>"
    
    document.getElementById("pills-latest").innerHTML += htmlt
})

}})
}


