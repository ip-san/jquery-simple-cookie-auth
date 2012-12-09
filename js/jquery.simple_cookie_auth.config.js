/* 設定ファイル */
$(this).ready(function() {
    $(this).execAuth({
            /* MD5：有効無効 */
             md5:true, // 有効
            //md5:false, // 無効
            /* パスワード */
            password: '1a1dc91c907325c69271ddf0c944bc72', // MD5有効時（pass）
            // password: 'pass', // MD5無効時
            /* 右クリック防止：有効無効 */
            contextmenu_block:true,
            /* クッキーに利用するキー */
            cookie_key:'simple_cookie_auth',
            /* エラーメッセージ出力場所のID */
            error_msg_id:'error',
            /* エラーメッセージ */
            error_msg_text:'パスワードが間違っています',
            /* ログイン後遷移先URL */
            action_url: 'sample_page.html',
            /* リダイレクト先URL(ログインページ) */
            redirect_url: 'index.html'
        });
});