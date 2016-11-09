@login
Feature: 登入功能

Background:
     Given 開啟瀏覽器，打開登入頁面

     Scenario: 登入成功
        Given 輸入帳號 "admin"
        Given 輸入密碼 "admin"
        When 按下登入按鈕
        Then 等待兩秒，進入頁面會右上角出現名稱 "admin"

   Scenario: 登入失敗
        Given 輸入帳號 "abc"
        Given 輸入密碼 "abcabcabcabcabc"
        When 按下登入按鈕
        Then 應該送出失敗