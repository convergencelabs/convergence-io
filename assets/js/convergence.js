var Convergence = (function(window, hljs) {
  $(window).scroll(handleScroll);

  function handleScroll() {
    "use strict";
    var scroll = $(window).scrollTop();
    if( scroll > 60 ){
      $(".navbar").addClass("scroll-fixed-navbar");
    } else {
      $(".navbar").removeClass("scroll-fixed-navbar");
    }
  }

  handleScroll();

  hljs.initHighlightingOnLoad();

  function selectFeature(index, row) {
    const hiddenClass = "feature-hidden";
    const targetDetailSelector = ".features-block-" + row + ' .feature-detail.index-' + index;
    const toClose = $(".feature-detail").not(targetDetailSelector).not("." + hiddenClass);
    toClose.addClass(hiddenClass);

    const selectedFeature = $(targetDetailSelector);
    if (selectedFeature.hasClass(hiddenClass)) {
      selectedFeature.removeClass(hiddenClass);
    } else {
      selectedFeature.addClass(hiddenClass);
    }

    const o = "feature-open";
    const clickedBoxSelector = ".features-block-" + row + ' .feature-highlight.index-' + index;
    const boxes = $(".feature-highlight").not(clickedBoxSelector);
    boxes.removeClass(o);

    const selectedBox = $(clickedBoxSelector);
    if (selectedBox.hasClass(o)) {
      selectedBox.removeClass(o);
    } else {
      selectedBox.addClass(o);
    }
  }

  function initAccordion(id) {
    const root = $("#" + id);
    const toggles = root.find(".toggle .toggle-title");

    if (toggles.hasClass('active')) {
      $(".toggle .toggle-title.active").closest('.toggle').find('.toggle-inner').show();
    }

    toggles.click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass("active").closest('.toggle').find('.toggle-inner').slideUp(200);
      }
      else {
        $(this).addClass("active").closest('.toggle').find('.toggle-inner').slideDown(200);
      }
    });
  }

  function scrollToHomepageFeature() {
    var featureHash = document.location.hash.match(/feature-(\d)-(\d)/);
    if(featureHash != null) {
      var row = featureHash[2];
      var index = featureHash[1];
      var rowPositionTop = $('#features .features-block-' + row).position().top;

      // top should match the bottom of any fixed header
      rowPositionTop -= $('nav').outerHeight();
      
      $('html').animate({scrollTop:rowPositionTop}, 400, 'swing', function() {
        Convergence.selectFeature(index, row);
      });
    }
  }

  return {
    initAccordion: initAccordion,
    selectFeature: selectFeature,
    scrollToHomepageFeature: scrollToHomepageFeature
  };
}(window, window.hljs));


