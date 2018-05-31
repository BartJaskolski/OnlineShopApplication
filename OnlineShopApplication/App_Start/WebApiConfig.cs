using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Web.Http;

namespace OnlineShopApplication
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
        //    config.Formatters.JsonFormatter.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;
        //    config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

        //    config.Formatters.JsonFormatter.SupportedMediaTypes
        //           .Add(new MediaTypeHeaderValue("application/json"));

            config.Formatters.Remove(config.Formatters.XmlFormatter);
    
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
