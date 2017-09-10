function loop(numberOfTimes){
  console.log(`loop number ${numberOfTimes}`);
  return numberOfTimes==1? "complete" :loop(--numberOfTimes);
}

loop(3);
