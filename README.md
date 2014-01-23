# Juniper.js

## Overview

**Juniper.js** allows you to use Parsley.js validation with X-editable forms.

### Compatible with:
* Parsley.js v1.2.3
* X-editable (bootstrap-editable) v1.5.1

## Documentation
### Usage
JS

	$('.editable').editable().juniper();

Html

	<a href="#"
	   class="editable"
	   data-title="Enter Url"
	   data-juniper-type="url"
	   data-juniper-required="true">github.com</a>


### Configuration
* `namespace`: namespace for html attributes
* `trigger`: javascript event to trigger validation
* `controlGroupClass`: class (`has-error`) assigned by x-editable to show proper error message styling and to determine if there are errors present in the form
* `errorClass`: class added to the control group for proper error message styling
* `parsleyDefaults`
	* `animate`: animate error messages


### Defaults
	namespace: 'data-juniper',
	trigger: 'keyup',
	controlGroupClass: '.control-group',
    errorClass: 'has-error parsley-error',
    parsleyDefaults: {
    	animate: true
    }




