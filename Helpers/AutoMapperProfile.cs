using AutoMapper;
using kb_app.Models;
//using WebApi.Entities;
//using kb_app.Helpers;

namespace kb_app.Helpers
{
   public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserModel>();
            CreateMap<UserModel, User>();
        }
    }
}