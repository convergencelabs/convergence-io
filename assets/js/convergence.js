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

function selectFeature(id, section) {
  const hiddenClass = "feature-hidden";
  const targetDetailSelector = ".features-block-" + section + ' .feature-detail.index-' + id;
  const toClose = $(".feature-detail").not(targetDetailSelector).not("." + hiddenClass);
  toClose.addClass(hiddenClass);

  const selectedFeature = $(targetDetailSelector);
  if (selectedFeature.hasClass(hiddenClass)) {
    selectedFeature.removeClass(hiddenClass);
  } else {
    selectedFeature.addClass(hiddenClass);
  }

  const o = "feature-open";
  const clickedBoxSelector = ".features-block-" + section + ' .feature-highlight.index-' + id;
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
