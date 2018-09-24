using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kb_app.Models;
using Microsoft.AspNetCore.Mvc;
using kb_app.Helpers;
using Microsoft.AspNetCore.Authorization;


namespace kb_app.Controllers
{
    //[Authorize] //KB
    //[ApiController]
    //[Route("[controller]")]
    [Route("kbapi/[controller]")]  // set route attribute to make request as 'api/user'  

    public class UserController : Controller//ControllerBase
    {
        private readonly KBAppContext _context;  
    
    // initiate database context  
    public UserController(KBAppContext context) {  
            _context = context;  
        }  
 
       
    //[HttpPost]      
    //[Route("Authenticate")]  
        public UserModel Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;
 
            var user = _context.User.SingleOrDefault(x => x.Username == username);
 
            // check if username exists
            if (user == null)
                return null;
 
            // check if password is correct
            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;
 
            // authentication successful
            //return user;
            return new UserModel{
                UID=user.UID,
                Username=user.Username,
                FirstName=user.FirstName,
                LastName=user.LastName,
                Email=user.Email,
            };
        }
    [HttpGet]  
    [Route("getAllUser")]  
        public IEnumerable<UserModel> GetAll()
        {
            //return _context.User;
            return _context.User.Select(x => new UserModel{UID = x.UID, FirstName= x.FirstName, LastName= x.LastName, Email= x.Email, Username= x.Username}).ToList();
        }
 
   [HttpGet("{id}")]  
    [Route("getUser")] 
        public UserModel GetById(int id)
        {
            // return _context.User.Find(id);
             User st=_context.User.Where<User>(t => t.UID == id).FirstOrDefault();
            
            UserModel item=null;

            if (st == null) {  
                //return NotFound();  
            }  
            else
            {
                 item=new UserModel();
                item.UID=st.UID;
                item.Username=st.Username;
                item.FirstName=st.FirstName;
                item.LastName=st.LastName;
                item.Email=st.Email;
                
            }
            return (item);  
        }
 
           [HttpPost]  
    [Route("addUser")]  
        //public UserModel Create(UserModel user)
        public IActionResult Create([FromBody] UserModel user)
        //public UserModel Create(UserModel user, string password)
        {
            // validation
            // if (string.IsNullOrWhiteSpace(user.Password))
            //     throw new AppException("Password is required");
 
            // if (_context.User.Any(x => x.Username == user.Username))
            //     throw new AppException("Username \"" + user.Username + "\" is already taken");
 
            byte[] passwordHash, passwordSalt;
            //CreatePasswordHash(password, out passwordHash, out passwordSalt);
            CreatePasswordHash(user.Password, out passwordHash, out passwordSalt);
 
            //CreatePasswordHash("London@123", out passwordHash, out passwordSalt);
            //user.PasswordHash = passwordHash;
            //user.PasswordSalt = passwordSalt;
            //user.CreatedOn=DateTime.Now;
            //user.UpdatedOn=DateTime.Now;
            //user.CreatedBy=user.UserID;
 
            //_context.User.Add(user);
            _context.User.Add(
                new User {  
                     
                     FirstName = user.FirstName,
                     LastName = user.LastName,
                     Username= user.Username,
                     Email=user.Email,
                     PasswordHash = passwordHash,//user.PasswordHash,
                     PasswordSalt = passwordSalt,//user.PasswordSalt,
                     CreatedOn= DateTime.Now,
                     UpdatedOn= DateTime.Now,
                     CreatedBy= user.UserID,
                     UpdatedBy= user.UserID
                }
                     );

            _context.SaveChanges();
 
            //return user;
             return Ok(new {  
                message = "State is added successfully."  
            });  
        }
 
  [HttpPut("{id}")]
    [Route("updateUser")]
        public void Update([FromBody]UserModel userParam,long id)
        {
            var user = _context.User.Find(userParam.UID);
 
            if (user == null)
                throw new AppException("User not found");
 
            if (userParam.Username != user.Username)
            {
                // username has changed so check if the new username is already taken
                if (_context.User.Any(x => x.Username == userParam.Username))
                    throw new AppException("Username " + userParam.Username + " is already taken");
            }
 
            // update user properties
            user.FirstName = userParam.FirstName;
            user.LastName = userParam.LastName;
            user.Username = userParam.Username;
 
            // update password if it was entered
            if (!string.IsNullOrWhiteSpace(userParam.Password))
            {
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash(userParam.Password, out passwordHash, out passwordSalt);
 
                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
            }
 
            _context.User.Update(user);
            _context.SaveChanges();
        }

        // [HttpDelete("{id}")]  
        // [Route("deleteUser")]  
        public void Delete(int id)
        {
            // var user = _context.User.Find(id);
            // if (user != null)
            // {
            //     _context.User.Remove(user);
            //     _context.SaveChanges();
            // }
        }
 
        // private helper methods
 
        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
 
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
 
        private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");
 
            using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != storedHash[i]) return false;
                }
            }
 
            return true;
        }

    // private IUserService _userService;
    //     private IMapper _mapper;
    //     private readonly AppSettings _appSettings;
 
    //     public UsersController(
    //         IUserService userService,
    //         IMapper mapper,
    //         IOptions<AppSettings> appSettings)
    //     {
    //         _userService = userService;
    //         _mapper = mapper;
    //         _appSettings = appSettings.Value;
    //     }
 
    //     [AllowAnonymous]
    //     [HttpPost("authenticate")]
    //     public IActionResult Authenticate([FromBody]UserDto userDto)
    //     {
    //         var user = _userService.Authenticate(userDto.Username, userDto.Password);
 
    //         if (user == null)
    //             return BadRequest(new { message = "Username or password is incorrect" });
 
    //         var tokenHandler = new JwtSecurityTokenHandler();
    //         var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
    //         var tokenDescriptor = new SecurityTokenDescriptor
    //         {
    //             Subject = new ClaimsIdentity(new Claim[] 
    //             {
    //                 new Claim(ClaimTypes.Name, user.Id.ToString())
    //             }),
    //             Expires = DateTime.UtcNow.AddDays(7),
    //             SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
    //         };
    //         var token = tokenHandler.CreateToken(tokenDescriptor);
    //         var tokenString = tokenHandler.WriteToken(token);
 
    //         // return basic user info (without password) and token to store client side
    //         return Ok(new {
    //             Id = user.Id,
    //             Username = user.Username,
    //             FirstName = user.FirstName,
    //             LastName = user.LastName,
    //             Token = tokenString
    //         });
    //     }
 
    //     [AllowAnonymous]
    //     [HttpPost("register")]
    //     public IActionResult Register([FromBody]UserDto userDto)
    //     {
    //         // map dto to entity
    //         var user = _mapper.Map<User>(userDto);
 
    //         try
    //         {
    //             // save 
    //             _userService.Create(user, userDto.Password);
    //             return Ok();
    //         } 
    //         catch(AppException ex)
    //         {
    //             // return error message if there was an exception
    //             return BadRequest(new { message = ex.Message });
    //         }
    //     }
 
    //     [HttpGet]
    //     public IActionResult GetAll()
    //     {
    //         var users =  _userService.GetAll();
    //         var userDtos = _mapper.Map<IList<UserDto>>(users);
    //         return Ok(userDtos);
    //     }
 
    //     [HttpGet("{id}")]
    //     public IActionResult GetById(int id)
    //     {
    //         var user =  _userService.GetById(id);
    //         var userDto = _mapper.Map<UserDto>(user);
    //         return Ok(userDto);
    //     }
 
    //     [HttpPut("{id}")]
    //     public IActionResult Update(int id, [FromBody]UserDto userDto)
    //     {
    //         // map dto to entity and set id
    //         var user = _mapper.Map<User>(userDto);
    //         user.Id = id;
 
    //         try
    //         {
    //             // save 
    //             _userService.Update(user, userDto.Password);
    //             return Ok();
    //         } 
    //         catch(AppException ex)
    //         {
    //             // return error message if there was an exception
    //             return BadRequest(new { message = ex.Message });
    //         }
    //     }
 
    //     [HttpDelete("{id}")]
    //     public IActionResult Delete(int id)
    //     {
    //         _userService.Delete(id);
    //         return Ok();
    //     }
    }
}