using TestWebsite.Pages;

namespace TestWebsite.Tests;

public class ContactTests : BaseTests
{
    [SetUp]
    public override void SetUp()
    {
        base.SetUp();
        LoginPage.Login(LoginPage.CorrectEmail, LoginPage.CorrectPassword);
        BrowsePage.HeaderContactLink.Navigate();
        BrowsePage.HeaderCollapsed = false;
    }

    [TestCase(false)]
    [TestCase(true)]
    public void NameAndEmailShouldBeDisplayedAccordingToAnonymousCheckbox(bool isChecked)
    {
        ContactPage.IsAnonymous = isChecked;

        using (Assert.EnterMultipleScope())
        {
            Assert.That(ContactPage.IsNameInputVisible, Is.EqualTo(!isChecked));
            Assert.That(ContactPage.IsEmailInputVisible, Is.EqualTo(!isChecked));
        }
    }

    [TestCase("", "john@doe.com", "Hello, this is a test message.", false)]
    [TestCase("John Doe", "", "Hello, this is a test message.", false)]
    [TestCase("John Doe", "john@doe.com", "", false)]
    [TestCase("", "", "", true)]
    public void IncompleteContactFormShouldNotBeSubmitted(string name, string email, string message,
        bool isAnonymous)
    {
        ContactPage.Name = name;
        ContactPage.Email = email;
        ContactPage.Message = message;
        ContactPage.IsAnonymous = isAnonymous;

        ContactPage.Submit();

        Assert.That(ContactPage.AlertText, Is.Not.EqualTo(ContactPage.ThankYouAlertText));
    }

    [TestCase("John Doe", "john@doe.com", "Hello, this is a test message.", false)]
    [TestCase("", "", "Hello, this is a test message.", true)]
    public void ThankYouMessageShouldBeDisplayedAfterSubmit(string name, string email, string message, bool isAnonymous)
    {
        ContactPage.Name = name;
        ContactPage.Email = email;
        ContactPage.Message = message;
        ContactPage.IsAnonymous = isAnonymous;

        ContactPage.Submit();

        Assert.That(ContactPage.AlertText, Is.EqualTo(ContactPage.ThankYouAlertText));
    }
}