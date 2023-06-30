function product(prd) {
  let jumpTo=`showPrd.html?id=${prd.id}`;
  return `<a  href=${jumpTo}>
<div class="product_list">
     <div class="product_img"> <img src= ${prd.imgUrl} > </div>
       <div class="product_details">
        <h4>${prd.name}</h4>
      </div>
       <div class="product_price">
        <p>&#8377;&nbsp;${prd.price}</p>
    </div>
 </div>
 </a>`;
}
var prud=[
  {
    id:1,
    name:"Sandisk Cruzer Blade 32 GB Black, Red",
    imgUrl:"https://rukminim1.flixcart.com/image/612/612/kmgn0cw0/pendrive/pendrive/8/z/j/sdcz50-032g-sdcz50-032g-i35-sandisk-original-imagfc7rdywypccr.jpeg?q=70",
    price:399,
   
  },
  {
    id:2,
    name:"SAMSUNG 970 EVO Plus 500 GB Laptop, Desktop Internal Solid State Drive (MZ-V7S500BW)",
    imgUrl:"https://rukminim1.flixcart.com/image/612/612/kamtsi80/internal-hard-drive/8/g/s/samsung-mz-v7s500bw-original-imafs5sm32n6pdmr.jpeg?q=70",
    price:"7,359",
  },
  {
    id:3,
    name:"Logitech B175 Wireless Optical Mouse  (2.4GHz Wireless, Black)",
    imgUrl:"https://rukminim1.flixcart.com/image/416/416/korijrk0/mouse/j/p/k/b175-logitech-original-imag359v76rygsaf.jpeg?q=70",
    price:699,
  },
  {
    id:4,
    name:"WD 1.5 TB Wired External Hard Disk Drive  (Black)",
    imgUrl:"https://rukminim1.flixcart.com/image/312/312/jpwxxu80/external-hard-drive/hdd/r/f/s/wd-wdbu6y0015bbk-wesn-original-imafcfqyjdue4hpf.jpeg?q=70",
    price:"4,990",
  },
  {
    id:5,
    name:"APPLE MacBook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)",
    imgUrl:"https://rukminim1.flixcart.com/image/312/312/khdqnbk0/computer/5/d/e/apple-original-imafxfyqkdfxqjab.jpeg?q=70",
    price:"92,900",
  },
  {
    id:6,
    name:"acer Aspire 3 Core i3 11th Gen - (4 GB/256 GB SSD/Windows 10 Home...",
    imgUrl:"https://rukminim1.flixcart.com/image/312/312/ko0d6kw0/computer/t/1/l/na-thin-and-light-laptop-acer-original-imag2kc4ryzkqvrt.jpeg?q=70",
    price:"35,990",
  },
];

var ProductHolder=document.createElement(`div`);
ProductHolder.className="products";
document.body.appendChild(ProductHolder);
for(i=0;i<prud.length;i++){
var ProductCard=document.createElement(`div`);
ProductCard.innerHTML=product(prud[i]);
ProductHolder.appendChild(ProductCard);
}

 
  
