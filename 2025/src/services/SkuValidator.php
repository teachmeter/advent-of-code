<?php

declare(strict_types=1);

namespace AdventOfCode2025\services;

class SkuValidator
{
    public function getInvalidSkuFromRange(int $start, int $end): array
    {
        $numbers = range($start, $end);

        return collect($numbers)->map(function ($number) {
            if (count(str_split((string) $number)) === 1) {
                return [$number];
            }
            return str_split((string) $number,  (int)( count(str_split((string) $number) ) / 2 ) );
        })
            ->filter(fn($items) => count($items) % 2 === 0)
            ->filter(fn($items) => $items[0] === $items[1])
            ->map(fn($items) => (int) implode('', $items))
            ->filter(fn($items) => !empty($items))
            ->values()
            ->toArray();
    }
}
