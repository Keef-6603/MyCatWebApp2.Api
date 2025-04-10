using Microsoft.Identity.Client;
using System.ComponentModel.DataAnnotations;

namespace MyCatWebApp2.Api.Models
{
    public class CatProfile
    {
        [Required]
        public int Id { get; set; }
        [Required]
        [MaxLength(255)]
        public string Name { get; set; }
        [MaxLength(255)]
        public string NickName { get; set; }
        [Required]
        [Range(0, 40, ErrorMessage = "Value must be between 0 and 40")]
        public int Age { get; set; }
        public string Color { get; set; }
        [Required]
        [Range(0, 65, ErrorMessage = "Value must be between 0 and 65")]
        public int Weight { get; set; }
        [Required]
        public string Sex { get; set; }
        [Required]
        public string PurrferedBoxSize { get; set; }
        public DateTime Created { get; set; }
        public bool IsApproved {  get; set; }   
        public CatProfile() { }
    }
}
