# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference** and **explicit typing** for primitive values. It highlights how TypeScript prevents bugs by flagging mismatched type assignments during development.

## 02-vanilla-js-types.js
Shows how JavaScript’s native `typeof` operator works to check variable types at runtime. This serves as a comparison to show what logic TypeScript handles before the code even runs.

## 03-flexible-types.ts
Illustrates the `any` type, which allows variables to bypass strict type checking for maximum flexibility. It warns against the risks of losing type safety, which can lead to runtime errors.

## 04-arrays-objects.ts
Covers the definition of arrays using **union types** and the structure of nested objects. It also introduces the `Record` type for mapping keys to specific value types in dynamic objects.

## 05-enum.ts
Introduces **string enums** to create a set of named constants for better code readability. It demonstrates how to properly assign and restrict variables to these predefined categories.

## 06-alternative-to-enum.ts
Explores **literal types** as a lightweight way to restrict variables to a specific set of allowed values. This approach provides strict validation for function parameters without the overhead of an enum.

## 07-custom-type-role.ts
Shows how to create **custom type aliases** to define complex data structures or specific value sets. These reusable types ensure consistency across objects, properties, and function signatures.

## 08-functions.ts
Explains how TypeScript handles function returns, including `void` for no return and `never` for infinite loops. It also demonstrates how to define custom types for functions and objects that contain methods.

## 09-special-types.ts
Focuses on using `null`, `undefined`, and **union types** to handle unpredictable data like web form inputs. This practice prevents crashes by forcing developers to account for missing information.

## 10-type-narrowing.ts
Covers **type casting** with the `as` keyword and **narrowing** through conditional checks to safely interact with HTML elements. It also introduces the non-null assertion (`!`) and optional chaining for cleaner code.

## 11-optional.ts
Demonstrates the use of the `?` operator to make function parameters and object properties optional. It also clarifies the difference between the `||` and `??` operators when setting fallback values for missing data.