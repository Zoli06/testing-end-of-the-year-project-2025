using OpenQA.Selenium;

namespace TestWebsite.Pages;

public class LoginPage(IWebDriver driver) : BasePage(driver)
{
    protected override Uri RelativePageUrl => new("", UriKind.Relative);

    private IWebElement Email => Driver.FindElement(By.Id("login-email"));
    private IWebElement Password => Driver.FindElement(By.Id("login-password"));
    private IWebElement LoginButton => Driver.FindElement(By.Id("login-button"));

    public const string CorrectEmail = "admin@admin.com";
    public const string CorrectPassword = "admin123";

    public void Login(string email, string password)
    {
        Email.SendKeys(email);
        Password.SendKeys(password);
        LoginButton.Click();
    }
}