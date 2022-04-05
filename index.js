function scuberGreetingForFeet(feetTraveling){
  if (feetTraveling <= 400){
    return 'This one is on me!';
  }
  else if (feetTraveling <= 2000){
    return 'That will be twenty bucks.';
  }
  else if (feetTraveling <= 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else if (feetTraveling > 2500){
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  const rideAvailable = city == "NYC" ? 'Ok, sounds good.' : 'No go.';
  return rideAvailable;
}

function switchOnCharmFromTip(tipQuality){
  let response;

  switch (tipQuality) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
      break;
  }
  return response;
}