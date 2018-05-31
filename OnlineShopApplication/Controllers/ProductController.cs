using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

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

    }
}
