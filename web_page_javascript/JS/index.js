function dayoftheweek(thedaynumb) {
  if (thedaynumb > 7 || thedaynumb < 1) {
    console.log('There is only 7 days a week');
  }
  else {
    switch (thedaynumb) {
      case 1:
        console.log('Saturday');
        break;
      case 2:
        console.log('Sunday');
        break;
      case 3:
        console.log('Monday');
        break;
      case 4:
        console.log('Tuesday');
        break;
      case 5:
        console.log('Wednesday');
        break;
      case 6:
        console.log('Thursday');
        break;
      default:
        console.log('Friday');
    }
  }
}

dayoftheweek(1)
dayoftheweek(2)
dayoftheweek(0)