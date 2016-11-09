module.exports = function () {
  this.Given(/^開啟瀏覽器，打開登入頁面$/, function () {
    this
      .url('http://localhost:31232/backend/#/login')
      .waitForElementVisible('body', 1000)
  })

  this.Given(/^輸入帳號 "([^"]*)"$/, function (expression) {
    this
     .pause(500)
      .setValue('input[type=text]', expression)
  })

  this.Given(/^輸入密碼 "([^"]*)"$/, function (expression) {
    this
     .pause(500)
      .setValue('input[type=password]', expression)
  })

  this.When(/^按下登入按鈕$/, function () {
    this
     .pause(500)
      .click('button[type=submit]')
  })

  this.Then(/^等待兩秒，進入頁面會右上角出現名稱 "([^"]*)"$/, function (result) {
    this
    .pause(2000)
    .assert.containsText('#user_name', result)
  })

  this.Then(/^應該送出失敗$/, function () {
    this
     .pause(500)
    .assert.visible('div.alert-dismissible');
  })

}
