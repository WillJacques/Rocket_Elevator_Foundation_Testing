using NUnit.Framework;
using ElevatorMedia;

namespace Elevator.Media.Tests
{
    [TestFixture]
    public class Streamer_getContentTests
    {
        private Streamer _primeMedia;
        [SetUp]
        public void Setup()
        {
            _primeMedia = new Streamer();
        }

        [Test]
        public void getContent_CandidateIs1_ReturnFalse()
        {
            var result = _primeMedia.getContent1(1);
            Assert.IsFalse(result, "1 should not be prime");
        }

        [TestCase(2)]
        [TestCase(10)]
        [TestCase(100)]
        public void getContent_CandidateIs2OrMore_ReturnTrue(int value)
        {
            var result = _primeMedia.getContent1(value);
            Assert.IsTrue(result, $"{value} should not be prime");
        }

        [TestCase(120)]
        public void getContent_returnsstring_HiValue_with_FIZZBUZZ_in_console(int value)
        {
            var result = _primeMedia.getContent2(value);
            Assert.IsInstanceOf<string>(result);
        }
    }
}