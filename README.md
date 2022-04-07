# Open-Close Principle

**[Open-Closed Pricinple](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design#open-closed-principle)** is the 2nd principle of the Object Oriented Design in the [SOLID](https://en.wikipedia.org/wiki/SOLID) Principles.

In software engineering, SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible, and maintainable.

**Open-closed Principle** states that:
> Objects or entities should be `open` for extension but `closed` for modification.

This means that a class should be `extendable without modifying the class itself`.

## Use Case
One way you can notice whether your code require this design pattern, is when there are a lot of `if ... else if` clause, or `switch case` statements.

## What this code does?
This code illustrate an example where a piece of function is responsible to handle a mail payload event from a Queue. The function does the following steps:
1. validate event payload
2. logging the event
3. send an email (internally it will do a loop of supported provider)
4. put back to queue if timestamp < 1 day
5. alert when failure >= 1 day

We see from the implementation that `handleEvent` function is still `extendable` should we need to make modification to what providers we can support. Therefore since `handleEvent` is extendable yet does not require any change on the function itself (closed for modification), then we can say that we satisfy the `Open-closed` Principle
