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


alert(page_type+" hey "+page_id)
    
  
   sigPo(page_type,page_id)
   
}

params()


function sigPo(page_type,page_id){
//alert(hey+" "+page_type)
if(page_type == "img"){
    //alert(hey+page_type+page_id)
alert(page_type)
alert(page_id)
firebase.database().ref("posts/"+page_id).on('value', function(snapshot){ 

 var datas = snapshot.val() 
 var cap = datas.heading;
 var discs = datas.disc;
 var date = datas.date;
 var linksi= datas.url;
 var fstCar = discs.charAt(0)
 
 alert(cap+"\n"+linksi)

var htmls = "<div class='post-meta'><span class='date'>Uploaded</span> <span class='mx-1'>&bullet;</span> <span>"+date+"</span></div><h1 class='mb-5'>"+cap+"</h1><p><span class='firstcharacter'></span>"+discs+"</p><figure class='my-4'><img src='"+linksi+"' class='img-fluid'></figure><p></p>"

document.getElementById("sigPo").innerHTML = htmls

})
}else{
alert("gone")
}
}

