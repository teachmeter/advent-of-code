<?php

namespace AdventOfCode2025\tests;

use AdventOfCode2025\services\SkuValidator;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

class SkuValidatorTest extends TestCase
{
    public static function range_test_generator(): array
    {
        return [
            [4, 14, [11]],
            [11, 22, [11, 22]],
            [95, 115, [99]],
            [998, 1012, [1010]],
            [1188511880, 1188511890, [1188511885]],
            [222220, 222224, [222222]],
            [1698522, 1698528, []],
            [446443, 446449, [446446]],
            [38593856, 38593862, [38593859]],
            [565653, 565659, []],
            [824824821, 824824827, []],
            [2121212118, 2121212124, []],
        ];
    }

    #[DataProvider('range_test_generator')]
    public function test_it_finds_invalid_ranges(int $start, int $end, $invalids): void
    {
        $validator = new SkuValidator();

        $this->assertEquals($invalids,$validator->getInvalidSkuFromRange(start: $start, end: $end));

    }

    public function test_all_invalid_ranges_sum_up_properly(): void
    {
        $invalidRanges = [11, 22, 99, 1010, 1188511885,222222, 446446, 38593859];

        $this->assertEquals(1227775554, array_sum($invalidRanges));
    }

}
