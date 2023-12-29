// const forms = document.querySelectorAll('.needs-validation')

// Array.from(forms).forEach(form => {
//   form.addEventListener('submit', event => {
//     if (!form.checkValidity()) {
//       event.preventDefault()
//       event.stopPropagation()
//     }

//     form.classList.add('was-validated')
//   }, false)
// })()

$('.alert').hide();
$('form').submit(function(e){
    e.preventDefault();
    if($('input').val() || $('textarea').val()===$('input').val() && $('textarea').val()){
        $('.alert').show()

        setTimeout(() => {
            $('.alert').hide();
        }, 3000);
      }
      $('input').val('')
      $('textarea').val('')
    })



    
//   $('.card ').click(function(e){
// e.preventDefault();
//     let image =$(this).children('img')
//    .attr('src')
// //  console.log(image);

//   //  let nompro = $(this).Parentsuntil('.card')
//   //  eq(0)
//   // .prevAll()
//   // .eq(1).text()
//   // console.log(nompro);

  
//   $('.order').append(`<div class="col-lg-6 ">
//   <img src="${image}" class="card-img-top" alt="...">
// </div>`
//   )
//     })

// $('a').click(function(e){
//     e.preventDefault();
//     if($(this).text()==="Add to Card"){
        
//       if($(".spa").text()===""){
//         $(".spa").text()++
//       }
//        $(".icon").append(``)
       
//    }
//     })


  //   $('a').click(function(e){
  //     e.preventDefault();
  //     if($(this).text()==="Add to Card"){
  //         $(this).parent().prev().slideUp(1000,()=>
  //         $(this).children().text("remove card"))
  //     }else{
  //         $(this).parent().prev().slideDown(1000,()=>
  //         $(this).next().children().text("Add to Card")
  // )
  //     }
  //     })




