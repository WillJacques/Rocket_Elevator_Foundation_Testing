using System;

namespace ElevatorMedia
{
    public class Streamer
    {
        public bool getContent(int candidate)
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
    }
}
