window.addComment = function (content, num, top, left) {
    if (content) {
        const commentElm = $(`
    <div>
      <div class="content">${content}</div>
      <div class="action">
        <div class="module">
          <span class="like" allowClick="true"></span>
          <span class="num">${num}</span>
        </div>
        <div class="module" style="width:15px;">
          <span class="close"></span>
        </div>
      </div>
    </div>
    `).addClass('comment').appendTo('body');
        commentElm.css({
            top: top,
            left: left,
        });

        commentElm.draggable();

        // 绑定like按钮
        $(document).on('click', '.like', function () {
            const likeElm = $(this);

            if (likeElm.attr('allowClick') === 'true') {
                const numElm = likeElm.next();
                numElm.html(parseInt(numElm.html(), 10) + 1);

                likeElm.attr('allowClick', 'false');
                likeElm.css({
                    'background-position': '0 30',
                    cursor: 'default',
                });
            }
        });

        // 绑定close按钮
        $(document).on('click', '.close', function () {
            $(this).parent().parent().parent().remove();
        });

        // like和close的显示隐藏
        commentElm.mouseenter(() => {
            commentElm.children('.action').css({
                display: 'inline-block',
            });
        });
        commentElm.mouseleave(() => {
            commentElm.children('.action').css({
                display: 'none',
            });
        });
    }

    // TODO: post new data to api
}

$(document).ready(() => {
    const endpoint_url = "http://hq.shisoft.net:8080/comment?url=" + window.encodeURI(window.location.href);
    $.get(endpoint_url, null, function (res) {
        $(res).each(function (_, comment) {
            window.addComment(comment.text, "", comment.y, comment.x);
        });
    }, "json");
    $(document).dblclick((event) => {
        const inputElm = $(`<input type="text"></input>`).addClass('comment-input').appendTo('body');
        inputElm.css({
            top: event.pageY,
            left: event.pageX,
        });
        inputElm.focus();
        inputElm.bind('keypress', function (event) {
            if (event.keyCode === 13) {
                $.post(endpoint_url, {
                    author: "",
                    text: comment.text,
                    x: comment.x,
                    y: comment.y
                }, function (res) {
                    window.addComment(inputElm.val(), 0, inputElm.css('top'), inputElm.css('left'));
                    inputElm.remove();
                }, "json");
            }
        });
        inputElm.focusout(() => {
            inputElm.remove();
        });
    });
});
