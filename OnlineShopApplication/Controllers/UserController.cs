using OnlineShopApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace OnlineShopApplication.Controllers
{
    public class UserController : ApiController
    {

        // GET last user
        public JsonResult GetLastUser()
        {
            UsersT c = null;

            using (ShopAppDatabaseEntities db = new ShopAppDatabaseEntities())
            {
                c = db.UsersTs.OrderByDescending(a => a.UserID).Take(1).FirstOrDefault();
            }
            return new JsonResult { Data = c, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

        // Login user
        public JsonResult UserLogin(LoginData l)
        {
            using (ShopAppDatabaseEntities db = new ShopAppDatabaseEntities())
            {
                var c = db.UsersTs.Where(a => a.Login.Equals(l.Login) && a.Password.Equals(l.Password)).FirstOrDefault();
                return new JsonResult { Data = c, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            }
        }

        // Get accunt type for specified user
        public JsonResult GetTypesAccount(int accountid)
        {
            List<AccountType> act = new List<AccountType>();

            using (ShopAppDatabaseEntities db = new ShopAppDatabaseEntities())
            {
                act = db.AccountTypes.Where(x => x.TypeAccountId.Equals(accountid)).ToList();
            }
            return new JsonResult { Data = act, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
    }
}
