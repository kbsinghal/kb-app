using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using kb_app.Models;
using System.IO;
//using MySql.Data;
using Newtonsoft.Json.Serialization;
using System.Net.Http.Formatting;
using System.Web.Http;




namespace kb_app
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

           
            ////GlobalConfiguration.Configuration.Formatters.Add(new XmlMediaTypeFormatter());

             services.AddDbContext<KBAppContext>(options =>  options.UseMySQL(Configuration.GetConnectionString("KBHIConnection")));
            services.AddCors();
            services.AddMvc()
            .AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());

            
             //System.Web.Http.GlobalConfiguration.Configuration.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
            //Configuration.Formatters.Insert(0, new System.Net.Http.Formatting.JsonMediaTypeFormatter());
            //GlobalConfiguration.Configuration.Formatters.Insert(0, new System.Net.Http.Formatting.JsonMediaTypeFormatter());
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
        
            
            // if (env.IsDevelopment())
            // {
            //     app.UseDeveloperExceptionPage();
            // }

            // app.UseMvc();
             //GlobalConfiguration.Configuration.Formatters.Clear();
            //GlobalConfiguration.Configuration.Formatters.Add(new System.Net.Http.Formatting.JsonMediaTypeFormatter());
            
//Redirect non api calls to angular app that will handle routing of the app.    

app.Use(async (context, next) => {  
    
    
    
    context.Response.Headers.Add("Access-Control-Allow-Origin", "*");
    //context.Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:5000");
    context.Response.Headers.Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    context.Response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");

    context.Request.Headers.Add("Access-Control-Allow-Origin", "*");//http://localhost:5000
    //context.Request.Headers.Add("Access-Control-Allow-Origin", "http://localhost:5000");
    //context.Request.Headers.Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    context.Request.Headers.Add("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    context.Request.Headers.Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT, OPTIONS");


    


    //'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT, OPTIONS',
//      'Access-Control-Allow-Origin', 'http://localhost:5000',
  //    'Access-Control-Allow-Headers', "X-Requested-With, Content-Type",

    //context.Response.Headers.Add("Authorization","Basic " + Base64.encode("username" + ':' + "password"));
    //context.Response.Headers.Add("Authorization","Basic a2FseWFhbmJoYXYgOiBNMHJwaCF1cw==");
      //context.Response.Headers.Add("auth-token","C3PO R2D2");

    //context.GlobalConfiguration.configuration.for
    //context.GlobalConfiguration.Configuration.Formatters.Clear();
    //context.GlobalConfiguration.Configuration.Formatters.Add(new System.Net.Http.Formatting.JsonMediaTypeFormatter());
    await next();  
    if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value) && !context.Request.Path.Value.StartsWith("/api/")) 
    {context.Request.Path = "/index.html";  
        await next();  
    }  
});  
// configure the app to serve index.html from /wwwroot folder    
app.UseDefaultFiles();  
app.UseStaticFiles();  
//app.Use('Access-Control-Allow-Origin':'*');
//app.UseCors();
// configure the app for usage as api    
app.UseMvcWithDefaultRoute(); 

       }
    }
}
