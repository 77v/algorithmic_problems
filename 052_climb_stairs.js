// http://careercup.com/question?id=5696794451247104

// Implement stairs(N) that (collect the solutions in a list) prints all the ways to climb up a N-step-stairs                                                                                                                                                                      
// where one can either take a single step or double step.                                                                                                                                                                                       
// We'll use 1 to represent a single step, and 2 to represent a double step.

// stairs(3)
// 111
// 12
// 21

function stairs(N, l, s) {
  l = l || [];
  s = s || 0;

  if (s == N) console.log(l.join(''));
  else if (s < N) {
    l.push(1);
    stairs(N, l, s + 1);
    l.pop();
    l.push(2);
    stairs(N, l, s + 2);
    l.pop();
  }
}

stairs(3);
