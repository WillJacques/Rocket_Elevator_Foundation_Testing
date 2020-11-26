using NUnit.Framework;
using Prime.Services;

namespace Prime.Service.Tests
{
    [TestFixture]
    public class PrimeService_IsPrimeTests
    {
        private PrimeService _primeService;
        [SetUp]
        public void Setup()
        {
            _primeService = new PrimeService();
        }

        [Test]
        public void IsPrime_CandidateIs1_ReturnFalse()
        {
            var result = _primeService.IsPrime(1);
            Assert.IsFalse(result, "1 should not be prime");
        }

        [TestCase(2)]
        [TestCase(10)]
        [TestCase(100)]
        public void IsPrime_CandidateIs2OrMore_ReturnTrue(int value)
        {
            var result = _primeService.IsPrime(value);
            Assert.IsTrue(result, $"{value} should not be prime");
        }
    }
}