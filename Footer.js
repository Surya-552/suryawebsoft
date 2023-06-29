function footer(brand) {
    return `
    <div class="footer-basic">
            <div class="social"><a href="https://www.instagram.com/official.suryaji552/"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="https://touch.facebook.com/suryaji552/"><i class="icon ion-social-facebook"></i></a></div>
            <p class="copyright">${brand}</p>
        </div>
 `;}
 const footerContainer=document.createElement(`div`);
 footerContainer.innerHTML=footer("By Surya Bhan");
 document.body.appendChild(footerContainer);