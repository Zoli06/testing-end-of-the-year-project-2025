using System.Globalization;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;

namespace TestWebsite.Pages;

public class BrowsePage(IWebDriver driver) : PageWithHeader(driver)
{
    protected override Uri RelativePageUrl => new("browse", UriKind.Relative);
    
    #region Category
    private SelectElement CategorySelector => new(Driver.FindElement(By.ClassName("category-select")));
    public const string AllCategories = "All Categories";
    
    public void SelectCategory(string category)
    {
        CategorySelector.SelectByText(category);
    }
    #endregion
    
    #region Product cards
    public class ProductCard(IWebElement productCard)
    {
        private IWebElement NameElement => productCard.FindElement(By.ClassName("product-card-name"));
        private IWebElement CategoryElement => productCard.FindElement(By.ClassName("product-card-category"));
        private IWebElement DescriptionElement => productCard.FindElement(By.ClassName("product-card-description"));
        private IWebElement PriceElement => productCard.FindElement(By.ClassName("product-card-price"));
        private IWebElement ImageElement => productCard.FindElement(By.ClassName("product-card-image"));
        private IWebElement QuantityElement => productCard.FindElement(By.ClassName("product-card-quantity"));
        private IWebElement AddToCartElement => productCard.FindElement(By.ClassName("product-card-add-to-cart"));

        public string Name => NameElement.Text;
        public string Category => CategoryElement.Text;
        public string Description => DescriptionElement.Text;
        public double Price => double.Parse(PriceElement.Text, NumberStyles.Currency);
        public string ImageSource => ImageElement.GetAttribute("src")!;
        public int Quantity => int.Parse(QuantityElement.Text);
        
        public void AddToCart(int quantity)
        {
            QuantityElement.SendKeys(quantity.ToString());
            AddToCartElement.Click();
        }
    }

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
        return ProductCards.FirstOrDefault(x => x.Name == name);
    }

    public void AddProductToCart(string name, int quantity)
    {
        var card = GetProductCardByName(name);
        if (card is null)
            throw new Exception($"Product card not found: {name}");
        
        card.AddToCart(quantity);
    }
    #endregion
}