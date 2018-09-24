using System;
using System.ComponentModel.DataAnnotations;

namespace kb_app.Models
{
    public class User
    {
        [Key]
        public int UID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }

        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

         public int CreatedBy { get; set; }

        public int UpdatedBy { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime UpdatedOn { get; set; }
    }
}