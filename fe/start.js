window.addComment = function (content, top, left) {
  if (content) {
    const commentElm = $(`<div>${content}</div>`).addClass('comment').appendTo('body');
    commentElm.css({
      top: top,
      left: left,
    });
  }

  // TODO: post new data to api
}

$(document).ready(() => {
  // TODO: fetch comments from api

  $(document).dblclick((event) => {
    const inputElm = $(`<input type="text"></input>`).addClass('comment-input').appendTo('body');
    inputElm.css({
      top: event.pageY,
      left: event.pageX,
    });
    inputElm.focus();
    inputElm.bind('keypress', function (event) {
      if (event.keyCode === 13) {
        window.addComment(inputElm.val(), inputElm.css('top'), inputElm.css('left'));
        inputElm.remove();
      }
    });
    inputElm.focusout(() => {
      inputElm.remove();
    });
  });
});
