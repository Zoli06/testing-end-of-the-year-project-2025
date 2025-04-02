namespace TestWebsite.Pages;

public class LoginPage : BasePage
{
    // relative to base url
    private Uri _loginPageUri;

    public LoginPage()
    {
        // Concat with base url
        _loginPageUri = new Uri("/Pages/LoginPage.html", UriKind.Relative);
    }

    public void TestSelenium()
    {
        // open page
        Driver.Url = 
    }
}