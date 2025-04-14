using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using TestWebsite.Pages;

namespace TestWebsite.Tests;

[TestFixture]
public abstract class BaseTests
{
    private IWebDriver _driver;
    protected BrowsePage BrowsePage;
    protected LoginPage LoginPage;
    protected CartPage CartPage;
    protected ContactPage ContactPage;

    [SetUp]
    public virtual void SetUp()
    {
        _driver = new ChromeDriver();
        _driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(1);

        BrowsePage = new BrowsePage(_driver);
        LoginPage = new LoginPage(_driver);
        CartPage = new CartPage(_driver);
        ContactPage = new ContactPage(_driver);

        _driver.Navigate().GoToUrl(LoginPage.Url);
    }

    [TearDown]
    public void TearDown()
    {
        _driver.Dispose();
    }

    protected bool IsUrlEqualTo(Uri url)
    {
        return Uri.Compare(url, new Uri(_driver.Url), UriComponents.Path, UriFormat.UriEscaped,
            StringComparison.Ordinal) == 0;
    }
}