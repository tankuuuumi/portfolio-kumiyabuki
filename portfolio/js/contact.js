$(function () {
 //送信ボタンクリック時の処理
 $('#submit').on('click', function (event) {
     //formタグによる送信を拒否
     event.preventDefault();
     let result = inputCheck();
 });

 //フォーカスが外れたときに(blur)フォームの入力チェクをする
 $('#name').blur(function () {
     inputCheck();
 });
 $('#hurigana').blur(function () {
     inputCheck();
 });
 $('#email').blur(function () {
     inputCheck();
 });
 $('#tel').blur(function () {
     inputCheck();
 });
 $('#category').blur(function () {
     inputCheck();
 });
 $('#message').blur(function () {
     inputCheck();
 });
 //お問い合わせフォームの入力チェック
 function inputCheck() {
     //エラーのチェック結果
     let result;

     //エラーメッセージのテキスト
     let message = '';

     //エラーがなければfalse、エラーがあればtrue
     let error = false;

     //お名前のチェック
     if ($('#name').val() == '') {
        //エラーあり
        $('#name').css('background-color','#f79999');
        error = true;
        message += 'お名前を入力してください。\n';
     } else {
        //エラーなし
        $('#name').css('background-color','#fafafa');
     }

     //フリガナチェック
     if($('#hurigana').val() == '') {
        //エラーあり
        $('#hurigana').css('background-color','#f79999');
        error = true;
        message += 'フリガナを入力してください。\n';
     } else {
        //エラーなし
        $('#hurigana').css('background-color','#fafafa');
     }

     //お問い合わせチェック
     if($('#message').val() == '') {
        //エラーあり
        $('#message').css('background-color','#f79999');
        error = true;
        message += 'お問い合わせ内容を入力してください。\n';
     } else {
        //エラーなし
        $('#message').css('background-color','#fafafa');
     }
 }
});
