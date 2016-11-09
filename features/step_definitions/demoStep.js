module.exports = function () {
  this.Given(/^開啟瀏覽器，打開google頁面$/, function () {
    this
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)

  })

   this.When(/^搜尋 "([^"]*)"$/, function (expression) {
      this
      .setValue('input[name=q]', expression)
      .pause(500)
      .submitForm('input[name=q]')

  })

    this.Then(/^結果顯示 "([^"]*)"$/, function (result) {
    this
      .pause(500)
      .assert.containsText('body', result)
  })

}