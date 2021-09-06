using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GeeksBank.Api.Models
{
    public class UserTransactions
    {
        [Key]
        public int Id { get; set; }
        public int FirstNumber { get; set; }
        public int SecondNumber { get; set; }
        public double CalculationResult { get; set; }
    }
}
