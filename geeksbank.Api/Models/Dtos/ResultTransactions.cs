using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Geeksbank.Api.Models.Dtos
{
    public class ResultTransactions<T>
    {
        public T Transactions { get; set; }
        public bool Result { get; set; } = false;
    }

        


}
