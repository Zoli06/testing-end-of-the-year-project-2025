using Microsoft.VisualStudio.TestPlatform.ObjectModel;
using TestWebsite.Pages;

namespace TestWebsite.Tests;

[TestFixture]
public class BrowseTests : BaseTests
{
    [SetUp]
    public void SetUp()
    {
        Driver.Navigate().GoToUrl(LoginPage.Url);
        LoginPage.Login(LoginPage.CorrectEmail, LoginPage.CorrectPassword);
    }

    [TestCase("Electronics", new[] { "Smartphone", "Laptop", "Smartwatch" })]
    [TestCase("Home Appliances", new[] { "Refrigerator", "Washing Machine", "Microwave Oven" })]
    [TestCase("Fashion", new[] { "Sneakers", "Jacket", "Watch" })]
    [TestCase("All Products",
        new[]
        {
            "Smartphone", "Laptop", "Smartwatch",
            "Refrigerator", "Washing Machine", "Microwave Oven",
            "Sneakers", "Jacket", "Watch"
        })]
    public void ProductShouldBeDisplayedAccordingToSelectedCategory(string category, string[] expected)
    {
        BrowsePage.SelectCategory(category);
        var products = BrowsePage.ProductCards.Select(x => x.Name.Text).ToArray();
        Array.Sort(products);
        Array.Sort(expected);

        Assert.That(products, Is.EquivalentTo(expected));
    }

    [Test]
    public void CartCounterShouldNotBeDisplayedIfCartIsEmpty()
    {
        Assert.That(BrowsePage.HeaderCartCounter, Is.Null);
    }

    [TestCase(0)]
    [TestCase(-1)]
    public void CartCounterShouldNotBeDisplayedIfQuantityIsZeroOrNegative(int quantity)
    {
        BrowsePage.ProductCards[0].Quantity.SendKeys(quantity.ToString());
        BrowsePage.ProductCards[0].AddToCartButton.Click();
        
        Assert.That(BrowsePage.HeaderCartCounter, Is.Null);
    }
    
    [TestCase(["Smartphone"])]
    [TestCase(["Smartphone", "Laptop"])]
    public void CartCounterShouldDisplayNumberOfProducts(params string[] names)
    {
        foreach (var name in names)
        {
            BrowsePage.AddProductToCart(name, 3);
        }

        Assert.That(BrowsePage.HeaderCartCounter?.Text, Is.EqualTo(names.Length.ToString()));
    }

    [TestCase(new[] {"Smartphone", "Laptop"}, new[] {2, 3})]
    [TestCase(new[] {"Smartphone"}, new[] {3})]
    [TestCase(new string[] {}, new int[] {})]
    public void ElementsShouldBePlacedInTheCart(string[] names, int[] quantities)
    {
        if (names.Length != quantities.Length)
            throw new ArgumentException("The length of names must be equal to the length of quantities.");

        for (var i = 0; i < names.Length; i++)
        {
            BrowsePage.AddProductToCart(names[i], quantities[i]);
        }
        
        BrowsePage.HeaderCartLink.Click();

        using (Assert.EnterMultipleScope())
        {
            for (var i = 0; i < names.Length; i++)
            {
                Assert.That(CartPage.DoesCartContain(names[i], quantities[i]));
            }
            
            // Check that cart doesn't contain extra items
            Assert.That(CartPage.CartEditorItems.Count, Is.EqualTo(names.Length));
        } 
    }
}