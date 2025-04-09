namespace TestWebsite.Tests;

public class LoginTests : BaseTests
{
    [Test]
    public void LoginWithInvalidEmailShouldFail()
    {
        LoginPage.Login("asfbaeiu@vndrbund.com", Pages.LoginPage.CorrectPassword);
        Assert.That(LoginPage.AlertText?.Text, Is.EqualTo("Invalid email or password"));
    }

    [Test]
    public void LoginWithInvalidPasswordShouldFail()
    {
        LoginPage.Login(Pages.LoginPage.CorrectEmail, "dsgsgegsg");
        Assert.That(LoginPage.AlertText?.Text, Is.EqualTo("Invalid email or password"));
    }

    [Test]
    public void LoginWithValidEmailAndPasswordShouldSucceed()
    {
        LoginPage.Login(Pages.LoginPage.CorrectEmail, Pages.LoginPage.CorrectPassword);
        Assert.That(IsUrlEqualTo(BrowsePage.Url));
    }
}