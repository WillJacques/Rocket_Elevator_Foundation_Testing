﻿using System;

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
        public bool getContent()
        {
            throw new NotImplementedException("Please create a test first.");
        }
    }
}
