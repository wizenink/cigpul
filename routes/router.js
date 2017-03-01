var routes = [
    {"/api":"./api.js"}
    ];

module.exports = function(app) {
    for(var i = 0; i < routes.length;i++)
    {
        var obj = routes[i];
        for(var key in obj)
        {
            app.use(key,require(obj[key]));
        }
    }
}