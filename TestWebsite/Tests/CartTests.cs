using TestWebsite.Pages;

namespace TestWebsite.Tests;

public class CartTests : BaseTests
{
    [SetUp]
    public override void SetUp()
    {
        base.SetUp();
        LoginPage.Login(LoginPage.CorrectEmail, LoginPage.CorrectPassword);
        BrowsePage.HeaderCartLink.Navigate();
        BrowsePage.HeaderCollapsed = false;
    }
    
    private void AddSampleProductsToCart(int count, int[]? quantities = null)
    {
        if (quantities is not null && quantities.Length != count)
            throw new ArgumentOutOfRangeException(nameof(quantities), "Quantities length must match count.");
        
        quantities ??= Enumerable.Repeat(1, count).ToArray();
        
        CartPage.HeaderBrowseLink.Navigate();
        
        for (var i = 0; i < count; i++)
        {
            BrowsePage.ProductCards[i].AddToCart(quantities[i]);
        }
        
        BrowsePage.HeaderCartLink.Navigate();
    }
    
    [Test]
    public void CartShouldBeEmptyInitially()
    {
        Assert.That(CartPage.CartEditorItems, Is.Empty);
    }
    
    // Adding products to the cart is done in the BrowseTests class
    
    [Test]
    public void ModifyCartItemQuantityShouldUpdateItemTotalPrice()
    {
        AddSampleProductsToCart(1);
        
        var item = CartPage.CartEditorItems.First();
        var initialQuantity = item.Quantity;
        var initialTotalPrice = item.Total;
        
        item.Quantity = initialQuantity + 1;
        
        Assert.That(item.Total, Is.GreaterThan(initialTotalPrice));
    }
    
    [Test]
    public void ModifyCartItemQuantityShouldUpdateTotalPrice()
    {
        AddSampleProductsToCart(1, new[] { 1 });
        
        var item = CartPage.CartEditorItems.First();
        var initialQuantity = item.Quantity;
        var initialTotalPrice = CartPage.TotalPrice;
        
        item.Quantity = initialQuantity + 1;
        var newTotalPrice = CartPage.TotalPrice;
        
        Assert.That(newTotalPrice, Is.GreaterThan(initialTotalPrice));
    }
    
    [Test]
    public void RemoveItemFromCartShouldUpdateTotalPrice()
    {
        AddSampleProductsToCart(1);
        
        var item = CartPage.CartEditorItems.First();
        var initialTotalPrice = CartPage.TotalPrice;
        
        item.RemoveFromCart();
        
        Assert.That(CartPage.TotalPrice, Is.LessThan(initialTotalPrice));
    }
    
    [Test]
    public void RemoveItemFromCartShouldRemoveItemFromCart()
    {
        AddSampleProductsToCart(1);
        
        var item = CartPage.CartEditorItems.First();
        
        item.RemoveFromCart();
        
        Assert.That(CartPage.CartEditorItems, Is.Empty);
    }
    
    [Test]
    public void RemoveItemFromCartShouldUpdateCartCounter()
    {
        AddSampleProductsToCart(1);
        
        var item = CartPage.CartEditorItems.First();
        
        item.RemoveFromCart();
        
        Assert.That(BrowsePage.HeaderCartCounter, Is.Null);
    }
}