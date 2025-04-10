using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCatWebApp2.Api.Data;
using MyCatWebApp2.Api.Models;

namespace MyCatWebApp2.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatBoxesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CatBoxesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/CatBoxes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CatBox>>> GetCatBoxes()
        {
          if (_context.CatBoxes == null)
          {
              return NotFound();
          }
            return await _context.CatBoxes.ToListAsync();
        }

        // GET: api/CatBoxes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CatBox>> GetCatBox(int id)
        {
          if (_context.CatBoxes == null)
          {
              return NotFound();
          }
            var catBox = await _context.CatBoxes.FindAsync(id);

            if (catBox == null)
            {
                return NotFound();
            }

            return catBox;
        }

        // PUT: api/CatBoxes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCatBox(int id, CatBox catBox)
        {
            if (id != catBox.CatBoxId)
            {
                return BadRequest();
            }

            _context.Entry(catBox).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CatBoxExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CatBoxes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CatBox>> PostCatBox(CatBox catBox)
        {
          if (_context.CatBoxes == null)
          {
              return Problem("Entity set 'ApplicationDbContext.CatBoxes'  is null.");
          }
            _context.CatBoxes.Add(catBox);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCatBox", new { id = catBox.CatBoxId }, catBox);
        }

        // DELETE: api/CatBoxes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCatBox(int id)
        {
            if (_context.CatBoxes == null)
            {
                return NotFound();
            }
            var catBox = await _context.CatBoxes.FindAsync(id);
            if (catBox == null)
            {
                return NotFound();
            }

            _context.CatBoxes.Remove(catBox);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CatBoxExists(int id)
        {
            return (_context.CatBoxes?.Any(e => e.CatBoxId == id)).GetValueOrDefault();
        }
    }
}
