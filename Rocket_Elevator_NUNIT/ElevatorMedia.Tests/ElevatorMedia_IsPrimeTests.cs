using NUnit.Framework;
using Elevator.Medias;

namespace Elevator.Media.Tests
{
    [TestFixture]
    public class ElevatorMedia_IsElevatorTests
    {
        private ElevatorMedia _primeMedia;
        [SetUp]
        public void Setup()
        {
            _primeMedia = new ElevatorMedia();
        }

        [Test]
        public void IsElevator_CandidateIs1_ReturnFalse()
        {
            var result = _primeMedia.IsElevator(1);
            Assert.IsFalse(result, "1 should not be prime");
        }

        [TestCase(2)]
        [TestCase(10)]
        [TestCase(100)]
        public void IsElevator_CandidateIs2OrMore_ReturnTrue(int value)
        {
            var result = _primeMedia.IsElevator(value);
            Assert.IsTrue(result, $"{value} should not be prime");
        }
    }
}