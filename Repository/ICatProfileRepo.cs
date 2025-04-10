using Microsoft.AspNetCore.Mvc;
using MyCatWebApp2.Api.Models;

namespace MyCatWebApp2.Api.Repository
{
    public interface ICatProfileRepo
    {
        bool CheckDbConncection();
        Task CreateAsync(CatProfile model);
        Task Delete(ActionResult<CatProfile> model);
        void DeleteById(int id);
        Task<ActionResult<IEnumerable<CatProfile>>> SelectAll();
        Task<ActionResult<CatProfile>> SelectById(int id);
        Task<ActionResult<CatProfile>> SelectByIdAsync(int id);
        Task UpdateAsync(CatProfile model);
    }
}
