# OptionalDecimal

A container object which may or may not contain a non-null `Decimal` value. If a value is present, `isPresent()` will return true and `get()` will return the value. Additional methods that depend on the presence or absence of a contained value are provided, such as `orElse()` (return a default value if value not present) or `orElseThrow` (throw an exception if a value is not present).

## of

Builds an `OptionalDecimal`.

## isPresent

Returns `true` if a value is present.

**Signature**
```
Boolean isPresent()
```

## get

Returns the value when it is present. Throws a `System.NoSuchElementException` when it is not.

**Signature**
```
Boolean isPresent()
```

## orElse

Returns a value when it is present, or `other` when it is not.
**Signature**
```
SObject orElse(SObject other)
```

## orElseThrow

Returns a value when it is present, or throws `e` when it is not.

**Signature**
```
SObject orElseThrow(Exception e)
```


