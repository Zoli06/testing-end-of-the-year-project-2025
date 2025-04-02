using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace TestWebsite.Pages;

public abstract class BasePage
{
    protected abstract Uri RelativePageUrl { get; }
    
    protected readonly IWebDriver Driver = new ChromeDriver();
    
    private readonly Uri _baseUrl = new("http://localhost:5173");
    private Uri FullUrl => new(_baseUrl, RelativePageUrl);
    public Uri CurrentUrl => new(Driver.Url);

    protected BasePage()
    {
        Driver.Navigate().GoToUrl(FullUrl);
    }

    public void Dispose()
    {
        Driver.Quit();
    }
    
    ~BasePage()
    {
        Dispose();
    }
}