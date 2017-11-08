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

function selectFeature(id) {
  const c = "feature-hidden";
  const targetDetailId = "#feature-detail-" + id;
  const toClose = $(".feature-detail").not(targetDetailId).not("." + c);
  toClose.addClass(c);

  const selectedFeature = $(targetDetailId);
  if (selectedFeature.hasClass(c)) {
    selectedFeature.removeClass(c);
  } else {
    selectedFeature.addClass(c);
  }

  const o = "feature-open";
  const toggledBox = "#feature-box-" + id;
  const boxes = $(".feature-highlight").not(toggledBox);
  boxes.removeClass(o);

  const selectedBox = $(toggledBox);
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
