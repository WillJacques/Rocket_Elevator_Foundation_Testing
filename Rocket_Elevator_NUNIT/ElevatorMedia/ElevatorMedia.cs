using System;

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
        public string getContent(int value)
        {
            string answer = "";
            for (int i = 0 ; i <= value; i++ )
            {
                answer = $"Hi {i} !";
                Console.WriteLine(answer);
            }
            return answer;
        }
    }
}
