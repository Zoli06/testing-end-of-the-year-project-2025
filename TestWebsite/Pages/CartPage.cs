using System.Globalization;
using OpenQA.Selenium;

namespace TestWebsite.Pages;

public class CartPage(IWebDriver driver) : PageWithHeader(driver)
{
    protected override Uri RelativePageUrl { get; } = new("cart", UriKind.Relative);
    
    #region Cart items
    public class CartEditorItem(IWebElement element)
    {
        private IWebElement NameElement => element.FindElement(By.ClassName("cart-editor-name"));
        private IWebElement QuantityInputElement => element.FindElement(By.ClassName("cart-editor-quantity"));
        private IWebElement PriceElement => element.FindElement(By.ClassName("cart-editor-price"));
        private IWebElement TotalElement => element.FindElement(By.ClassName("cart-editor-total"));
        private IWebElement RemoveElement => element.FindElement(By.ClassName("cart-editor-remove"));
        
        public string Name => NameElement.Text;
        public int Quantity
        {
            get => int.Parse(QuantityInputElement.GetAttribute("value")!);
            set => QuantityInputElement.SendKeys(value.ToString());
        }
        public double Price => double.Parse(PriceElement.Text, NumberStyles.Currency);
        public double Total => double.Parse(TotalElement.Text, NumberStyles.Currency);
        public void RemoveFromCart()
        {
            RemoveElement.Click();
        }
    }
    
    public CartEditorItem[] CartEditorItems
    {
        get
        {
            var elements = Driver.FindElements(By.ClassName("cart-editor-item"));
            return elements.Select(element => new CartEditorItem(element)).ToArray();
        }
    }

    public bool DoesCartContain(string name, int? quantity = null)
    {
        var item = CartEditorItems.FirstOrDefault(x => x.Name == name);
        if (item is null)
            return false;

        var quantityToCheck = quantity ?? item.Quantity;
        var actualQuantity = item.Quantity;
        
        return quantityToCheck == actualQuantity;
    }
    #endregion
    
    #region Total price
    private IWebElement TotalPriceElement => Driver.FindElement(By.ClassName("cart-total-price"));
    public double TotalPrice => double.Parse(TotalPriceElement.Text, NumberStyles.Currency);
    #endregion
}