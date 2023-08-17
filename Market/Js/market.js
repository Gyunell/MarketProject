function Add()
{
    var code = document.getElementById("code").value;
    var name = document.getElementById("name").value;
    var count = document.getElementById("count").value;
    var price = document.getElementById("price").value;
    window.alert("Add Product");
    document.writeln("Product code :" + " " + code);
    document.writeln("Product name :" + " " + name);
    document.writeln("Product count :" + " " + count);
    document.writeln("Product price :" + " " + price);
}