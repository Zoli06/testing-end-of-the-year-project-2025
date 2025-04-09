using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using TestWebsite.Pages;

namespace TestWebsite.Tests;

[TestFixture]
public abstract class BaseTests
{
    protected IWebDriver Driver;
    protected BrowsePage BrowsePage;
    protected LoginPage LoginPage;
    protected CartPage CartPage;

    [SetUp]
    public void Setup()
    {
        Driver = new ChromeDriver();
        Driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(2);

        BrowsePage = new BrowsePage(Driver);
        LoginPage = new LoginPage(Driver);
        CartPage = new CartPage(Driver);

        Driver.Navigate().GoToUrl(LoginPage.Url);
    }

    [TearDown]
    public void TearDown()
    {
        Driver.Dispose();
    }

    protected bool IsUrlEqualTo(Uri url)
    {
        return Uri.Compare(url, new Uri(Driver.Url), UriComponents.Path, UriFormat.UriEscaped,
            StringComparison.Ordinal) == 0;
    }
}