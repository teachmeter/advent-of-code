<?php

require __DIR__ . '/../vendor/autoload.php';

//$input = str_replace("\n", '', file_get_contents(__DIR__ . '/../data/02/example.txt'));
$input = str_replace("\n", '', file_get_contents(__DIR__ . '/../data/02/input.txt'));

$items = explode(',', $input);
$ranges = array_map(fn($row) => explode('-', $row), $items);


$validator = new \AdventOfCode2025\services\SkuValidator();

$invalids = [];

foreach ($ranges as $range) {
    $invalids = [...$invalids,...$validator->getInvalidSkuFromRange($range[0], $range[1])];
}

dump($invalids);

echo sprintf("The sum is %d ", array_sum($invalids)) . PHP_EOL;
