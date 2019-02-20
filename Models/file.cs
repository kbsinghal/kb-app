using System;
using System.ComponentModel.DataAnnotations;

namespace kb_app.Models
{
    public class file
    {
       public int Id { get; set; }
        
        [Required]
        [StringLength(255)]
        public string FileName { get; set; } 


    }
}