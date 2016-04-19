# Alken Framework

Alken is a flux/CQRS like library.

## Feature

Alken provide a pattern, is not framework.

- Testable
- Scalable
- Responsibility Layers patten - well-known Domain-Driven Design

### Core class

- Context
- Dispatcher
- Store
- UseCase

### Sub System

- StoreGroup
- UseCaseExecutor

### Dispatcher

Dispatcher is a EventEmitter like class.
It use `dispatch(payload)`/`onDispatch((payload) => {})` instead of `on("key", ...args)`/`emit("key", ...args)`

- `onDispatch(payload): Function`
    - listen dispatch event and return un-listen function.
- `dispatch(payload): void`
    - dispatch event with `payload` object.

`payload` object must have `type` property.

```js
{
    type: "type"
}
```

is a minimal payload object.

```js
{
    type: "show",
    value: "value",
}
```

payload object also have other properties maybe.