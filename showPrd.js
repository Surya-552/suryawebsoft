/*function showPrdDetails(p) {
    return `
 <div class="productcontaner">
        <div class="row">
            <div class="img-col">
                <img src=${p.imgUrl} >
           </div>
           <div class="col-2">
            <h3>${p.name}</h3>
            <h3>Price: &#8377;&nbsp;${p.price}</h3>
            <h3>Product Details :</h3>
            <p>${p.details}</p>
                        </div>
           <div class="smallimg">
            <div class="smallimg-col">
             <ul>
                 <li><p>Select Quantity :</p></li>
                 <li><input  type="number" value="1"></li>
                 
             </ul>
              </div>
            <div class="smallimg-col">
                <ul>
                <li><a href="" class="btn1">Add to Cart</a></li>
             <li><a href=""  class="btn1">Buy Now</a></li>
         </ul>
            </div>
            
        </div>
        </div>
    </div> 
    `;
    
}
var prud=[
    {
      id:1,
      name:"Sandisk Cruzer Blade 32 GB Black, Red",
      imgUrl:"https://rukminim1.flixcart.com/image/612/612/kmgn0cw0/pendrive/pendrive/8/z/j/sdcz50-032g-sdcz50-032g-i35-sandisk-original-imagfc7rdywypccr.jpeg?q=70",
      price:399,
      details:"Thanks to the 32 GB storage capacity, you can now store your favorite songs, folders, photos, and more in this Sandisk Cruzer Blade Pen Drive. Access these files on a laptop wherever you are.",
     
    },
    {
      id:2,
      name:"SAMSUNG 970 EVO Plus 500 GB Laptop, Desktop Internal Solid State Drive (MZ-V7S500BW)",
      imgUrl:"https://rukminim1.flixcart.com/image/612/612/kamtsi80/internal-hard-drive/8/g/s/samsung-mz-v7s500bw-original-imafs5sm32n6pdmr.jpeg?q=70",
      price:"7,359",
      details:"1 SSD, Warranty Card, Installation Guide",
    },
    {
      id:3,
      name:"Logitech B175 Wireless Optical Mouse  (2.4GHz Wireless, Black)",
      imgUrl:"https://rukminim1.flixcart.com/image/416/416/korijrk0/mouse/j/p/k/b175-logitech-original-imag359v76rygsaf.jpeg?q=70",
      price:699,
      details:"Modern, slim and beautiful Pebble shape Logitech Pebble has stand-out simplicity with a design that is nice to hold, feels great in your hand and is easy to carry around",
    },
    {
      id:4,
      name:"WD 1.5 TB Wired External Hard Disk Drive  (Black)",
      imgUrl:"https://rukminim1.flixcart.com/image/312/312/jpwxxu80/external-hard-drive/hdd/r/f/s/wd-wdbu6y0015bbk-wesn-original-imafcfqyjdue4hpf.jpeg?q=70",
      price:"4,990",
      details:"Automatic backup - Easy to use",
    },
    {
      id:5,
      name:"APPLE MacBook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)",
      imgUrl:"https://rukminim1.flixcart.com/image/312/312/khdqnbk0/computer/5/d/e/apple-original-imafxfyqkdfxqjab.jpeg?q=70",
      price:"92,900",
      details:"Apple M1 chip with 8‑core CPU, 7‑core GPU and 16‑core Neural Engine",
    },
    {
      id:6,
      name:"acer Aspire 3 Core i3 11th Gen - (4 GB/256 GB SSD/Windows 10 Home...",
      imgUrl:"https://rukminim1.flixcart.com/image/312/312/ko0d6kw0/computer/t/1/l/na-thin-and-light-laptop-acer-original-imag2kc4ryzkqvrt.jpeg?q=70",
      price:"35,990",
      details:"Great performance meets long battery life with the Intel Core i3 11th generation processor · 15.6 Full HD (1920 x 1080) LED-backlit Display | Intel UHD Graphics​",
    },
  ];
  let id=document.location.search.split("=")[1];
  var sp=prud.find(function showPrdDetails(p) {if(p.id==id){return p}});
var productcontaner=document.createElement(`div`);
document.body.appendChild(productcontaner);
productcontaner.innerHTML=showPrdDetails(sp);
*/
var prud=[
    {
      id:1,
      name:"Sandisk Cruzer Blade 32 GB Black, Red",
      imgUrl:"https://rukminim1.flixcart.com/image/612/612/kmgn0cw0/pendrive/pendrive/8/z/j/sdcz50-032g-sdcz50-032g-i35-sandisk-original-imagfc7rdywypccr.jpeg?q=70",
      price:399,
      details:"Thanks to the 32 GB storage capacity, you can now store your favorite songs, folders, photos, and more in this Sandisk Cruzer Blade Pen Drive. Access these files on a laptop wherever you are.",
     
    },
    {
      id:2,
      name:"SAMSUNG 970 EVO Plus 500 GB Laptop, Desktop Internal Solid State Drive (MZ-V7S500BW)",
      imgUrl:"https://rukminim1.flixcart.com/image/612/612/kamtsi80/internal-hard-drive/8/g/s/samsung-mz-v7s500bw-original-imafs5sm32n6pdmr.jpeg?q=70",
      price:7359,
      details:"1 SSD, Warranty Card, Installation Guide",
    },
    {
      id:3,
      name:"Logitech B175 Wireless Optical Mouse  (2.4GHz Wireless, Black)",
      imgUrl:"https://rukminim1.flixcart.com/image/416/416/korijrk0/mouse/j/p/k/b175-logitech-original-imag359v76rygsaf.jpeg?q=70",
      price:699,
      details:"Modern, slim and beautiful Pebble shape Logitech Pebble has stand-out simplicity with a design that is nice to hold, feels great in your hand and is easy to carry around",
    },
    {
      id:4,
      name:"WD 1.5 TB Wired External Hard Disk Drive  (Black)",
      imgUrl:"https://rukminim1.flixcart.com/image/312/312/jpwxxu80/external-hard-drive/hdd/r/f/s/wd-wdbu6y0015bbk-wesn-original-imafcfqyjdue4hpf.jpeg?q=70",
      price:4990,
      details:"Automatic backup - Easy to use",
    },
    {
      id:5,
      name:"APPLE MacBook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)",
      imgUrl:"https://rukminim1.flixcart.com/image/312/312/khdqnbk0/computer/5/d/e/apple-original-imafxfyqkdfxqjab.jpeg?q=70",
      price:92900,
      details:"Apple M1 chip with 8‑core CPU, 7‑core GPU and 16‑core Neural Engine",
    },
    {
      id:6,
      name:"acer Aspire 3 Core i3 11th Gen - (4 GB/256 GB SSD/Windows 10 Home...",
      imgUrl:"https://rukminim1.flixcart.com/image/312/312/ko0d6kw0/computer/t/1/l/na-thin-and-light-laptop-acer-original-imag2kc4ryzkqvrt.jpeg?q=70",
      price:35990,
      details:"Great performance meets long battery life with the Intel Core i3 11th generation processor · 15.6 Full HD (1920 x 1080) LED-backlit Display | Intel UHD Graphics​",
    },
  ];
  
  let qty=1;
  function handleChange(e){
    qty=parseInt(e.value);
  }
  const idString=document.location.search;
    const id=Number(idString[4]);
    const product=prud[id];
/*
  let id=document.location.search;
  const id2=Number(id[4]);
  const product=prud[id2];
     let id1=id.split("=")[1];
  var sp=prud.find(function showPrdDetails(p) {if(p.id==id1){return p}});*/
var productcontaner=document.createElement(`div`);
document.body.appendChild(productcontaner);
productcontaner.innerHTML=`<div class="productcontaner">
<div class="row">
    <div class="img-col">
        <img src=${product.imgUrl} >
   </div>
   <div class="col-2">
    <h3>${product.name}</h3>
    <h3>Price: &#8377;&nbsp;${product.price}</h3>
    <h3>Product Details :</h3>
    <p>${product.details}</p>
                </div>
   <div class="smallimg">
    <div class="smallimg-col">
     <ul>
         <li><p>Select Quantity :</p></li>
         <li><span>
         <select onchange="handleChange(this)">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
        <option value="5">5</option>
       </select>
       </span></li>
         
     </ul>
      </div>
    <div class="smallimg-col1"> 
    <button onclick="addToCart()">Add to Cart</button>
    <button onclick="addToCart()">Add to Cart</button>   
    </div>
    
</div>
</div>
</div> `;
let cartItem=localStorage.getItem("cartItem")?JSON.parse(localStorage.getItem("cartItem")):[];
   function addToCart(){
    window.location = "cart.html";
         cartItem=cartItem.filter(item=>item.id!=product.id)
         localStorage.setItem("cartItem",JSON.stringify([{...product,qty},...cartItem]));
   }
   const counter=document.querySelector('.counter');
   counter.innerHTML=cartItem.length;