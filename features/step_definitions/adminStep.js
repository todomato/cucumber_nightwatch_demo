module.exports = function () {
  this.Given(/^開啟瀏覽器、登入，進到帳號管理頁面$/, function () {
    this
      .url('http://localhost:31232/backend/#/login')
      .waitForElementVisible('body', 1000)
       .setValue('input[type=text]', 'admin')
      .setValue('input[type=password]', 'admin')
      .click('button[type=submit]')
  })

  this.Given(/^點擊新增按鈕$/, function () {
      this
      .pause(500)
      .waitForElementVisible('a[name=add]', 1000)
      .click('a[name=add]')
  })

  this.Given(/^新增假資料$/, function () {
      this
       .setValue('input[name=account]', 'test')
       .setValue('input[name=Password]', 'test')
       .setValue('input[name=name]', 'testName')
       .setValue('input[name=email]', 'test@gmail.com')
  })

    this.Given(/^點擊更新按鈕 testName$/, function () {
      this
      .pause(500)
      .waitForElementVisible('a[name=edit_testName]', 1000)
      .click('a[name=edit_testName]')
  })

    this.Given(/^更新資料$/, function () {
      this
      .pause(500)
      .clearValue('input[name=email]')
      .setValue('input[name=email]', 'abcabcabc@gmail.com')
  })

  this.When(/^按下新增按鈕$/, function () {
      this.click('button[name=btn_add]')
  })

    this.When(/^按下更新按鈕$/, function () {
      this
      .click('button[name=btn_update]')
  })
  

   this.When(/^按下刪除按鈕 testName$/, function () {
     //點擊第一筆 TODO
      this
      .waitForElementVisible('button[name=del_testName]', 1000)
      .click('button[name=del_testName]')
     .pause(500)

  })

    this.Then(/^跳出確認刪除視窗並確認刪除$/, function () {
    this
    .pause(500)
    .acceptAlert()
  })

  this.Then(/^跳出新增成功視窗$/, function () {
    this
    .pause(500)
    .acceptAlert()
  })

    this.Then(/^跳出更新成功視窗$/, function () {
    this
    .pause(500)
    .acceptAlert()
  })

   this.Then(/^返回列表$/, function () {
    this
    .pause(1500)
    .assert.urlEquals("http://localhost:31232/backend/#/dashboard/admin")
  })

}
