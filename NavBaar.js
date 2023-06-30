function nav_baar(imgUrl,imgUrl1) {
    return `
    <div class="header">
              <a href="index.html" class="logo">
              <img  src=${imgUrl}  />
            </a>
             <div class="header-right" id="MenuItem">
             <ul>
                <li><a class="active" href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="Contact_us.html">Contact Us</a></li>
                <li><a href="Product.html">Shoping</a></li>
                <li><a href="SignIn.html">Sign In</a></li>
            </ul>
                <a href="cart.html" class="cartimg">
                <img  src=${imgUrl1}  />
              </a>
            </div>
            </div>
 `;
}
const imgURL_crt="https://img.icons8.com/ios/2x/shopping-bag--v3.gif";
const imgURL="https://1.bp.blogspot.com/-JKsABLgxblU/YOKNcBPGerI/AAAAAAAAWhQ/wim0_MSPMyQWrh-J1Gg7YI2jS_xRK0dAgCLcBGAsYHQ/s320/logo.jpeg";
 const navContainer=document.createElement(`div`);
 navContainer.innerHTML=nav_baar(imgURL,imgURL_crt);
 document.body.appendChild(navContainer);
