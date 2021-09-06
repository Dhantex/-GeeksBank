using AutoMapper;
using Geeksbank.Api.Models.Dtos;
using GeeksBank.Api.Models;

namespace Geeksbank.Api.Models
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<UserTransactions, UserTransactionsDto>().ReverseMap();
        }
    }
}
