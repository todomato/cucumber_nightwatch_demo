@demo
Feature: demo goole 搜尋

Background:
     Given 開啟瀏覽器，打開google頁面

     Scenario: 登入成功
        When 搜尋 "100+500"
        Then 結果顯示 "600"