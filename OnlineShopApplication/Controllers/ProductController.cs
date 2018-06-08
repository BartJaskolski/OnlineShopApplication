using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace OnlineShopApplication.Controllers
{
    public class ProductController : ApiController
    {

        // Fetch product data
        public JsonResult GetProductsList()
        {
            List<Product> products = new List<Product>();
            using (ShopAppDatabaseEntities db = new ShopAppDatabaseEntities())
            {
                products = db.Products.OrderBy(a => a.ProductName).ToList();

            }
            return new JsonResult { Data = products, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        // Fetch Products data + Category ID
        public JsonResult GetProduct(int categoryID)
        {
            List<Product> product = new List<Product>();
            using (ShopAppDatabaseEntities db = new ShopAppDatabaseEntities())
            {
                product = db.Products.Where(a => a.CategoryID.Equals(categoryID)).OrderBy(a => a.ProductName).ToList();
            }
            return new JsonResult { Data = product, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        //Find products by name
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        public JsonResult SearchProduct(string searchText)
        {
            List<Product> products = new List<Product>();
            using(ShopAppDatabaseEntities db = new ShopAppDatabaseEntities())
            {
                products = db.Products.Where(a => a.ProductName.StartsWith(searchText)).OrderBy(a => a.ProductName).ToList();
            }
            return new JsonResult { Data = products, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        //Fetch only all products names using in autocoplete 
        public JsonResult GetProductNamesList()
        {

            using(ShopAppDatabaseEntities db = new ShopAppDatabaseEntities())
            {
                var productNames = db.Products.Select(x => new { x.ProductName }).ToList();
                return new JsonResult { Data = productNames, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            }
        }

    }
}
