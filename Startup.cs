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
using System.Web;
using kb_app.Helpers;
//using kb_app.Services; KB
using AutoMapper;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;



namespace kb_app
{
    public class Startup
    {
        //public IConfigurationRoot Configuration { get; } //ADDED FOR UPLOAD
        public Startup(Microsoft.Extensions.Configuration.IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public Microsoft.Extensions.Configuration.IConfiguration Configuration { get; }//Commented for upload

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
           //services.AddSingleton<Microsoft.AspNetCore.Http.IHttpContextAccessor, Microsoft.AspNetCore.Http.HttpContextAccessor>();//Added for upload            

           services.AddCors();
            //services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();


            //services.AddSingleton<IHostingEnvironment>(new HostingEnvironment());

            //services.AddDbContext<DataContext>(x => x.UseInMemoryDatabase("TestDb"));
            services.AddDbContext<KBAppContext>(options =>  options.UseMySQL(Configuration.GetConnectionString("KBHIConnection")));
            
            services.AddMvc()
            .AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());
            services.AddAutoMapper();

           
 
            // configure strongly typed settings objects
            var appSettingsSection = Configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);
 
            // configure jwt authentication
            var appSettings = appSettingsSection.Get<AppSettings>();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.Events = new JwtBearerEvents
                {
                    OnTokenValidated = context =>
                    {
                        //var userService = context.HttpContext.RequestServices.GetRequiredService<IUserService>(); kb
                        var userId = int.Parse(context.Principal.Identity.Name);
                        //var user = userService.GetById(userId); KB
                        // if (user == null)
                        // {
                        //     // return unauthorized if user no longer exists
                        //     context.Fail("Unauthorized");
                        // }
                        return Task.CompletedTask;
                    }
                };
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });
 
            // configure DI for application services
            //services.AddScoped<IUserService, UserService>(); KB 
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        // public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory) //new added
        // {
        //     loggerFactory.AddConsole(Configuration.GetSection("Logging"));
        //     loggerFactory.AddDebug();
 
        //     // global cors policy
        //     app.UseCors(x => x
        //         .AllowAnyOrigin()
        //         .AllowAnyMethod()
        //         .AllowAnyHeader()
        //         .AllowCredentials());
 
        //     app.UseAuthentication();
 
        //     app.UseMvc();
        // }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        //public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        public void Configure(IApplicationBuilder app, IHostingEnvironment env,IServiceProvider svp)
        {
        
        //System.Web.Hosting.HostingEnvironment.m_IsHosted = true;
        //services.AddSingleton<IHostingEnvironment>(new HostingEnvironment());
            
           
//Redirect non api calls to angular app that will handle routing of the app.    

app.Use(async (context, next) => {
  //context.Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:4200");
  context.Response.Headers.Add("Access-Control-Allow-Origin", "*");
    context.Response.Headers.Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    context.Response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
    context.Request.Headers.Add("Access-Control-Allow-Origin", "*");//http://localhost:4200
  context.Request.Headers.Add("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    context.Request.Headers.Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT, OPTIONS");
    //context.Response.Headers.Add("Access-Control-Allow-Credentials",true);    

    await next();  //commented due to upload 
    if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value) && !context.Request.Path.Value.StartsWith("/kbapi/")) 
    {context.Request.Path = "/index.html";  
        await next();  
    }  
});  
// configure the app to serve index.html from /wwwroot folder    
app.UseDefaultFiles();  
app.UseStaticFiles();  
app.UseMvcWithDefaultRoute(); 



//loggerFactory.AddConsole(Configuration.GetSection("Logging"));
  //  loggerFactory.AddDebug();

    // System.Web.HttpContext.ServiceProvider = svp;
    // //ServiceProvider=svp;
    // System.Web.Hosting.HostingEnvironment.m_IsHosted = true;

    // System.Web.HttpContext.Configure(app.ApplicationServices.
    //     GetRequiredService<Microsoft.AspNetCore.Http.IHttpContextAccessor>()
    // );


    // app.UseCookieAuthentication(new CookieAuthenticationOptions()
    // {
    //     AuthenticationScheme = "MyCookieMiddlewareInstance",
    //     LoginPath = new Microsoft.AspNetCore.Http.PathString("/Account/Unauthorized/"),
    //     AccessDeniedPath = new Microsoft.AspNetCore.Http.PathString("/Account/Forbidden/"),
    //     AutomaticAuthenticate = true,
    //     AutomaticChallenge = true,
    //     CookieSecure = Microsoft.AspNetCore.Http.CookieSecurePolicy.SameAsRequest

    //    , CookieHttpOnly=false

    // });

       }
    }
}
