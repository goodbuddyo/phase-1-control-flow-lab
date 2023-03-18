function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (someValue > 400 && someValue <= 2000) {
    return 'That will be twenty bucks.';
  } else if (someValue > 2000 && someValue <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  const taxiMessage = city === "NYC" ? "Ok, sounds good." : "No go.";
  console.log(city);
  console.log(taxiMessage);
  return taxiMessage;
}

function switchOnCharmFromTip(tip) {
  let tipResponse;

  switch (tip) {
    case 'generous':
      tipResponse = 'Thank you so much.';
      break;
    case 'not as generous':
      tipResponse = 'Thank you.';
      break;
    default:
      tipResponse = "Bye."
      break;
  }
  console.log(tipResponse);
  return tipResponse
}

scuberGreetingForFeet(155);
ternaryCheckCity("NYC");
ternaryCheckCity("LA");
switchOnCharmFromTip("generous");
switchOnCharmFromTip("not as generous");
switchOnCharmFromTip("something else");