app.filter('unique', function() {

    return function(arr, targetField) {
        var values = [],
            i,
            unique,
            l = arr.length,
            results = [],
            obj;
        for (i = 0; i < arr.length; i++) {

            obj = arr[i];
            unique = true;
            for (v = 0; v < values.length; v++) {
                if (obj[targetField] == values[v]) {
                    unique = false;
                }
            }
            if (unique) {
                values.push(obj[targetField]);
                results.push(obj);
            }

        }
        return results;
    };
})