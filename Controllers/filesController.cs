using System;
using System.Collections.Generic;
using System.Linq;
//using System.Threading.Tasks;
using kb_app.Models;
using Microsoft.AspNetCore.Mvc;
//using kb_app.DAL;
//using System.Reflection;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Hosting.Abstractions;
//using Microsoft.AspNetCore.Hosting;
//using Microsoft.Extensions.Hosting;
//using Microsoft.Extensions.Hosting.Abstractions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.IO;
//using System.Threading.Tasks;
//using kb_app.DAL;
//using System.Reflection;

namespace kb_app.Controllers
{
    
//[Route("kbapi/[controller]")]  // set route attribute to make request as 'api/state'  
[Route("kbapi/files/filesList")]  // set route attribute to make request as 'api/state'  
public class filesController: Controller {  
    private readonly KBAppContext _context;  
    private readonly string[] ACCEPTED_FILE_TYPES = new[] {".jpg", ".jpeg", ".png"};
        private readonly IHostingEnvironment host;

        //private readonly BookstoreDbContext context;
        public filesController(IHostingEnvironment host, KBAppContext _context)
        {
            this._context = _context;
            this.host = host;
        }
        [HttpPost]
        public async Task<IActionResult> Upload(IFormFile filesData)
        {   
            if(filesData == null) return BadRequest("Null File"); // These lines are for validation. We will check if the file is valid or not.
            if(filesData.Length == 0)
            {
                return  BadRequest("Empty File");
            }
            if(filesData.Length > 10 * 1024 * 1024) return BadRequest("Max file size exceeded.");
            if(!ACCEPTED_FILE_TYPES.Any(s => s == Path.GetExtension(filesData.FileName).ToLower())) return BadRequest("Invalid file type.");
            var uploadFilesPath = Path.Combine(host.WebRootPath, "uploads"); //we will create a new path where we will add our file.
            if (!Directory.Exists(uploadFilesPath)) // we will add condition. If the path has required folder or not. If the path has folder, then it will add file otherwise it will create folder first, then add the file in that folder.
                Directory.CreateDirectory(uploadFilesPath);
            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(filesData.FileName);//we will create a unique file name using Guid.
            var filePath = Path.Combine(uploadFilesPath, fileName); //, we will create a path with the combination of file name.
            using (var stream = new FileStream(filePath, FileMode.Create)) //we will use a stream to read the input files and then will store into the path.
            {
                await filesData.CopyToAsync(stream);
            }
            var photo = new file { FileName = fileName };
            _context.files.Add(photo);
            await _context.SaveChangesAsync();
            return Ok();
        }

}
}




 
