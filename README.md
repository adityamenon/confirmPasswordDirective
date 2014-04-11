confirmPasswordDirective
========================

Just a quick simple confirm password directive for Angular.

Right now you gotta copy-paste the code; open an issue if you'd like me to package this up as a bower component.

###Usage
```
<form name="myForm" novalidate>
    <input type="password" name="password" ng-model="myFormData.password" required>
    <input type="password" name="confirmPassword" ng-model="myFormData.confirmPassword" 
     required confirm-password validate-against-field="password">
</form>
```

###Suggestions and issue tickets gratefully accepted!