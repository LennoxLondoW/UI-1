$(function () {
  $('body').on('mouseover', '*', function () {
    $(this)
      .css({
        '-ms-overflow-style': 'auto',
        'scrollbar-width': 'thin'
      })
      .addClass('show_bar')
  })

  $('body').on('mouseleave', '*', function () {
    $(this)
      .css({
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none'
      })
      .removeClass('show_bar')
  })

  $('*').on('mouseover', function () {
    $(this)
      .css({
        '-ms-overflow-style': 'auto',
        'scrollbar-width': 'thin'
      })
      .addClass('show_bar')
  })

  $('*').on('mouseleave', function () {
    $(this)
      .css({
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none'
      })
      .removeClass('show_bar')
  })
  let preloaded = [
    { id: 1, src: 'images/town.jpg' },
    { id: 2, src: 'images/1.jpg' },
    { id: 2, src: 'images/2.jpg' },
    { id: 2, src: 'images/3.jpg' },
    { id: 2, src: 'images/4.jpg' }
  ]
  $('.input-images').imageUploader({
    preloaded: preloaded
  })
  $('.iui-cloud-upload').addClass('fa-solid fa-file-arrow-up fa-3x')
})
