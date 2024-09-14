import {AlwatrContextSignal} from '@alwatr/signal';

const context = new AlwatrContextSignal<{name: string; age: number}>({name: 'user-info-context'});

function subscribeHandler(): void {
  console.log('subscribe: a new context signal received', context.getValue());
}
context.subscribe(subscribeHandler);

document.getElementById('myButton1')?.addEventListener('click', () => {
  context.setValue({name: 'Ali', age: 20});
});

document.getElementById('myButton2')?.addEventListener('click', () => {
  context.subscribe(subscribeHandler);
});

document.getElementById('myButton3')?.addEventListener('click', () => {
  context.unsubscribe(subscribeHandler);
});

document.getElementById('myButton4')?.addEventListener('click', () => {
  context.expire();
});

document.getElementById('myButton5')?.addEventListener('click', () => {
  console.log('value:', context.getValue());
});

document.getElementById('myButton6')?.addEventListener('click', async () => {
  await context.untilChange();
  console.log('until change reolved');
});
