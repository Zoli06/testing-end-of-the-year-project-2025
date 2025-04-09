using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;

namespace TestWebsite.Pages;

public class BrowsePage(IWebDriver driver) : AuthenticatedPage(driver)
{
    public readonly struct ProductCard(IWebElement productCard)
    {
        public IWebElement Name => productCard.FindElement(By.ClassName("product-card-name"));
        public IWebElement Description => productCard.FindElement(By.ClassName("product-card-description"));
        public IWebElement Price => productCard.FindElement(By.ClassName("product-card-price"));
        public IWebElement Image => productCard.FindElement(By.ClassName("product-card-image"));
        public IWebElement Quantity => productCard.FindElement(By.ClassName("product-card-quantity"));
        public IWebElement AddToCartButton => productCard.FindElement(By.ClassName("product-card-add-to-cart"));
    }

    protected override Uri RelativePageUrl => new("/browse", UriKind.Relative);

    private SelectElement CategorySelector => new(Driver.FindElement(By.Id("category-select")));

    public ProductCard[] ProductCards
    {
        get
        {
            var productCardElements = Driver.FindElements(By.ClassName("product-card"));
            return productCardElements.Select(element => new ProductCard(element)).ToArray();
        }
    }

    public ProductCard? GetProductCardByName(string name)
    {
        return ProductCards.FirstOrDefault(x => x.Name.Text == name);
    }

    public void AddProductToCart(string name, int quantity)
    {
        var card = GetProductCardByName(name);
        if (card == null)
            throw new Exception($"Product card not found: {name}");
        
        card.Value.Quantity.SendKeys(quantity.ToString());
        card.Value.AddToCartButton.Click();
    }

    public void SelectCategory(string category)
    {
        CategorySelector.SelectByText(category);
    }
}