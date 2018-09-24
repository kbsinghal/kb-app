// using kb_app.Models;
// using System.Collections.Generic;
// using System.Linq;
// using System;
// using kb_app.Helpers;



// namespace kb_app.Services
// {
//     public interface IUserService
//     {
//         UserModel Authenticate(string username, string password);
//         IEnumerable<UserModel> GetAll();
//         UserModel GetById(int id);
//         UserModel Create(UserModel user, string password);
//         void Update(UserModel user, string password = null);
//         void Delete(int id);
//     }
 
//     public class UserService : IUserService
//     {
//         //private DataContext _context;
//          private readonly KBAppContext _context;  
 
//         public UserService(KBAppContext context)
//         //public UserService((KBAppContext context)
//         {
//             _context = context;
//         }
 
//         public UserModel Authenticate(string username, string password)
//         {
//             if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
//                 return null;
 
//             var user = _context.User.SingleOrDefault(x => x.Username == username);
 
//             // check if username exists
//             if (user == null)
//                 return null;
 
//             // check if password is correct
//             if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
//                 return null;
 
//             // authentication successful
//             UserModel result=new UserModel{UserID = user.UserID, FirstName= user.FirstName, LastName= user.LastName, Email= user.Email};
//             //return user;
//             return result;
//         }
 
//         //public List<UserModel> GetAll()
//         public IEnumerable<UserModel> GetAll()
//         {
//             //return _context.User;
//             return _context.User.Select(x => new UserModel{UserID = x.UserID, FirstName= x.FirstName, LastName= x.LastName, Email= x.Email}).ToList();
//         }
 
//         public UserModel GetById(int id)
//         {
//             //return _context.User.Find(id);
//             //return _context.User.Where(x => x.UserID==id).Select(x => new UserModel{UserID = x.UserID, FirstName= x.FirstName, LastName= x.LastName, Email= x.Email});
        
//          User st=_context.User.Where<User>(t => t.UserID == id).FirstOrDefault();
            
//             UserModel item=null;

//             if (st == null) {  
//                 //return NotFound();  
//             }  
//             else
//             {
//                  item=new UserModel();
//                 item.UserID=st.UserID;
//                 item.Username=st.Username;
//                 item.FirstName=st.FirstName;
//                 item.LastName=st.LastName;
//                 item.Email=st.Email;
                
//             }
//             return (item);  
        
//         }
 
//         public UserModel Create(UserModel user, string password)
//         {
//             // validation
//             if (string.IsNullOrWhiteSpace(password))
//                 throw new AppException("Password is required");
 
//             if (_context.User.Any(x => x.Username == user.Username))
//                 throw new AppException("Username \"" + user.Username + "\" is already taken");
 
//             byte[] passwordHash, passwordSalt;
//             CreatePasswordHash(password, out passwordHash, out passwordSalt);
 
//             user.PasswordHash = passwordHash;
//             user.PasswordSalt = passwordSalt;

 
//             _context.User.Add(
//                 new User {  
//                      Username= user.Username,
//                      FirstName = user.FirstName,
//                      LastName = user.LastName,
                     

//                      PasswordHash = user.PasswordHash,
//                      PasswordSalt = user.PasswordSalt,
//                      CreatedOn= DateTime.Now,
//                      //UpdatedOn= DateTime.Now,
//                      CreatedBy= user.UID,
//                 }
//                      );
//             _context.SaveChanges();
 
//             return user;
//         }
 
//         public void Update(UserModel userParam, string password = null)
//         {
//             var user = _context.User.Find(userParam.UID);
 
//             if (user == null)
//                 throw new AppException("User not found");
 
//             if (userParam.Username != user.Username)
//             {
//                 // username has changed so check if the new username is already taken
//                 if (_context.User.Any(x => x.Username == userParam.Username))
//                     throw new AppException("Username " + userParam.Username + " is already taken");
//             }
 
//             // update user properties
//             user.FirstName = userParam.FirstName;
//             user.LastName = userParam.LastName;
//             user.Username = userParam.Username;
 
//             // update password if it was entered
//             if (!string.IsNullOrWhiteSpace(password))
//             {
//                 byte[] passwordHash, passwordSalt;
//                 CreatePasswordHash(password, out passwordHash, out passwordSalt);
 
//                 user.PasswordHash = passwordHash;
//                 user.PasswordSalt = passwordSalt;
//             }
 
//             _context.User.Update(user);
//             _context.SaveChanges();
//         }
 
//         public void Delete(int id)
//         {
//             // var user = _context.User.Find(id);
//             // if (user != null)
//             // {
//             //     _context.User.Remove(user);
//             //     _context.SaveChanges();
//             // }
//         }
 
//         // private helper methods
 
//         private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
//         {
//             if (password == null) throw new ArgumentNullException("password");
//             if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
 
//             using (var hmac = new System.Security.Cryptography.HMACSHA512())
//             {
//                 passwordSalt = hmac.Key;
//                 passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
//             }
//         }
 
//         private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
//         {
//             if (password == null) throw new ArgumentNullException("password");
//             if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
//             if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
//             if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");
 
//             using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
//             {
//                 var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
//                 for (int i = 0; i < computedHash.Length; i++)
//                 {
//                     if (computedHash[i] != storedHash[i]) return false;
//                 }
//             }
 
//             return true;
//         }
//     }
// }