if (date("w") == 0 || date("w") == 6 || $currentHour < $openTime || $currentHour >= $closeTime)
{
$myModal = 'display:none;';
}

else
{
$myModal = 'display:block;';
}