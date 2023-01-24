let list = document.querySelector(".list")
let form = document.querySelector(".form")
let inp = document.querySelector(".inp")
let btn = document.querySelector(".btn")


const phone = [
    {
        id:1,
        name:'nokia',
        color:'black',
        price:"10$",
        img: './img/images.jpeg'
    },
    {
        id:2 ,
        name:'nokia',
        color: 'white',
        price:'12$',
        img:'./img/nokia(1).jpeg'
      },
   
   
         {
        id:3,
        name:'nokia',
        color:'black',
        price:"15$",
        img: './img/phone.jpeg'
    },
    {
        id:4,
        name:'samsung',
        color:'gold',
        price:"20$",
        img: './img/download.jpeg'
    },
    {
        id:5,
        name:'samsung',
        color:'black',
        price:"45$",
        img: './img/samsung.jpeg'
    },
    {
        id:6,
        name:'samsung',
        color:'black',
        price:"50$",
        img: './img/samsung.png'
    }
]

 
form.addEventListener("submit",(evn)=>{
    evn.preventDefault()
  let inpVal = inp.value;
  const newphoneArr = [];
  list.innerHTML ='';
    phone.forEach((e,i)=>{
        if(e.name.toLowerCase().indexOf(inpVal.trim().toLowerCase()) !=-1 || e.price.toLowerCase().indexOf(inpVal.trim().toLowerCase() )!=-1){
        let li =document.createElement("li")
        li.innerHTML =` <div class="card">
        <img src=${e.img} alt="">
        <h2>${e.name} </h2>
        <p>${e.color} </p>
        <p>${e.price}</p>
    </div>`
      list.appendChild(li)    
        }
       
        })     
        console.log(newphoneArr);
        inp.value = ''
    })
