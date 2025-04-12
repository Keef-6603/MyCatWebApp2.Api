using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace MyCatWebApp2.Api.Models
{
    public class CatBox
    {
        [Required]
        public int CatBoxId { get; set; }
        [Required]
        public string CatBoxType { get; set; }
        [Required]
        public string CatBoxSize { get; set; }
        public string CFeatures { get; set; }

        public CatProfile Profile { get; set; }

        [Required]
        public CatBoxStatus RequestStatus { get; set; } = CatBoxStatus.Pending;

        public DateTime Created { get; set; } = DateTime.Now;
        public string Reason { get; set; } = "Available";
    }

    public enum CatBoxStatus
    {
        Approved,
        Pending,
        Rejected,
    } 
}
