using System.ComponentModel.DataAnnotations;

namespace MyCatWebApp2.Api.Models
{
    public class CatBox
    {
        [Required]
        public int CatBoxId { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public string Size { get; set; }
        public string Features { get; set; }

        public CatProfile Profile { get; set; } 
    }
}
