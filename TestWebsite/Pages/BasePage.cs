using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace TestWebsite.Pages;

public abstract class BasePage
{
    protected readonly IWebDriver Driver = new ChromeDriver();
    protected Uri BaseUri = new Uri("http://localhost:5173");
}