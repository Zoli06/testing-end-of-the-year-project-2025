using OpenQA.Selenium;

namespace TestWebsite.Pages;

public class ContactPage(IWebDriver driver) : PageWithHeader(driver)
{
    protected override Uri RelativePageUrl { get; } = new("contact", UriKind.Relative);
    
    private IWebElement? NameInputElement => Driver.FindElements(By.ClassName("contact-name")).FirstOrDefault();
    private IWebElement? EmailInputElement => Driver.FindElements(By.ClassName("contact-email")).FirstOrDefault();
    private IWebElement MessageInputElement => Driver.FindElement(By.ClassName("contact-message"));
    private IWebElement IsAnonymousCheckboxElement => Driver.FindElement(By.ClassName("contact-anonymous"));
    private IWebElement SubmitButtonElement => Driver.FindElement(By.ClassName("contact-submit"));
    
    public string Name
    {
        get => NameInputElement?.GetAttribute("value")!;
        set => NameInputElement?.SendKeys(value);
    }
    
    public string Email
    {
        get => EmailInputElement?.GetAttribute("value")!;
        set => EmailInputElement?.SendKeys(value);
    }
    
    public string Message
    {
        get => MessageInputElement.GetAttribute("value")!;
        set => MessageInputElement.SendKeys(value);
    }
    
    public bool IsAnonymous
    {
        get => IsAnonymousCheckboxElement.Selected;
        set
        {
            if (IsAnonymous != value)
                IsAnonymousCheckboxElement.Click();
        }
    }
    
    public void Submit()
    {
        SubmitButtonElement.Click();
    }
    
    public bool IsNameInputVisible => NameInputElement?.Displayed ?? false;
    public bool IsEmailInputVisible => EmailInputElement?.Displayed ?? false;
    
    public const string ThankYouAlertText = "Thank you for your feedback!";
}