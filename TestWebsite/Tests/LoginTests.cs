namespace TestWebsite.Tests;

public class LoginTests : BaseTests
{
    [TestCase("", "")]
    [TestCase("asd", "asd")] // Invalid email format
    [TestCase(Pages.LoginPage.CorrectEmail, "")]
    public void IncompleteLoginShouldNotBeSubmitted(string email, string password)
    {
        LoginPage.Login(email, password);
        
        Assert.That(IsUrlEqualTo(LoginPage.Url));
    }
    
    [Test]
    public void ValidLoginShouldSucceed()
    {
        LoginPage.Login(Pages.LoginPage.CorrectEmail, Pages.LoginPage.CorrectPassword);
        Assert.That(IsUrlEqualTo(BrowsePage.Url));
    }

    [TestCase(Pages.LoginPage.WrongEmail, Pages.LoginPage.CorrectEmail)]
    [TestCase(Pages.LoginPage.CorrectEmail, Pages.LoginPage.WrongPassword)]
    [TestCase(Pages.LoginPage.WrongEmail, Pages.LoginPage.WrongPassword)]
    public void InvalidLoginShouldFail(string email, string password)
    {
        LoginPage.Login(email, password);
        
        using(Assert.EnterMultipleScope())
        {
            Assert.That(IsUrlEqualTo(LoginPage.Url));
            Assert.That(LoginPage.AlertText, Is.EqualTo(Pages.LoginPage.InvalidLoginAlertText));
        }
    }
}