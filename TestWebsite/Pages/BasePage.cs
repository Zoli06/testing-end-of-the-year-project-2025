using OpenQA.Selenium;

namespace TestWebsite.Pages;

public abstract class BasePage(IWebDriver driver)
{
    protected readonly IWebDriver Driver = driver;
    
    private readonly Uri _baseUrl = new("http://localhost:5173");
    protected abstract Uri RelativePageUrl { get; }
    public Uri Url => new(_baseUrl, RelativePageUrl);

    public IWebElement? AlertText => Driver.FindElements(By.Id("alert-text")).FirstOrDefault();
}