using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCatWebApp2.Api.Data;
using MyCatWebApp2.Api.Models;

namespace MyCatWebApp2.Api.Repository
{
    public class CatProfileRepo : ICatProfileRepo
    {
        private readonly ApplicationDbContext _dbContext;

		public CatProfileRepo(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool CheckDbConncection()
        {
			try
			{
                _dbContext.Database.EnsureCreated();
                _dbContext.Database.CanConnect();
                return true;
            }
			catch (Exception)
			{

				return false;
			}
        }

        public Task CreateAsync(CatProfile model)
        {
            _dbContext.CatProfiles.Add(model);
            _dbContext.SaveChanges();
            return Task.CompletedTask;
        }

        public Task Delete(ActionResult<CatProfile> model)
        {
            
            return Task.CompletedTask;
        }

        public void DeleteById(int id)
        {
            var model = _dbContext.CatProfiles.FirstOrDefault(x=> x.Id == id);
            if (model != null) 
            {
                _dbContext.Remove(model);
                _dbContext.SaveChanges();
            }
        }

        public async Task<ActionResult<IEnumerable<CatProfile>>> SelectAll()
        {
           return await _dbContext.CatProfiles.ToListAsync();
        }

        public async Task<ActionResult<CatProfile>> SelectById(int id)
        {
            return await _dbContext.CatProfiles.FindAsync(id); 
        }

        public async Task<ActionResult<CatProfile>> SelectByIdAsync(int id)
        {
            return await _dbContext.CatProfiles.FindAsync(id);
        }

        public Task UpdateAsync(CatProfile model)
        {
            _dbContext.Update(model);
            _dbContext.SaveChanges();
            return Task.CompletedTask;
        }

    }
}
