using OpenQA.Selenium;

namespace TestWebsite.Pages;

public class LoginPage : BasePage
{
    protected override Uri RelativePageUrl => new("", UriKind.Relative);

    private IWebElement Email => Driver.FindElement(By.Id("login-email"));
    private IWebElement Password => Driver.FindElement(By.Id("login-password"));
    private IWebElement LoginButton => Driver.FindElement(By.Id("login-button"));
    public bool HasError => Driver.FindElements(By.Id("login-error")).Count > 0;

    public const string CorrectEmail = "admin@admin.com";
    public const string CorrectPassword = "admin123";

    public void Login(string email, string password)
    {
        Email.SendKeys(email);
        Password.SendKeys(password);
        LoginButton.Click();
    }
}