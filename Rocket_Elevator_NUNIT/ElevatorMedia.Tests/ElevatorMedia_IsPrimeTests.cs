using NUnit.Framework;
using Elevator.Medias;

namespace Elevator.Media.Tests
{
    [TestFixture]
    public class ElevatorMedia_IsPrimeTests
    {
        private ElevatorMedia _primeMedia;
        [SetUp]
        public void Setup()
        {
            _primeMedia = new ElevatorMedia();
        }

        [Test]
        public void IsPrime_CandidateIs1_ReturnFalse()
        {
            var result = _primeMedia.IsPrime(1);
            Assert.IsFalse(result, "1 should not be prime");
        }

        [TestCase(2)]
        [TestCase(10)]
        [TestCase(100)]
        public void IsPrime_CandidateIs2OrMore_ReturnTrue(int value)
        {
            var result = _primeMedia.IsPrime(value);
            Assert.IsTrue(result, $"{value} should not be prime");
        }
    }
}