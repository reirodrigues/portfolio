function show() {
   showBackToTopButtonOnScroll()
}

 function showBackToTopButtonOnScroll(){
   if(scrollY>500){
     backToTopButton.classList.add("show")
  } else {
    backToTopButton.classList.remove("show")
   }
 }