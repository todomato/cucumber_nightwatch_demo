@admin
Feature: 帳號管理
 
Background:
     Given 開啟瀏覽器、登入，進到帳號管理頁面

     @add_admin
     Scenario: 新增資料
        Given 點擊新增按鈕
        Given 新增假資料
        When 按下新增按鈕
        Then 跳出新增成功視窗
        Then 返回列表

     @update_admin
     Scenario: 更新資料
        Given 點擊更新按鈕 testName
        Given 更新資料
        When 按下更新按鈕
        Then 跳出更新成功視窗
        Then 返回列表

    @del_admin
     Scenario: 刪除資料
        When 按下刪除按鈕 testName
        Then 跳出確認刪除視窗並確認刪除
        Then 返回列表
        
