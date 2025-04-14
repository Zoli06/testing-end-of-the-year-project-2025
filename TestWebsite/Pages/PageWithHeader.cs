using OpenQA.Selenium;

namespace TestWebsite.Pages;

public abstract class PageWithHeader(IWebDriver driver) : BasePage(driver)
{
    #region Navbar toggling
    private IWebElement NavbarTogglerElement => Driver.FindElement(By.ClassName("navbar-toggler"));
    public bool HeaderCollapsed
    {
        get => NavbarTogglerElement.GetAttribute("class")!.Split(' ').Contains("collapsed");
        set
        {
            if (value == HeaderCollapsed) return;
            var js = (IJavaScriptExecutor)Driver;
            // Click even if hidden
            js.ExecuteScript("arguments[0].click();", NavbarTogglerElement);
        }
    }
    #endregion

    #region Header links
    private IWebElement HeaderLoginLinkElement => Driver.FindElement(By.ClassName("menu-login-link"));
    private IWebElement HeaderBrowseLinkElement => Driver.FindElement(By.ClassName("menu-browse-link"));
    private IWebElement HeaderCartLinkElement => Driver.FindElement(By.ClassName("menu-cart-link"));
    private IWebElement HeaderContactLinkElement => Driver.FindElement(By.ClassName("menu-contact-link"));

    public class HeaderLink(IWebElement element)
    {
        public IWebElement Element => element;
        public void Navigate()
        {
            if (!element.Displayed)
                throw new InvalidOperationException("Element is not displayed");
            element.Click();
        }
    }
    
    public HeaderLink HeaderLoginLink => new(HeaderLoginLinkElement);
    public HeaderLink HeaderBrowseLink => new(HeaderBrowseLinkElement);
    public HeaderLink HeaderCartLink => new(HeaderCartLinkElement);
    public HeaderLink HeaderContactLink => new(HeaderContactLinkElement);
    #endregion

    #region Header cart counter
    private IWebElement? HeaderCartCounterElement =>
        Driver.FindElements(By.ClassName("header-cart-counter")).FirstOrDefault();
    public int? HeaderCartCounter =>
        int.TryParse(HeaderCartCounterElement?.Text, out var temp) ? temp : null;
    #endregion
}