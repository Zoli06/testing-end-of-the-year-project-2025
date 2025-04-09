using OpenQA.Selenium;

namespace TestWebsite.Pages;

public class CartPage(IWebDriver driver) : AuthenticatedPage(driver)
{
    public readonly struct CartEditorItem(IWebElement element)
    {
        public IWebElement Name => element.FindElement(By.ClassName("cart-editor-name"));
        public IWebElement QuantityInput => element.FindElement(By.ClassName("cart-editor-quantity"));
        public IWebElement Price => element.FindElement(By.ClassName("cart-editor-price"));
        public IWebElement Total => element.FindElement(By.ClassName("cart-editor-total"));
        public IWebElement RemoveButton => element.FindElement(By.ClassName("cart-editor-remove"));
    }
    
    protected override Uri RelativePageUrl { get; } = new("cart", UriKind.Relative);

    public CartEditorItem[] CartEditorItems
    {
        get
        {
            var elements = driver.FindElements(By.ClassName("cart-editor-item"));
            return elements.Select(element => new CartEditorItem(element)).ToArray();
        }
    }

    public CartEditorItem? GetCartEditorItemByName(string name)
    {
        return CartEditorItems.First(x => x.Name.Text == name);
    }

    public bool DoesCartContain(string name, int? quantity = null)
    {
        var item = GetCartEditorItemByName(name);
        if (item == null)
            return false;
        
        var quantityToCheck = quantity?.ToString() ?? item.Value.QuantityInput.Text;
        var actualQuantity = item.Value.QuantityInput.GetAttribute("value");
        
        return quantityToCheck == actualQuantity;
    }
}