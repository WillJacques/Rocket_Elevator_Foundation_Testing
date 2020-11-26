using System;

namespace Elevator.Medias
{
    public class ElevatorMedia
    {
        public bool IsElevator(int candidate)
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
