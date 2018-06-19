$(function() {
  'use strict';

  $('#getResult').click(function() {
    const name = $('#name').val();
    if (name === "") {
        alert('名前を入力してください！');
        return;
    }

    const types = ['勇者', '魔法使い', '戦士', '遊び人', 'スーパースター'];
    const type = types[Math.floor(Math.random() * types.length)];

    const characters = ['賢い', '勇ましい', 'かわいい', '情けない', '頼りない'];
    const character = characters[Math.floor(Math.random() * characters.length)];

    const result = name + 'さんは「' + character + type + '」タイプです！';
    $('#result').text(result);

    const tweetLink = "<a href='https://twitter.com/intent/tweet?text=" + encodeURIComponent(result) + "&hashtags=dotinstall' target='_blank'>ツイートする</a>";
    $('#tweet').html(tweetLink);
  });

})();
