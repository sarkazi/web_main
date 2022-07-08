







let parall1 = document.querySelector('.header__parralax1');
window.addEventListener('mousemove', function (e) {
   let x = e.clientX / window.innerWidth;
   let y = e.clientY / window.innerHeight;
   parall1.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 30 + 'px)';
});

let parall2 = document.querySelector('.header__parralax2');
window.addEventListener('mousemove', function (e) {
   let x = e.clientX / window.innerWidth;
   let y = e.clientY / window.innerHeight;
   parall2.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 10 + 'px)';
});

let parall3 = document.querySelector('.header__parralax3');
window.addEventListener('mousemove', function (e) {
   let x = e.clientX / window.innerWidth;
   let y = e.clientY / window.innerHeight;
   parall3.style.transform = 'translate(+' + x * 20 + 'px, +' + y * 10 + 'px)';
});

let parall4 = document.querySelector('.header__parralax4');
window.addEventListener('mousemove', function (e) {
   let x = e.clientX / window.innerWidth;
   let y = e.clientY / window.innerHeight;
   parall4.style.transform = 'translate(+' + x * 20 + 'px, -' + y * 20 + 'px)';
});
let parall5 = document.querySelector('.header__parralax5');
window.addEventListener('mousemove', function (e) {
   let x = e.clientX / window.innerWidth;
   let y = e.clientY / window.innerHeight;
   parall5.style.transform = 'translate(-' + x * 5 + 'px, +' + y * 5 + 'px)';
});
let parall6 = document.querySelector('.header__parralax6');
window.addEventListener('mousemove', function (e) {
   let x = e.clientX / window.innerWidth;
   let y = e.clientY / window.innerHeight;
   parall6.style.transform = 'translate(-' + x * 5 + 'px, +' + y * 20 + 'px)';
});



let WhatParall = document.querySelectorAll('.what__item-imgblock');
for (let i = 0; i < WhatParall.length; i++) {
   window.addEventListener('mousemove', function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      WhatParall[i].style.transform = 'translate(-' + x * 15 + 'px, -' + y * 5 + 'px)';
   });
}




let BioPen1 = document.querySelector('.bio__pen1');
window.addEventListener('mousemove', function (e) {
   let x = e.clientX / window.innerWidth;
   let y = e.clientY / window.innerHeight;
   BioPen1.style.transform = 'translate(-' + x * 5 + 'px, +' + y * 5 + 'px)';
});
let BioPen2 = document.querySelector('.bio__pen2');
window.addEventListener('mousemove', function (e) {
   let x = e.clientX / window.innerWidth;
   let y = e.clientY / window.innerHeight;
   BioPen2.style.transform = 'translate(+' + x * 10 + 'px, +' + y * 3 + 'px)';
});
let BioPen3 = document.querySelector('.bio__pen3');
window.addEventListener('mousemove', function (e) {
   let x = e.clientX / window.innerWidth;
   let y = e.clientY / window.innerHeight;
   BioPen3.style.transform = 'translate(+' + x * 3 + 'px, -' + y * 8 + 'px)';
});
let BioPen4 = document.querySelector('.bio__pen4');
window.addEventListener('mousemove', function (e) {
   let x = e.clientX / window.innerWidth;
   let y = e.clientY / window.innerHeight;
   BioPen4.style.transform = 'translate(-' + x * 7 + 'px, -' + y * 2 + 'px)';
});
let BioPen5 = document.querySelector('.bio__pen5');
window.addEventListener('mousemove', function (e) {
   let x = e.clientX / window.innerWidth;
   let y = e.clientY / window.innerHeight;
   BioPen5.style.transform = 'translate(+' + x * 8 + 'px, +' + y * 7 + 'px)';
});











window.onscroll = function () {
   let scrolled = window.pageYOffset || document.documentElement.scrollTop;


   if (window.matchMedia("(max-width: 782px)").matches) {
      if (scrolled >= 3500)
         document.querySelector(".button").style.display = 'none';
      if (scrolled < 3500)
         document.querySelector(".button").style.display = 'block';
   }
   if (window.matchMedia("(max-width: 480px)").matches) {
      if (scrolled >= 4000)
         document.querySelector(".button").style.display = 'none';
      if (scrolled < 4000)
         document.querySelector(".button").style.display = 'block';
   }
   if (window.matchMedia("(max-width: 400px)").matches) {
      if (scrolled >= 4500)
         document.querySelector(".button").style.display = 'none';
      if (scrolled < 4500)
         document.querySelector(".button").style.display = 'block';
   }
   if (window.matchMedia("(max-width: 350px)").matches) {
      if (scrolled >= 5000)
         document.querySelector(".button").style.display = 'none';
      if (scrolled < 5000)
         document.querySelector(".button").style.display = 'block';
   }


}







//------------------------------------------open-modal-------------------------------------------------------




const button = document.querySelectorAll('#button-sign-up');



button.forEach(function (item) {
   item.addEventListener('click', function () {
      const modal = document.querySelector('.popup-block');
      const modalContent = document.querySelector('.popup');
      const modalClose = document.querySelector('.popup__close');

      window.event.preventDefault();
      modal.classList.add('open');

      modalClose.onmouseover = function () {
         const modalCloseImg = document.querySelector('.popup__close-img');
         modalCloseImg.style.transform = 'rotate(-90deg)';
         modalCloseImg.style.transition = '1s';
         modalClose.onmouseleave = function () {
            modalCloseImg.style.transform = 'rotate(0deg)';
            modalCloseImg.style.transition = '1s';
         }
      }
      modalClose.addEventListener('click', function () {
         window.event.preventDefault();
         modal.classList.remove('open');
      })

      modal.addEventListener('click', function () {
         modal.classList.remove('open');
      })
      modalContent.addEventListener('click', function (event) {
         event.stopPropagation();
      })


      const buttonModal = document.querySelector('.popup__button');
      const textCheck = document.querySelector('.popup__text-check');







      function retrieveFormValue(event) {
         event.preventDefault();

         const name = modal.querySelector('[name="input1"]');
         const mail = modal.querySelector('[name="input2"]');
         const phone = modal.querySelector('[name="input3"]');
         const check = modal.querySelector('[name="check-policy"]');


         const values = {
            name: name.value,
            mail: mail.value,
            phone: phone.value,
            check: check.checked
         };
         window.location.href = 'thankyou.html';
         console.log(values);
      }


      modal.addEventListener('submit', retrieveFormValue);


      //modal.addEventListener('submit', function () {
      //window.event.preventDefault();


      //function validCheckBox() {

      //   const CheckboxPolicy = document.querySelector('.popup__checkbox');

      //   if (CheckboxPolicy.checked == false) {
      //      buttonModal.style.margin = '0 0 20px 0';
      //      textCheck.innerHTML = ('Мы не вправе принять твою заявку без согласия на обработку персональных данных');
      //      valid = false;
      //   } else {
      //      valid = true;
      //   }
      //   return valid;
      //}

      //function validMail() {
      //   const checkMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
      //   let inputMail = document.querySelector('.popup__mail').value;
      //   let valid = checkMail.test(inputMail);
      //   if (valid) {
      //      valid = true;
      //   } else {
      //      textCheck.innerHTML = ('Введите корректные данные!');
      //      buttonModal.style.margin = '0 0 20px 0';
      //   }
      //   return valid;
      //}

      //function validPhone() {
      //   const checkPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
      //   let inputPhone = document.querySelector('.popup__phone').value;
      //   let valid = checkPhone.test(inputPhone);
      //   if (valid) {
      //      valid = true;
      //   } else {
      //      textCheck.innerHTML = ('Введите корректные данные!');
      //      buttonModal.style.margin = '0 0 20px 0';
      //   }
      //   return valid;
      //}


      //window.location.href = 'thankyou.html';

      //return validCheckBox() && validMail() && validPhone();







   })

})