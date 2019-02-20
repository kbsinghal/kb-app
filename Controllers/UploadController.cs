using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kb_app.Models;
using Microsoft.AspNetCore.Mvc;
using kb_app.DAL;
using System.Reflection;
using Microsoft.AspNetCore.Hosting;
using System.Net.Http.Headers;
using System.IO;

namespace kb_app.Controllers
{
    
[Route("kbapi/[controller]")]  // set route attribute to make request as 'api/state'  
    public class UploadController: Controller   {

        private readonly KBAppContext _context;  
         private readonly IHostingEnvironment _hostingEnvironment;  
    
     //initiate database context  
    public UploadController(KBAppContext context) {  
            _context = context;  
        }  

         public UploadController(IHostingEnvironment hostingEnvironment)  
         {  
             _hostingEnvironment = hostingEnvironment;  
         }  

        //this._hostingEnvironment = (IHostingEnvironment) new HostingEnvironment();
  
        [HttpPost]  
        public IActionResult Index()  
        {  
            try  
            {  
                var file = Request.Form.Files[0];  
                string folderName = "UploadedBanner";  
                string webRootPath = _hostingEnvironment.WebRootPath;  
                string newPath = Path.Combine(webRootPath, folderName);  
                if (!Directory.Exists(newPath))  
                {  
                    Directory.CreateDirectory(newPath);  
                }  
                if (file.Length > 0)  
                {  
                    string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');  
                    string fullPath = Path.Combine(newPath, fileName);  
                    using (var stream = new FileStream(fullPath, FileMode.Create))  
                    {  
                        file.CopyTo(stream);  
                    }  
                }  
                return Json("Upload Successful.");  
            }  
            catch (Exception ex)  
            {  
                return Json("Upload Failed: " + ex.Message);  
            }  
        }  
        
    }
}
