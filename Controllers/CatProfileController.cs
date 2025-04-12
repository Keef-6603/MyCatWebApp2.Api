using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCatWebApp2.Api.Models;
using MyCatWebApp2.Api.Repository;

namespace MyCatWebApp2.Api.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class CatProfileController : ControllerBase
    {
        private readonly ICatProfileRepo _repo;
        public CatProfileController(ICatProfileRepo repo) { _repo = repo; }

        // GET: api/<DataController>
        [HttpGet]
        [Route("GetAllCats")]
        public async Task<ActionResult<IEnumerable<CatProfile>>> GetAllCats()
        {
            if (_repo.CheckDbConncection())
            {
                return await _repo.SelectAll();
            }
            return NotFound();
        }

        [HttpGet]
        [Route("GetCatProfile/{id}")]
        public async Task<ActionResult<CatProfile>> GetCatProfile(int id)
        {
            var model = await _repo.SelectById(id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        [HttpPost]
        [Route("CreateCatProfile")]
        public async Task<ActionResult<CatProfile>> CreatCatProfile([FromBody] CatProfile model)
        {
            await _repo.CreateAsync(model);
            return Ok(model);
           
        }

        [HttpPut]
        [Route("UpdateCatProfile/{id}")]
        public async Task<IActionResult> UpdateCatProfile(long id, CatProfile model)
        {
            if (id != model.Id)
            {
                return BadRequest();
            }

            await _repo.UpdateAsync(model);

            return NoContent();
        }

        [HttpDelete]
        [Route("DeleteCatProfile/{id}")]
        public async Task<IActionResult> DeleteCatProfile(int id) 
        {
            _repo.DeleteById(id);   

            return NoContent(); 
        }
    }
}
