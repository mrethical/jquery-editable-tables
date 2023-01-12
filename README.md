# jquery-editable-tables

> Project is now abandoned.

### Usage
- Download `jquery-editable-tables.min.js` from the `dist` folder
- Import the js file on html page after jquery has been imported
- You are now ready to use the extension. To make a table editable, call the `.editableTable()` function.
```
...
<table id="table">
...
</table>
...
<script type="text/javascript">
    $('#table').editableTable();
</script>
``` 

### Example
See `index.html`.

### Development

##### Requirements
- node <= 10
- npm
- gulp-cli (`npm install -g gulp-cli`)

##### Building the source
Run `gulp compile`. Source will be compile at the `dist` folder.
