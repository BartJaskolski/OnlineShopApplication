using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OnlineShopApplication.Models
{
    public class LoginData
    {
        public string Login{ get; set; }
        public string Password { get; set; }
        public int TypeAccountID { get; set; }
    }
}