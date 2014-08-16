confirmPasswordDirective
========================

Just a quick simple confirm password directive for Angular.

Currently the code has to be manually copied for usage. Please open an issue if you'd like me to package this up as a bower component.

###Usage
```
<form name="myForm" novalidate>
    <input type="password" name="password" ng-model="myFormData.password" required>
    <input type="password" name="confirmPassword" ng-model="myFormData.confirmPassword" 
     required confirm-password verify-against-field="password">
</form>
```

###Suggestions and issue tickets welcome!
