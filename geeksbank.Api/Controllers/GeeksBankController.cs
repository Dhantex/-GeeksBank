using AutoMapper;
using Geeksbank.Api.Models.Dtos;
using Geeksbank.Api.Utils;
using GeeksBank.Api.Context;
using GeeksBank.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GeeksBank.Api.Controllers
{
    [Route("api/GeeksBank")]
    public class GeeksBankController : Controller
    {

        private static string[] FibonnaciResult;

        public IActionResult Index()
        {
            return View();
        }

        private readonly AppDbContext _context;
        private readonly IFibonnaci _fibonnaci;
        private readonly IMapper _mapper;

        public GeeksBankController(AppDbContext context, IFibonnaci fibonnaci, IMapper mapper)
        {
            this._context = context;
            this._fibonnaci = fibonnaci;
            this._mapper = mapper;
            FibonnaciResult = _fibonnaci.FibonnaciCalculator(100);
        }

        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(_context.UserTransactions.ToList());

            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost]
        [Route("FibonnaciTransaction")]
        public ActionResult FibonnaciTransaction([FromBody] UserTransactionsDto userTransactionsRequest)
        {

            if(userTransactionsRequest.FirstNumber <=0 && userTransactionsRequest.SecondNumber <= 0)
            {
                return BadRequest("Debe ingresar almenos un número mayor a cero.");
            }

            try
            {
                var userTransactions = new ResultTransactions<UserTransactions>();

                userTransactions.Transactions = _mapper.Map<UserTransactions>(userTransactionsRequest);
                userTransactions.Transactions.CalculationResult = userTransactions.Transactions.FirstNumber + userTransactions.Transactions.SecondNumber;

                if (FibonnaciResult.Contains(userTransactions.Transactions.CalculationResult.ToString()))
                {
                    _context.UserTransactions.Add(userTransactions.Transactions);
                    _context.SaveChanges();

                    userTransactions.Result = true;

                    return Ok(userTransactions);
                }
                else
                {
                    return Ok(userTransactions);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

       

        [HttpPost]
        [Route("GetFibonnaci")]
        public ActionResult Fibonnaci(long number)
        {
            try
            {
                if (FibonnaciResult.Contains(number.ToString()))
                {
                    return Ok(true);
                }
                else
                {
                    return Ok(false);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPost]
        [Route("GetFibonnaciOptimized")]
        public ActionResult FibonnaciOptimized(long number)
        {
            try
            {
                return Ok(_fibonnaci.IsFibonacci(number));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

    }
}
