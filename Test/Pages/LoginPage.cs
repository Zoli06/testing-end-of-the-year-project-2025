using OpenQA.Selenium;

namespace TestWebsite.Pages;

public class LoginPage(IWebDriver driver) : BasePage(driver)
{
    protected override Uri RelativePageUrl => new("", UriKind.Relative);

    private IWebElement Email => Driver.FindElement(By.ClassName("login-email"));
    private IWebElement Password => Driver.FindElement(By.ClassName("login-password"));
    private IWebElement LoginButton => Driver.FindElement(By.ClassName("login-button"));

    public const string CorrectEmail = "admin@admin.com";
    public const string CorrectPassword = "admin123";
    public const string WrongEmail = "dfdsfadfa@fdafda.com";
    public const string WrongPassword = "dfdsfadfa";
    public const string InvalidLoginAlertText = "Invalid email or password";

    public void Login(string email, string password)
    {
        Email.SendKeys(email);
        Password.SendKeys(password);
        LoginButton.Click();
    }
}