
function priorityQueue() {
    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }
    //1属性
    this.items = []

    priorityQueue.prototype.enQueue = function (element, priority) {
        //创建对象
        var qElement = new QueueElement(element, priority)
        //判断队列是否为空
        if (this.items.length == 0) {
            this.items.push(qElement)
        } else {
            var added = false;
            for (var i = 0; i < this.items.length; i++) {
                if (qElement.priority < this.items[i].priority) {
                    //插入到当前位置
                    this.items.splice(i, 0, qElement)
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.items.push(qElement)
            }
        }
    }
    //2删除队列首元素
    priorityQueue.prototype.deQueue = function () {
        return this.items.shift()
    }
    //3查看队列前端元素
    priorityQueue.prototype.front = function () {
        return this.items[0]
    }
    //4查看队列是否为空
    priorityQueue.prototype.isEmpty = function () {
        return this.items.length == 0
    }
    //5查看队列元素个数
    priorityQueue.prototype.size = function () {
        return this.items.length
    }
    //6toString方法
    priorityQueue.prototype.toString = function () {
        var resultString = ''
        for (var i = 0; i < this.items.length; i++) {
            resultString += this.items[i].priority + '-' + this.items[i].element + ' '
        }
        return resultString;
    }
};

self._queue = new priorityQueue();
self.start = false;

self.addEventListener('message', function (e) {
    var data = e.data;
    var action = data[0];

    if (action == "add") {
        var url = data[1];
        var priority = data[2];
        var task = {};
        task.url = url;
        task.isCancel = false;
        task.cancel = function () {
            this.isCancel = true;
            self.runTask();
            if (this.controller) {
                self._curLoader--;
                this.controller.abort();
            }
        };
        task.dataLoaded = function (ab) {
            if (!this.isCancel) {
                //var view = new DataView(ab);
               // var memSize = view.getInt32(0, true);//模型占用总内存
                var result = {ctx: ab,callback:this.url};
                postMessage(result);
            }
        };

        task.run = function () {
            if (this.isCancel) {

                return;
            }
            var that = this;
            this.controller = new AbortController();
            self._curLoader++;
            var signal = this.controller.signal;
            fetch(this.url+"_vex", { signal }).then(function (response) {
                if (response.ok) {
                    return response.arrayBuffer();
                } else {
                    throw new Error('Network response was not ok.');
                }
            }).then(function (ab) {
                self._curLoader--;
                self.runTask();

                that.dataLoaded(ab);

            }).catch(function (error) {
                self._curLoader--;
                self.runTask();
            });
        }
        this._queue.enQueue(task, priority);
        //if (!this.start) {
        this.runTask();
        //    this.start=true;
        //}
    } else if (action == "del") {
        var url = data[1];
        var items = self._queue.items;
        var len = items.length;
        for (var i = 0; i < len; ++i) {
            var item = items[i].element;
            //var elm = item
            if (item.url == url) {
                item.cancel();
                break;
            }
        }
    }
});


self.getTask = function () {
    if (this._queue.size() > 0) {
        return this._queue.deQueue();
    } else {
        return null;
    }
}
//并发数
self.concurrent = 50;
self._curLoader = 0;
self.runTask = function () {
    if (self._curLoader > self.concurrent) {
        return;
    }

    var taskElm = self.getTask();
    if (taskElm != null) {
        var task = taskElm.element;
        task.run();

    }
}
