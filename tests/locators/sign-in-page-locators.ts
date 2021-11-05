// https://stackoverflow.com/questions/38974171/angular2-call-a-method-of-other-class-exist-in-same-typescript
// https://newbedev.com/typescript-calling-a-method-of-another-class

class SignInPageLocators{
  //healthpointe_text = "HealthPointe"
  welcome_pls_sign_to_access_text:string = "Welcome! Please sign in to access your health information."
  username_label_text:string = "Username"
  password_label_text:string = "Password"
  forgot_your_text:string = "Forgot your"
  username_text:string = "username"
  or_text:string = "or"
  password_text:string = "password?"
  sign_in_btn_text:string = "Sign In"
  donot_have_account_text:string = "Don't have an account?"
  register_now_text:string = "Register now."

  //MFA Flow Verification Code
  digit_verification_code_text = "A 6 digit verification code has been sent to your registered mobile number."
  verify_btn_text = "Verify"
  resend_code_text = "Resend Code"

  /**
  * Function to get the page title element creator/fetch_page_title_text
  * @param {String} section_title_text hold the page title text
  */
  fetch_page_title_text(section_title_text:string){
    // const locator: [string, string] = ['xpath', `//android.view.View[@text='${section_title_text}']`]; //Tuple in typescript
    // return locator

    // return $(`h1=${section_title_text}`)
    return `h1=${section_title_text}`
  }

  // get eva_image(){
  //   return '//ion-scroll[@id="ionicScrollLogin"]/div/div[1]/div/div/img'
  // }
  eva_image: [string, string] = ['xpath', "//ion-scroll[@id='ionicScrollLogin']/div/div[1]/div/div/img"]; //Tuple in typescript
  welcomeText: [string, string] = ['xpath', "//span[contains(text(),'Welcome!')]"]
  signInBtn: [string, string] = ['id', "signIn"]
}

export default new SignInPageLocators();
