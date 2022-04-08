jQuery(document).ready(function($) {
 
//  search overlay 

$('.search-bar').on('click',function(){
  $('.search-overlay').toggleClass('show')
  $('body').toggleClass('noscroll')
 
})

$('.close-btn').on('click',function(){
    $('.search-overlay').toggleClass('show')
    $('body').toggleClass('noscroll')
   
})

// Init slick slider + animation
$('.slider').slick({
  // autoplay: true,
  speed: 800,
  lazyLoad: 'progressive',
  arrows: true,
  prevArrow: '<button class="nav-prev" ><i class="fa fa-arrow-left"></i></button>',
  nextArrow: '<button class="nav-next"><i class="fa fa-arrow-right"></i></button>',
  dots: false,

 
}).slickAnimation();


// stciky Naviagtion
$(window).on('scroll', function(e){


 
	
  if($(this).scrollTop()>10){
      $('.site-header').addClass('fixed')
      
  }
  else{
      $('.site-header').removeClass('fixed')
    
  }


   

  
});



// End stciky Naviagtion

// top tours CTA product slider

$('.tt-cta-product').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  // autoplay: true,
  pagination: true,
  dotsEach: true,

  // navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive:{
      0:{
          items:1
      },
      550:{
        items:1
    },
      600:{
          items:2
      },
      768:{
        items:2
    },
      850:{
        items:2
    },
      1000:{
          items:3
      }
  }
})

// End top tours CTA product slider

//  news slider slider

$('.blog-slider').owlCarousel({
  loop:false,
  margin:20,
  nav:false,
//   autoplay: true,
  pagination: true,
  dotsEach: true,

  // navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      768:{
        items:2
    },
      850:{
        items:2
    },
      1000:{
          items:3
      }
  }
})
// End  news slider slider


//  review slider

$('.review-slider').owlCarousel({
  loop:false,
  margin:20,
  nav:false,
//   autoplay: true,
  pagination: true,
  dotsEach: true,

  // navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})
// End  review slider

//  team slider

$('.team-carousel').owlCarousel({
  loop:false,
  margin:20,
  nav:false,
//   autoplay: true,
  pagination: true,
  dotsEach: true,

  // navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})
// End  team slider


//  single tour gallery slider

$('.tour-thimbunail-slider').owlCarousel({
  loop:false,
  margin:20,
  nav:false,
  autoplay: true,
  pagination: true,
  dotsEach: true,

  // navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
// End  review slider

// subscription form

$('.btn-close').on('click',function(){
  localStorage.setItem("subscription", false);
  $('.subscription-form').addClass('hide')
})


// End subscription form

// authentication model

$('.user-profile').on('click',function(e){
  e.preventDefault()
  $('.auth-container').toggleClass('show')
  $('body').toggleClass('noscroll')
  
})

$('.auth-close').on('click',function(){

  $('.auth-container').toggleClass('show')
  $('body').toggleClass('noscroll')
})


$('.signin-btn').on('click',function(e){
  e.preventDefault()
  $('.auth-register').toggleClass('hide')
  $('.auth-login').toggleClass('show')

 
})
$('.register-btn').on('click',function(e){
  e.preventDefault()
  $('.auth-register').toggleClass('hide')
  $('.auth-login').toggleClass('show')
  
})

// End authentication model

// Model hide outside click

window.onclick = function(e) {
  
  if($(e.target)[0].className == 'auth-container show'){
    $('.auth-container ').toggleClass('show')
    $('body').toggleClass('noscroll')
  }
 


if($(e.target)[0].className == 'search-overlay show'){
  $('.search-overlay').toggleClass('show')
  $('body').toggleClass('noscroll')
}

if($(e.target)[0].className == 'social-sharing-model-wrapper show'){
  $('.social-sharing-model-wrapper').toggleClass('show')
  $('body').toggleClass('noscroll')
}



if($(e.target)[0].className == 'extra-info-model__wrapper show'){
  $('.extra-info-model__wrapper').toggleClass('show')
  $('body').toggleClass('noscroll')
}

if($(e.target)[0].className == 'extra-info-model__wrapper show'){
  $('.extra-info-model__wrapper').toggleClass('show')
  $('body').toggleClass('noscroll')
}
}
// End Model hide outside click

// accordian button itinerary

$('.itinerary .acc-btn').on('click',function(e){
  $('.itinerary .acc-btn').each(function(index,ele){
    $(ele).removeClass('active') 
  })
  $(this).addClass('active')
  
$('.itinerary .accordian-content-container .accrodian-content' ).each(function(index,element){
  
  $(element).removeClass('show') 
})
var tabNumber=$(this).attr('id').split('-')[1]

$(`.itinerary #tab-content-${tabNumber}`).addClass('show')

})

// End accordian button itinerary

// accordian button packing list
$('.packing-list .acc-btn').on('click',function(e){
  $('.packing-list .acc-btn').each(function(index,ele){
    $(ele).removeClass('active') 
  })
  $(this).addClass('active')
  
$('.packing-list .accordian-content-container .accrodian-content' ).each(function(index,el){
  console.log(el)
  $(el).removeClass('show') 
})
var tabNumber=$(this).attr('id').split('-')[1]
console.log(tabNumber)
$(`.packing-list #tab-content-${tabNumber}`).addClass('show')

})


// End accordian button packing list


// accordian button general Information

$('.general-info .acc-btn').on('click',function(e){
  $('.general-info .acc-btn').each(function(index,ele){
    $(ele).removeClass('active') 
  })
  $(this).addClass('active')
  
$('.general-info .accordian-content-container .accrodian-content' ).each(function(index,element){
  
  $(element).removeClass('show') 
})
var tabNumber=$(this).attr('id').split('-')[1]

$(`.general-info #tab-content-${tabNumber}`).addClass('show')

})

// End accordian button general Information


// accordian button FAQ list
$('.faq .acc-btn').on('click',function(e){
  $('.faq .acc-btn').each(function(index,ele){
    $(ele).removeClass('active') 
  })
  $(this).addClass('active')
  
$('.faq .accordian-content-container .accrodian-content' ).each(function(index,el){
  console.log(el)
  $(el).removeClass('show') 
})
var tabNumber=$(this).attr('id').split('-')[1]
console.log(tabNumber)
$(`.faq #tab-content-${tabNumber}`).addClass('show')

})


// End accordian button packing list

// expand button
$('#expand-btn').on('click',function(e){
  e.preventDefault()
  $('.single-tour__desc').addClass('expand')
  $('.single-tour__thumbnail').addClass('expand')
  $('#less-btn').css('display','block')
  $('#expand-btn').css('display','none')
  
})
$('#less-btn').on('click',function(e){
  e.preventDefault()
  $('.single-tour__desc').removeClass('expand')
  $('.single-tour__thumbnail').removeClass('expand')
  $('#less-btn').css('display','none')
  $('#expand-btn').css('display','block')
  
})
// End expand button


// review exapnd and collapse

 console.log($('.section-heading-title').height()) 

$('.rev-expand').on('click',function(e){
   e.preventDefault()
  $($(this).siblings()[0]).addClass('expand')
  //  
   $(this).css('display','none')
   $($(this).siblings()[1]).css('display','block')
})

$('.rev-less').on('click',function(e){
  e.preventDefault()
  $($(this).siblings()[0]).removeClass('expand')
  
  $(this).css('display','none')
  $($(this).siblings()[1]).css('display','block')
})

// End review exapnd and collapse

// $('a').on('click',function(e){
// e.preventDefault()
// })



// filter actions

$('.filter-toggler').on('click',function(){
  $('.tour-filters').toggleClass('show')
  $('.filter-toggler__text').text(function(i,text){
    return text === 'filters' ? 'Hide filters' : 'filters'
  })
})

$('.filter-close-btn').on('click',function(){
  $('.tour-filters').toggleClass('show')
  $('.filter-toggler__text').text(function(i,text){
    return text === 'filters' ? 'Hide filters' : 'filters'
  })
})

// End filter actions


$('.control input').on('change',function(e){
   $(this).attr('checked')
   if($(this).prop('checked')){
    $('.control__indicator').removeClass('error')
   }
   else{
    $('.control__indicator').addClass('error')
   }
})




// dashboard link
var loc = window.location.pathname;
console.log(loc)
$('.user-dashboard-menu-item').find('a').each(function() {
  $(this).toggleClass('active', $(this).attr('href') == loc);
});

// End dashboard link







// share button

$('.share-btn').on('click',function(){
  $('.social-sharing-model-wrapper').toggleClass('show')
  $('body').toggleClass('noscroll')
})

$('.share-close-btn').on('click',function(){
  $('.social-sharing-model-wrapper').toggleClass('show')
  $('body').toggleClass('noscroll')
})

// End share button


// extra field dropdown
// $('#nmbr-of-people').on('change',function(){
//   if($(this).hasClass('error')){
//     $(this).removeClass('error')
//   } 
//   var redirectLink=$('#direct-checkout').attr('href');
//   var numOfPeople=$(this).val()
//   redirectLink= redirectLink.split('&')[0]
//     redirectLink=`${redirectLink}&quantity=${numOfPeople}`
//     $('#direct-checkout').attr('href',redirectLink)

// })

// End extra field dropdown


// wishlist guest login

$('.whishlist-btn-guest').on('click',function(){
  $('.auth-container').toggleClass('show')
  $('.auth-register').toggleClass('hide')
  $('.auth-login').toggleClass('show')
  $('body').toggleClass('noscroll')
})

$('.showlogin').on('click',function(e){
  e.preventDefault()
  $('.auth-container').toggleClass('show')
  $('.auth-register').toggleClass('hide')
  $('.auth-login').toggleClass('show')
  $('body').toggleClass('noscroll')
})

// stop checkout refresh 

if(window.location.pathname=='/checkout/'){
  if(window.location.search){
    if(window.location.search.split('&')[1].split('=')[0]=='quantity'){
      console.log(`${window.location.origin} ${window.location.pathname}`)
     window.location.href=`${window.location.origin}${window.location.pathname}`
     // console.log(`${window.location.origin} ${window.location.pathname}`)
   }
  }
  
  
}


// stop checkout refresh 


// contact form 7 quiz

if(window.location.pathname=='/contact/'){
if($('.wpcf7-quiz').val().length==0){
  $('.wpcf7-quiz-label').css('display','block')
}
$('.wpcf7-quiz').keyup(function(e){
  console.log($(this).val().length)
  if($(this).val().length>0){
    $('.wpcf7-quiz-label').css('display','none')
  }
  if($(this).val().length==0){
    $('.wpcf7-quiz-label').css('display','block')
  }
  
})

}

// mobile header

$('.hamburger-icon').on('click',function(){
  console.log('hi')
  $(this).toggleClass('active')
  $('.side-nav').toggleClass('active')
  $('body').toggleClass('noscroll')
})


$('.menu-toggler').on('click',function(e){
e.preventDefault()
 
   $('.mobile-nav__main .primary-menu li.menu-item-has-children').not($(this).parent().parent()).each((index,el)=>{
     $(el).removeClass('expand')
     
   })
  var submenu=$(this).parent().parent()
  $(submenu).toggleClass('expand')
})

// End contact form 7 quiz

setTimeout(function(){
 $('.tour-filters').toggleClass('show')
},3000)




setTimeout(function(){
  var subscription_consent=localStorage.getItem("subscription")
  if(subscription_consent == null ){
    $('.subscription-form').toggleClass('show')
  }
  
 },4000)
 




$('.book-btn').on('click',function(e){
  e.preventDefault()
  $('.extra-info-model__wrapper').toggleClass('show')
  $('body').toggleClass('noscroll')
 
 
})

$('.extra-info-close').on('click',function(){
  $('.extra-info-model__wrapper').toggleClass('show')
  $('body').toggleClass('noscroll')
})

// accordian button icons

$('.collapse').on('shown.bs.collapse', function () {
  $(this).parent().addClass('active');
});

$('.collapse').on('hidden.bs.collapse', function () {
  $(this).parent().removeClass('active');
});

// End accordian button icons


// step form

$('#q9').on('change',function(){
  var numOfPeople=$(this).val()
  var redirectURL=$('#form-submit-btn').attr('url')
  redirectURL=redirectURL.split('&')[0]
  redirectURL=`${redirectURL}&quantity=${numOfPeople}`
    $('#form-submit-btn').attr('url',redirectURL)
  
  
})	

var form_fields ;

var app = {

 init: function(){
   this.cacheDOM();
   this.setupAria();
   this.nextButton();
   this.prevButton();
   this.validateForm();
   this.startOver();
   this.editForm();
   this.killEnterKey();
   this.handleStepClicks();
 },

 cacheDOM: function(){
   if($(".multi-step-form").size() === 0){ return; }
   this.$formParent = $(".multi-step-form");
   this.$form = this.$formParent.find("form");
   console.log(this.$form)
   this.$formStepParents = this.$form.find("fieldset"),

   this.$nextButton = this.$form.find(".btn-next");
   
   this.$prevButton = this.$form.find(".btn-prev");
   this.$editButton = this.$form.find(".btn-edit");
   this.$resetButton = this.$form.find("[type='reset']");

   this.$stepsParent = $(".steps");
   this.$steps = this.$stepsParent.find("button");
 },

 htmlClasses: {
   activeClass: "active",
   hiddenClass: "hidden",
   visibleClass: "visible",
   editFormClass: "edit-form",
   animatedVisibleClass: "animated fadeIn",
   animatedHiddenClass: "animated fadeOut",
   animatingClass: "animating"
 },

 setupAria: function(){

   // set first parent to visible
  //  this.$formStepParents.eq(0).attr("aria-hidden",false);

   // set all other parents to hidden
  //  this.$formStepParents.not(":first").attr("aria-hidden",true);

   // handle aria-expanded on next/prev buttons
   app.handleAriaExpanded();

 },

 nextButton: function(){
  console.log(this.$nextButton)
   this.$nextButton.on("click", function(e){

     e.preventDefault();

     // grab current step and next step parent
     var $this = $(this),
         currentParent = $this.closest("fieldset"),
         nextParent = currentParent.next();

         // if the form is valid hide current step
         // trigger next step
         if(app.checkForValidForm()){
           currentParent.removeClass(app.htmlClasses.visibleClass);
           app.showNextStep(currentParent, nextParent);
         }

   });
 },

 prevButton: function(){

   this.$prevButton.on("click", function(e){

     e.preventDefault();

     // grab current step parent and previous parent
     var $this = $(this),
         currentParent = $(this).closest("fieldset"),
         prevParent = currentParent.prev();

         // hide current step and show previous step
         // no need to validate form here
         currentParent.removeClass(app.htmlClasses.visibleClass);
         app.showPrevStep(currentParent, prevParent);

   });
 },

 showNextStep: function(currentParent,nextParent){

   // hide previous parent
   currentParent
     .addClass(app.htmlClasses.hiddenClass)
     .attr("aria-hidden",true);

   // show next parent
   nextParent
     .removeClass(app.htmlClasses.hiddenClass)
     .addClass(app.htmlClasses.visibleClass)
     .attr("aria-hidden",false);

   // focus first input on next parent
   // nextParent.focus();
   
   // browning: focus first input on next parent
   nextParent.find(":input").first().focus();

   // activate appropriate step
   app.handleState(nextParent.index());

   // handle aria-expanded on next/prev buttons
   app.handleAriaExpanded();

 },

 showPrevStep: function(currentParent,prevParent){

   // hide previous parent
   currentParent
     .addClass(app.htmlClasses.hiddenClass)
     .attr("aria-hidden",true);

   // show next parent
   prevParent
     .removeClass(app.htmlClasses.hiddenClass)
     .addClass(app.htmlClasses.visibleClass)
     .attr("aria-hidden",false);

   // send focus to first input on next parent
   // prevParent.focus();
   
   // browning: send focus to first input on next parent
   prevParent.find(":input").first().focus();

   // activate appropriate step
   app.handleState(prevParent.index());

   // handle aria-expanded on next/prev buttons
   app.handleAriaExpanded();

 },

 handleAriaExpanded: function(){

   /*
     Loop thru each next/prev button
     Check to see if the parent it conrols is visible
     Handle aria-expanded on buttons
   */
   $.each(this.$nextButton, function(idx,item){
     var controls = $(item).attr("aria-controls");
     if($("#"+controls).attr("aria-hidden") == "true"){
       $(item).attr("aria-expanded",false);
     }else{
       $(item).attr("aria-expanded",true);
     }
   });

   $.each(this.$prevButton, function(idx,item){
     var controls = $(item).attr("aria-controls");
     if($("#"+controls).attr("aria-hidden") == "true"){
       $(item).attr("aria-expanded",false);
     }else{
       $(item).attr("aria-expanded",true);
     }
   });

 },

 validateForm: function(){
   // jquery validate form validation
   this.$form.validate({
     ignore: ":hidden", // any children of hidden desc are ignored
     errorElement: "span", // wrap error elements in span not label
     errorClass: "error-text", // Sarah added error class to span
     errorPlacement: function(error, element) {  // Sarah added to insert before to work better with radio buttions
       if(element.attr("type") == "radio") {
         error.insertBefore(element);
       }
       else
         {
           error.insertAfter(element);
         }
     },
     invalidHandler: function(event, validator){ // add aria-invalid to el with error
       $.each(validator.errorList, function(idx,item){
         if(idx === 0){
           $(item.element).focus(); // send focus to first el with error
         }
         $(item.element).attr({"aria-invalid": true, "aria-required": true}); // add invalid aria sarah added & aria-required
       })
     },
     submitHandler: function(data) {
       
        q1= $('#q1').val()
       var q2= $('#q2').val()
       var q3= $('#q3').val()
       var q4= $('#q4').val()
       var q5= $('#q5').val()
       var q6= $('#q6').val()
       var q7=$("input[name=q7]:checked").val()

       var q8array= []
       var q9=$('#q9').val()
       var q10= $('#q10').val()
       var q11= $('#q11').val()
       var q12= $('#q12').val()
       var q13= $('#q13').val()
       
       $("input[name='q8[]']:checked").each(function () {
         q8array.push($(this).val());
       });
       
      
       // form.submit();

       form_fields= {
         'q1':q1,
         'q2':q2,
         'q3':q3,
         'q4':q4,
         'q5':q5,
         'q6':q6,
         'q7':q7,
         'q8':q8array,
         'q9':q9,
         'q10':q10,
         'q11':q11,
         'q12':q12,
         'q13':q13   
        }
       localStorage.setItem('form_fields',JSON.stringify(form_fields) );

     $.ajax({
       type: 'POST',
       dataType: 'json',
       url: '/wp-admin/admin-ajax.php?action=wc_woocommerce_clear_cart_url',
       data: {action : 'wc_woocommerce_clear_cart_url'},
       success: function (data) {
            if(data.status=='success'){
           $('#form-submit-btn').attr('url')
           var redirectLink=$('#form-submit-btn').attr('url')
           window.location.href=redirectLink
            }
         }   
       });

   
     }
   });
 },

 checkForValidForm: function(){
   if(this.$form.valid()){
     return true;
   }
 },

 startOver: function(){

          var $parents = this.$formStepParents,
       $firstParent = this.$formStepParents.eq(0),
       $formParent = this.$formParent,
       $stepsParent = this.$stepsParent;

       this.$resetButton.on("click", function(e){

         // hide all parents - show first
         $parents
           .removeClass(app.htmlClasses.visibleClass)
           .addClass(app.htmlClasses.hiddenClass)
           .eq(0).removeClass(app.htmlClasses.hiddenClass)
           .eq(0).addClass(app.htmlClasses.visibleClass);

           // remove edit state if present
           $formParent.removeClass(app.htmlClasses.editFormClass);

           // manage state - set to first item
           app.handleState(0);

           // reset stage for initial aria state
           app.setupAria();

           // send focus to first item
           setTimeout(function(){
             $firstParent.focus();
           },200);

       }); // click

 },

 handleState: function(step){

   this.$steps.eq(step).prevAll().removeAttr("disabled");
   this.$steps.eq(step).addClass(app.htmlClasses.activeClass);

   // restart scenario
   if(step === 0){
     this.$steps
       .removeClass(app.htmlClasses.activeClass)
       .attr("disabled","disabled");
     this.$steps.eq(0).addClass(app.htmlClasses.activeClass)
   }

 },

 editForm: function(){
   var $formParent = this.$formParent,
       $formStepParents = this.$formStepParents,
       $stepsParent = this.$stepsParent;

       this.$editButton.on("click",function(){
         $formParent.toggleClass(app.htmlClasses.editFormClass);
         $formStepParents.attr("aria-hidden",false);
         $formStepParents.eq(0).find("input").eq(0).focus();
         app.handleAriaExpanded();
       });
 },

 killEnterKey: function(){
   $(document).on("keypress", ":input:not(textarea,button)", function(event) {
     return event.keyCode != 13;
   });
 },

 handleStepClicks: function(){

   var $stepTriggers = this.$steps,
       $stepParents = this.$formStepParents;

       $stepTriggers.on("click", function(e){

         e.preventDefault();

         var btnClickedIndex = $(this).index();

           // kill active state for items after step trigger
           $stepTriggers.nextAll()
             .removeClass(app.htmlClasses.activeClass)
             .attr("disabled",true);

           // activate button clicked
           $(this)
             .addClass(app.htmlClasses.activeClass)
             .attr("disabled",false)

           // hide all step parents
           $stepParents
             .removeClass(app.htmlClasses.visibleClass)
             .addClass(app.htmlClasses.hiddenClass)
             .attr("aria-hidden",true);

           // show step that matches index of button
           $stepParents.eq(btnClickedIndex)
             .removeClass(app.htmlClasses.hiddenClass)
             .addClass(app.htmlClasses.visibleClass)
             .attr("aria-hidden",false)
             .focus();

       });

 }

};

if(window.location.pathname.split('/')[1]=='tour'){
  app.init();
}

var res_form_feilds= JSON.parse(localStorage.getItem('form_fields')) 


$('#qz1').val(res_form_feilds.q1)
$('#qz2').val(res_form_feilds.q2)
$('#qz3').val(res_form_feilds.q3)
$('#qz4').val(res_form_feilds.q4)
$('#qz5').val(res_form_feilds.q5)
$('#qz6').val(res_form_feilds.q6)
$('#qz7').val(res_form_feilds.q7)
console.log(res_form_feilds)
var q8answer=''
res_form_feilds.q8.forEach((answers)=>{
     q8answer= q8answer+ ` ${answers} , `
   
 })

 $('#qz8').val(q8answer)

 $('#qz9').val(res_form_feilds.q9)
 $('#qz10').val(res_form_feilds.q10)
 $('#qz11').val(res_form_feilds.q11)
 $('#qz12').val(res_form_feilds.q12)
 $('#qz13').val(res_form_feilds.q13)









})


