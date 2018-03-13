function factorial(tillNumber){
  if(tillNumber==1) return 1;
  return tillNumber*factorial(tillNumber-1);
}