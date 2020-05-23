app.service('notifications', ['$rootScope', function ($rootScope) {
    var queue = [];
    return {
        queue: queue,
        add: function (item) {
            var index = -1;
            for (var i = 0; i < this.queue.length; i++) {
                if (queue[i].body == item.body) {
                    index = i;
                    break;
                }
            }
            if (index != -1)
                return;
            queue.push(item);
            setTimeout(function () {
                $('.alerts .alert').eq(0).remove();
                queue.shift();
            }, 90000);
        },
        pop: function (item) {
            var index = -1;
            for (var i = 0; i < this.queue.length; i++) {
                if (queue[i].body == item) {
                    index = i;
                    break;
                }
            }
            if (index != -1)
                queue.splice(index, 1);
            return this.queue;
        }
    };
}
]);