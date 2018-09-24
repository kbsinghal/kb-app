namespace kb_app.Models
{
    public class UserModel
    {
        public int UID { get; set; }
        
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }

             public string Email { get; set; }
        public string Password { get; set; }

        //public byte[] PasswordSalt { get; set; }

        
        public int UserID { get; set; }
    
    }
}