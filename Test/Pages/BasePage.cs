using OpenQA.Selenium;

namespace TestWebsite.Pages;

public abstract class BasePage(IWebDriver driver)
{
    protected readonly IWebDriver Driver = driver;
    
    #region Url
    private readonly Uri _baseUrl = new("http://localhost:5173");
    protected abstract Uri RelativePageUrl { get; }
    public Uri Url => new(_baseUrl, RelativePageUrl);
    #endregion

    #region Alert
    private IWebElement? AlertTextElement => Driver.FindElements(By.ClassName("alert-text")).FirstOrDefault();
    public string? AlertText => AlertTextElement?.Text;
    #endregion
    
}