# SimpleQtyCounter

Let's start by looking at a small React counter component. It tracks a number in component state, and increments the number when a button is clicked:

Applied the counter logic into qty increment /decrement and used the "one-way data flow"

It is a self-contained app with the following parts:

<ol>
<li>The state, the source of truth that drives our app;</li>
<li>The view, a declarative description of the UI based on the current state</li>
<li>The actions, the events that occur in the app based on user input, and trigger updates in the state</li>
</ol>
<h3> This is a small example of "one-way data flow":</h3>

<ol>
<li>State describes the condition of the app at a specific point in time</li>
<li>The UI is rendered based on that state</li>
<li>When something happens (such as a user clicking a button), the state is updated based on what occurred</li>
<li>The UI re-renders based on the new state</li>
</ol>


[Demo](https://inudn.csb.app/)
Created with CodeSandbox

