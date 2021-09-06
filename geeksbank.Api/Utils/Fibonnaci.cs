
using System;

namespace Geeksbank.Api.Utils
{
    public class Fibonnaci: IFibonnaci
    {
        /// <summary>
        /// The positions entered in the fibonacci sequence are calculated
        /// </summary>
        /// <param name="NumberSequence"></param>
        /// <returns></returns>
        public string[] FibonnaciCalculator(long NumberSequence)
        {
            string[] resultFibonnaci = new string[NumberSequence];

            for (var i = 0; i < NumberSequence; i++)
            {
                double Phi = (1 + Math.Sqrt(5)) / 2;
                var ResultFibonacci =  (long)Math.Round(Math.Pow(Phi, i) / Math.Sqrt(5));
                resultFibonnaci.SetValue(ResultFibonacci.ToString(), i);
            }

            return resultFibonnaci;
        }


        /// <summary>
        /// Fibonacci optimized method
        /// </summary>
        /// <param name="T"></param>
        /// <returns></returns>
        public bool IsFibonacci(long number)
        {
            double root5 = Math.Sqrt(5);
            double phi = (1 + root5) / 2;
            long idx  = (long)Math.Floor(Math.Log(number * root5) / Math.Log(phi) + 0.5);
            long ResultOperation = (long)Math.Floor(Math.Pow(phi, idx) / root5 + 0.5);
            return (ResultOperation == number);
        }
    }

}
