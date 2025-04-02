using OpenQA.Selenium;

namespace TestWebsite.Pages;

public class LoginPage : BasePage
{
    private Uri _loginPageUri = new Uri("/Pages/LoginPage.html", UriKind.Relative);

     = new IWebElement(By.Id("email"));
}