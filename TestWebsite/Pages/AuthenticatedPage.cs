using OpenQA.Selenium;

namespace TestWebsite.Pages;

public abstract class AuthenticatedPage(IWebDriver driver) : BasePage(driver)
{
    public IWebElement? HeaderCartCounter => Driver.FindElements(By.Id("header-cart-counter")).FirstOrDefault();
    
    public IWebElement HeaderLoginLink => Driver.FindElement(By.Id("menu-login-link"));
    public IWebElement HeaderBrowseLink => Driver.FindElement(By.Id("menu-browse-link"));
    public IWebElement HeaderCartLink => Driver.FindElement(By.Id("menu-cart-link"));
    public IWebElement HeaderContactLink => Driver.FindElement(By.Id("menu-contact-link"));
}