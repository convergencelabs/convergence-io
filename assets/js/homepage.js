jQuery(document).ready(function(){
  var $ = jQuery;
  var isMobile = $(window).width() <= 640;

  if (!("ontouchstart" in document.documentElement)) {
    $('body').addClass("no-touch");
  }
  window.addEventListener('orientationchange', function() {
    location.reload();
  });
  
  if(isMobile) {
    $('#features .feature-highlight').click(function() {
      var selectedFeatureEl = $(this).parents('.panel-grid-cell');
      if(selectedFeatureEl.hasClass('active')) {
        selectedFeatureEl.find('.tab-tos').slideUp('slow');
        selectedFeatureEl.removeClass('active');
      } else {
        if(selectedFeatureEl.find('.tab-tos').length === 0) {
          var featureRowId = $(this).parents('.tabs').attr('id');
          var href_to_tab= $(this).parents('.so-panel').attr('data-href_id');
          var expandoEl = $('.' + featureRowId + ' .tab-tos.' + href_to_tab);
          expandoEl.find('.panel-grid-cell').removeAttr('id');
          expandoEl.detach().appendTo(selectedFeatureEl);
        }
        selectedFeatureEl.find('.tab-tos').slideDown('slow');
        selectedFeatureEl.addClass('active');
      }
    });
  } else {
    $('#features .feature-highlight').click(function() {
      var featureRowId = $(this).parents('.tabs').attr('id');
      var selectedFeatureEl = $(this);
      var href_to_tab= $(this).find('.so-panel').attr('data-href_id');
      if(selectedFeatureEl.hasClass('active')) {
        selectedFeatureEl.removeClass('active');
        $('.' + featureRowId + ' .tabs .panel-grid-cell').removeClass('active');
        $('.' + featureRowId + ' .tab-tos').slideUp('slow');
        $('.' + featureRowId + ' .tabs .panel-grid-cell').removeClass('active');
      } else {
        $('#' + featureRowId + '.tabs .panel-grid-cell').removeClass('active');	
        $('.' + featureRowId + ' .tab-tos').slideUp('slow');
        $('.' + featureRowId + ' .tabs .panel-grid-cell').removeClass('active');
      
        $('.' + featureRowId + ' .tab-tos.' + href_to_tab).slideDown('slow');
        selectedFeatureEl.addClass('active');
      }
    });
  }
});