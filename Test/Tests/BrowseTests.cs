using TestWebsite.Pages;

namespace TestWebsite.Tests;

[TestFixture]
public class BrowseTests : BaseTests
{
    [SetUp]
    public override void SetUp()
    {
        base.SetUp();
        LoginPage.Login(LoginPage.CorrectEmail, LoginPage.CorrectPassword);
        BrowsePage.HeaderCollapsed = false;
    }

    [TestCase(1)]
    [TestCase(2)]
    [TestCase(3)]
    public void ProductShouldBeDisplayedAccordingToSelectedCategory(int categoryIndex)
    {
        // If categoryIndex is 0, it will be "All Categories"
        ArgumentOutOfRangeException.ThrowIfZero(categoryIndex);
        
        var categoryName = BrowsePage.ProductCards[categoryIndex].Category;
        
        BrowsePage.SelectCategory(categoryName);
        var categories = BrowsePage.ProductCards.Select(x => x.Category).ToArray();

        Assert.That(categories, Is.All.EqualTo(categoryName));
    }
    
    [Test]
    public void AllProductsShouldBeDisplayedIfAllCategoriesAreSelected()
    {
        BrowsePage.SelectCategory(BrowsePage.AllCategories);
        var categories = BrowsePage.ProductCards.Select(x => x.Category).ToArray();

        Assert.That(categories, Is.All.Not.Null);
    }

    [Test]
    public void CartCounterShouldNotBeDisplayedIfCartIsEmpty()
    {
        Assert.That(BrowsePage.HeaderCartCounter, Is.Null);
    }

    [TestCase(0)]
    [TestCase(-1)]
    public void CartCounterShouldNotBeAddedIfQuantityIsZeroOrNegative(int quantity)
    {
        BrowsePage.ProductCards[0].AddToCart(quantity);
        
        Assert.That(BrowsePage.HeaderCartCounter, Is.Null);
    }
    
    [TestCase(1)]
    [TestCase(2)]
    public void CartCounterShouldDisplayNumberOfProducts(int itemCount)
    {
        for (var i = 0; i < itemCount; i++)
        {
            BrowsePage.ProductCards[i].AddToCart(3);
        }

        Assert.That(BrowsePage.HeaderCartCounter, Is.EqualTo(itemCount));
    }
    
    // Gondolom ha itt is, meg a Cart Page-nel is szinkronban van a Badge (a headerben), akkor ez nem kell, mert egymassal is szinkronban lesznek...
    // Mindegy, most itt hagyom
    [TestCase(0)]
    [TestCase(1)]
    [TestCase(2)]
    public void ElementsShouldBePlacedInTheCart(int itemCount)
    {
        var names = BrowsePage.ProductCards
            .Select(x => x.Name)
            .Take(itemCount)
            .ToArray();
        
        var quantities = Enumerable.Range(1, itemCount).ToArray();
        
        for (var i = 0; i < names.Length; i++)
        {
            BrowsePage.AddProductToCart(names[i], quantities[i]);
        }
        
        BrowsePage.HeaderCartLink.Navigate();
    
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