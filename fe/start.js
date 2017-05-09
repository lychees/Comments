$(document).ready(() => {
  $(document).click((event) => {
    console.log(event);
    const newElm = $(`<div>Text.</div>`).appendTo('body');
    newElm.css({
      top: event.clientY,
      left: event.clientX,
      position: 'absolute',
      'z-index': 100,
    });
  });
});
