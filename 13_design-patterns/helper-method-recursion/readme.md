## Example 1

```javascript
const outer = (input) => {
  let outerScopeVariable = [];

  const helper = (helperInput) => {
    // modify the outerScopedVariable
    helper(helperInput--)
  };

  helper(input);

  return outerScopedVariable;
}
```