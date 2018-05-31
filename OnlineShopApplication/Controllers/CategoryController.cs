using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace OnlineShopApplication.Controllers
{
    public class CategoryController : ApiController
    {
        public JsonResult GetCategories()
        {
            List<Category> allCategory = new List<Category>();
            using (ShopAppDatabaseEntities db = new ShopAppDatabaseEntities())
            {
                allCategory = db.Categories.OrderBy(a => a.CategoryName).ToList();
            }
            return new JsonResult { Data = allCategory, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

    }
}
