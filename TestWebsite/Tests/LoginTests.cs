using TestWebsite.Pages;

namespace TestWebsite.Tests;

public class LoginTests
{
    private LoginPage _loginPage;

    [SetUp]
    public void Setup()
    {
        _loginPage = new LoginPage();
    }

    [TearDown]
    public void TearDown()
    {
        _loginPage.Dispose();
    }

    [Test]
    public void LoginWithInvalidEmailShouldFail()
    {
        _loginPage.Login("asfbaeiu@vndrbund.com", LoginPage.CorrectPassword);
        Assert.That(_loginPage.HasError);
    }

    [Test]
    public void LoginWithInvalidPasswordShouldFail()
    {
        _loginPage.Login(LoginPage.CorrectEmail, "dsgsgegsg");
        Assert.That(_loginPage.HasError);
    }

    [Test]
    public void LoginWithValidEmailAndPasswordShouldSucceed()
    {
        _loginPage.Login(LoginPage.CorrectEmail, LoginPage.CorrectPassword);
        Assert.That(_loginPage.HasError, Is.False);
    }
}