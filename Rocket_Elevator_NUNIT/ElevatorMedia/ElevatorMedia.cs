using System;
using System.Net;
using Newtonsoft.Json.Linq;

namespace ElevatorMedia
{
    public class Streamer
    {
        public bool getContent1(int candidate)
        {
            if(candidate == 1)
            {
                return false;
            }
            if(candidate >= 2)
            {
                return true;
            }
            throw new NotImplementedException("Please create a test first.");
        }
        public string getContent2(int value)
        {
            string answer = "";
            for (int i = 0 ; i <= value; i++ )
            {
                if(i % 15 == 0)
                {
                    Console.WriteLine("FizzBuzz");
                }  
                else if(i % 3 == 0)
                {
                    Console.WriteLine("Fizz");
                }
                else if(i % 5 == 0)
                {
                    Console.WriteLine("Buzz");
                }
                else 
                {
                    Console.WriteLine($"{i}");
                }
                answer = $"Hi {i} !";
            }
            Console.WriteLine(answer);
            return answer;
        }
        public string getContent()
        {
            var json = new WebClient().DownloadString("https://api.chucknorris.io/jokes/random");
            var response = JObject.Parse(json);
            string chuckfact = response["value"].ToString();
            Console.WriteLine(chuckfact);
            return chuckfact;
        }
    }
}
